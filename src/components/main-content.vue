<template>
  <div>
    <base-header></base-header>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs6 sm6 md3>
          <v-card color="purple" dark>
            <v-card-title primary class="title">画像</v-card-title>
            <v-card-text>{{ lorem1 }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs6 sm6 md3>
          <v-card color="purple" dark>
            <v-card-title primary class="title">グラフ</v-card-title>
            <v-card-text>{{ lorem2 }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <main-content-schedule></main-content-schedule>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6 child-flex>
          <main-content-member></main-content-member>
        </v-flex>
        <v-flex d-flex xs12 sm12 md6>
          <v-card color="blue lighten-2" dark>
            <v-card-text>{{ this.$store.state.menberList }}</v-card-text>
          </v-card>
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

export default {
  name: 'main-content',
  components: {
    baseHeader
    ,mainContentSchedule
    ,mainContentMember
  },
  methods: {
    next_page :function(){
      this.$router.push('scheduleDetails')
    }
  },
  mounted () {
  },
  data: function () {
    return{
      dialog: false
      ,menberList: this.$store.state.menberList
      ,scheduleList: this.$store.state.scheduleList
      ,lorem1: `画像`
      ,lorem2: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
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
