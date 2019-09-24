// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import moment from 'moment';
import VueMoment from 'vue-moment';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});

Vue.use(Vuex);
Vue.use(VueMaterial);

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
