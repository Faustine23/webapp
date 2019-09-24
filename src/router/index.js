import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login';
import Signup from '../components/Signup';
import EditProfile from '../components/EditProfile';
import Logout from '../components/Logout';
import UserEmployee from '../components/UserEmployee';
import Clocker from '../components/Clocker';
import WorkingTime from '../components/WorkingTime';
import Calendar from '../components/Calendar';
import UserManager from '../components/UserManager';
import UserAdministrator from '../components/UserAdministrator';
import TeamsManager from '../components/TeamsManager';
import UsersProfileManager from '../components/UsersProfileManager';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/editprofile',
      name: 'EditProfile',
      component: EditProfile,
    },
    {
      path: '/useremployee',
      name: 'UserEmployee',
      component: UserEmployee,
    },
    {
      path: '/usermanager',
      name: 'UserManager',
      component: UserManager,
    },
    {
      path: '/useradministrator',
      name: 'UserAdministrator',
      component: UserAdministrator,
    },
    {
      path: '/clocker',
      name: 'Clocker',
      component: Clocker,
    },
    {
      path: '/workingtime',
      name: 'WorkingTime',
      component: WorkingTime,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/teamsmanager',
      name: 'TeamsManager',
      component: TeamsManager,
    },
    {
      path: '/usersprofilemanager',
      name: 'UsersProfileManager',
      component: UsersProfileManager,
    },
  ],
});
