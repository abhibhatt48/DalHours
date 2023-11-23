import React from 'react';
import {Text} from 'native-base';
import {useSelector} from 'react-redux';
import AdminWrapper from '../../components/AdminWrapper';

const Dashboard = () => {
  const {user} = useSelector(state => state.user);

  return (
    <AdminWrapper title="Dashboard">
      <Text color="secondary.100">Hello {user.name}</Text>
    </AdminWrapper>
  );
};

export default Dashboard;