import React from 'react';
import {Text} from 'native-base';
import TaWrapper from '../../components/TaWrapper';
import {useSelector} from 'react-redux';

const Dashboard = () => {
  const {user} = useSelector(state => state.user);

  return (
    <TaWrapper title="Dashboard">
      <Text color="secondary.100">Hello {user.name}</Text>
    </TaWrapper>
  );
};

export default Dashboard;
