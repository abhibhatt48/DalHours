import React, {useEffect, useState} from 'react';
import {Box} from 'native-base';
import AxiosInstance from '../../config/Axios';
import TaWrapper from '../../components/TaWrapper';
import InputType from '../../components/common/Input';
import CourseList from '../../components/CourseList';
import CenterSpinner from '../../components/common/CenterSpinner';

const Dashboard = ({navigation}) => {
  const [courseList, setCourseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCardPress = courseId => {
    const course = courseList.filter(c => c._id == courseId);
    navigation.navigate('COURSE_DETAILS', {course: course});
  };

  useEffect(() => {
    setLoading(true);
    AxiosInstance.get('/course/course-list')
      .then(({data}) => {
        setCourseList(data);
      })
      .catch(error => {
        setCourseList([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <TaWrapper title="Dashboard" navigation={navigation}>
      {loading ? (
        <CenterSpinner />
      ) : (
        <Box>
          <InputType
            placeholder="Search Courses"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            mt={4}
            mb={2}
          />
          <CourseList
            courses={courseList}
            searchQuery={searchQuery}
            onCoursePress={handleCardPress}
          />
        </Box>
      )}
    </TaWrapper>
  );
};

export default Dashboard;
