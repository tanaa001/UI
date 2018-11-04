<template>
  <div>
    <base-header></base-header>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
          <main-content-member></main-content-member>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <main-content-schedule></main-content-schedule>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import baseHeader from '@/components/modules/base-header'
import mainContentSchedule from '@/components/modules/main-content-schedule'
import mainContentMember from '@/components/modules/main-content-member'
import { USER_LIST } from '../store/mutation-types'
import axios from '@/axios/index'

export default {
  name: 'main-content',
  components: {
    baseHeader
    ,mainContentSchedule
    ,mainContentMember
  },
  methods: {
  },
  mounted () {
  },
  data: function () {
    return{
      dialog: false,
      menberList: this.$store.state.menberList,
      scheduleList: this.$store.state.scheduleList,
      test: this.axios
    }
  }
}
</script>
<style scoped>
  .main-color {
    background-color: #403C3B;
  }
  .flex-styel {
    border: solid 2px red;
  }
</style>
