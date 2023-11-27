const Timesheet = require("../../../models/timesheet");
const Course = require("../../../models/course");
const response = require("../../../utils/response");


async function getCoursesByTerm(term) {
    try {
        const courses = await Course.find({ term: term });
        return courses;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
}

async function getTimesheetsByCourseAndUser(courseIds, userId) {
    try {
        const timesheets = await Timesheet.find({
            courseId: { $in: courseIds },
            userId: userId,
        });
        return timesheets;
    } catch (error) {
        console.error('Error fetching timesheets:', error);
        throw error;
    }
}

async function getCoursesAndTimesheets(term, userId) {
    try {
        const courses = await getCoursesByTerm(term);
        if (courses.length === 0) {
            return response(res, 500, false, {
                message: "No courses found for the given term.",
            });
        }

        const courseIds = courses.map(course => course._id);

        const timesheets = await getTimesheetsByCourseAndUser(courseIds, userId);

        const formattedResponse = courses.map(course => {
            const matchingTimesheets = timesheets.filter(
                timesheet => timesheet.courseId.toString() === course._id.toString()
            );

            return {
                courseName: course.name,
                courseId: course._id,
                totalHours: matchingTimesheets.reduce((acc, ts) => acc + ts.totalHours, 0),
                maxHours: course.members.reduce((acc, member) => acc + member.maxHours, 0),
                timeSheets: matchingTimesheets.map(ts => ({
                    id: ts._id,
                    startTime: ts.startTime,
                    endTime: ts.endTime,
                    totalHours: ts.totalHours,
                    isOverTime: ts.isOverTime,
                })),
            };
        });

        return response(res, 201, true, formattedResponse);
    } catch (error) {
        console.error('Error fetching courses and timesheets:', error);
        return response(res, 500, false, {
            message: "Error fetching courses and timesheets"
        });
    }
}


async function details(req, res) {
    try {
        const {
            term,
            userId
        } = req.query;

        const result = await getCoursesAndTimesheets(term, userId);
        return result;
    } catch (error) {
        return response(res, 500, false, {
            message: "Failed to fetch data",
        });
    }
}

module.exports = details;
