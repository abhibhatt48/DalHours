import React from 'react';
import {Text} from 'native-base';
import InstructorWrapper from '../../components/InstructorWrapper';
import {useSelector} from 'react-redux';

const Dashboard = () => {
  const {user} = useSelector(state => state.user);
  return (
    <InstructorWrapper title="Dashboard">
      <Text color="secondary.100">Hello {user.name}</Text>
    </InstructorWrapper>
  );
};

export default Dashboard;
