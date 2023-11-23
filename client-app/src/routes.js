import Login from './screens/Login';

const adminScreens = [];
const taScreens = [];
const instructorScreens = [];
const noAuthScreens = [{name: 'Login', component: Login}];

module.exports = {adminScreens, taScreens, instructorScreens, noAuthScreens};
