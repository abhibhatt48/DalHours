import React from 'react';
import {Text} from 'native-base';
import {useSelector} from 'react-redux';
import AdminWrapper from '../../components/AdminWrapper';

const Dashboard = ({navigation}) => {
  const {user} = useSelector(state => state.user);

  return (
    <AdminWrapper title="Dashboard" navigation={navigation}>
      <Text color="secondary.100">Hello {user.name}</Text>
    </AdminWrapper>
  );
};

export default Dashboard;
