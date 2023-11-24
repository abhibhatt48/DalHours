import Login from './screens/Login';
import AdminDashboard from './screens/admin/Dashboard';
import TaDashboard from './screens/taMarker/Dashboard';
import InstructorDashboard from './screens/instructor/Dashboard';
import AddUser from './screens/admin/AddUser';

const adminScreens = [
  {name: 'Dashboard', component: AdminDashboard},
  {name: 'ADD_USER', component: AddUser},
];
const taScreens = [{name: 'Dashboard', component: TaDashboard}];
const instructorScreens = [{name: 'Dashboard', component: InstructorDashboard}];
const noAuthScreens = [{name: 'Login', component: Login}];

module.exports = {adminScreens, taScreens, instructorScreens, noAuthScreens};
