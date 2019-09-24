import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login';
import Signup from '../components/Signup';
import EditProfile from '../components/EditProfile';
import Logout from '../components/Logout';
import UserEmployee from '../components/UserEmployee';
import Clocker from '../components/Clocker';

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
      path: '/clocker',
      name: 'Clocker',
      component: Clocker,
    },
  ],
});
