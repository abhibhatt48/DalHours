import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  ScrollView,
  Box,
  VStack,
  Text,
  Divider,
  Card,
  Button,
  Flex,
  Center,
} from 'native-base';
import AxiosInstance from '../../config/Axios';
import TaWrapper from '../../components/TaWrapper';

const CourseDetails = ({route}) => {
  const course = route.params.course[0];
  const [instructorDetails, setInstructorDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [totalTime, setTotalTime] = useState(0);
  const {user} = useSelector(state => state.user);
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [shiftTime, setShiftTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShiftTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AxiosInstance.get('/user/user?userId=' + course.instructorId)
      .then(({data}) => {
        setInstructorDetails(data.data[0]);
      })
      .catch(error => {
        setInstructorDetails({});
      });
  }, [course]);

  const punchHandler = () => {
    setIsPunchedIn(!isPunchedIn);
    setShiftTime(0)
  };

  const formatTime = totalSeconds => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <TaWrapper title="Course Details">
      <VStack space={4} p={4}>
        <Card>
          <Text color={'white'}>Course: {course.name}</Text>
          <Text color={'white'}>
            Term:{' '}
            {course.term.includes('_')
              ? course.term.replace('_', ' ')
              : course.term}
          </Text>
          <Text color={'white'}>Instructor: {instructorDetails.name}</Text>
          <Text color={'white'}>
            Instructor Email: {instructorDetails.email}
          </Text>
        </Card>

        <Divider my={2} />

        <Flex direction="row" justifyContent="space-between" mb={4}>
          <Card
            flex={1}
            mx={1}
            alignItems="center"
            justifyContent="center"
            p={2}>
            <Text fontSize="xl" bold color="white">
              Total Hours
            </Text>
            <Text fontSize="2xl" color="white">
              {80}
            </Text>
          </Card>
          <Card
            flex={1}
            mx={1}
            alignItems="center"
            justifyContent="center"
            p={2}>
            <Text fontSize="xl" bold color="white">
              Hours Limits
            </Text>
            <Text fontSize="2xl" color="white">
              {100}
            </Text>
          </Card>
        </Flex>

        <Flex direction="row" mb={4}>
          <Button
            bg="secondary.300"
            flex={1}
            pt={5}
            pb={5}
            onPress={punchHandler}
            mx={1}>
            <Text fontSize="lg" bold color="white">
              {!isPunchedIn ? 'Punch in' : 'Punch out'}
            </Text>
          </Button>
        </Flex>

        <Center>
          <Text fontSize="md" color="white" bold>
            {'Current shift time'}
          </Text>
          <Text fontSize="6xl" color="white" bold>
            {formatTime(isPunchedIn ? shiftTime : 0)}
          </Text>
        </Center>
      </VStack>
    </TaWrapper>
  );
};

export default CourseDetails;
