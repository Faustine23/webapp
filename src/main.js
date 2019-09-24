// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import moment from 'moment';
import VueMoment from 'vue-moment';
import VueMorris from 'vue-morris';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});

Vue.use(Vuex);
Vue.use(VueMaterial);
Vue.use(VueMorris);
Vue.use(VueAxios);
Vue.use(axios);

const store = new Vuex.Store({
  state: {
    startTime: false,
    endTime: false,
    timeClockIn: null,
    timeClockOut: null,
    disClockIn: false,
    disClockOut: true,
    clockIn: false,
    clockOut: false,

    user: '',
    searchuser: null,
    createuser: null,
    empolyee: null,
    disSearch: false,
    disCreate: false,

    searchteams: null,
    createteams: null,
    disSearchTeam: false,
    disCreateTeam: false,

    see: false,

  },
  mutations: {
    changeClockIn(state) {
      if (state.startTime === false) {
        state.startTime = true;
        state.clockIn = true;
        state.disClockIn = true;
        state.disClockOut = false;
        state.endTime = false;
      }
    },
    changeClockOut(state) {
      if (state.endTime === false) {
        state.endTime = true;
        state.clockOut = true;
        state.startTime = false;
        state.disClockOut = true;
        state.disClockIn = false;
      }
    },

    searchTeams(state) {
      state.searchteams = true;
      state.disCreateTeam = true;
    },
    createTeams(state) {
      state.createteams = true;
      state.disSearchTeam = true;
    },
    refershTeams(state) {
      state.searchteams = null;
      state.createteams = null;
      state.disSearchTeam = false;
      state.disCreateTeam = false;
    },

    searchUser(state) {
      state.searchuser = true;
      state.empolyee = true;
      state.disCreate = true;
    },
    createUser(state) {
      state.createuser = true;
      state.disSearch = true;
    },
    editUser(state) {
      state.createuser = true;
      state.disSearch = true;
    },
    refershUser(state) {
      state.searchuser = null;
      state.createuser = null;
      state.empolyee = null;
      state.disSearch = false;
      state.disCreate = false;
    },

    seeAppointement(state) {
      state.see = true;
    },
  },
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
