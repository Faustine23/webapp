<template>
  <!-- eslint-disable -->
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-content>

        <!-- form for making appointements -->
        <div id="datepicker">
          <div class="md-layout md-alignment-center">
            <md-card class="md-layout-item md-size-80"
                     style="background-color: #e9ecef">

              <md-card-header>
                <h1>Making appointments</h1>
              </md-card-header>

              <md-card-content>
                <md-datepicker class="md-layout-item md-size-30 md-small-size-100" v-model="selectedDate" md-immediately />
                <md-field>
                  <label>Initial Value</label>
                  <md-input class="md-layout-item md-size-30 md-small-size-100" v-model="initial"></md-input>
                </md-field>
                <br>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click=""><img src="../assets/icon/save.png"/></md-button>
                <md-button class="md-icon-button"
                           style="margin: auto"
                           v-on:click="$store.commit('seeAppointement')"><img src="../assets/icon/see.png"/></md-button>
              </md-card-actions>
            </md-card>
          </div>
          <br>

          <!-- List of appointements -->
            <div class="md-layout md-layout-item md-alignment-center">
              <md-card-content class="md-layout-item md-size-90"
                               style="background-color: #e9ecef"
                               v-if="$store.state.see">
                <md-card-header>
                  <h1>Appointements:</h1>
                </md-card-header>

                <md-list>
                  <md-list-item>
                    <md-icon><img src="../assets/icon/appoint.png"/></md-icon>
                    <span class="md-list-item-text">Date: {{ date }}
                    <br>Reason: {{ reason }}</span>
                  </md-list-item>
                </md-list>
              </md-card-content>
            </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'Calendar',
  data() {
    return {
      selectedDate: new Date('2019/09/23'),
      initial: 'Reason',
      date: '2019-09-26',
      reason: 'Time Manager',
    };
  },
};
</script>

<style>
  #datepicker{
    margin-top: 50px;
  }

</style>
