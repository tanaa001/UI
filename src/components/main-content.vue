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
          <v-card color="green lighten-2" dark>
            <v-card-text>member-list</v-card-text>
            <v-list two-line>
              <template v-for="(item, index) in this.$store.state.menberList">
                <v-list-tile avatar @click="">
                  <v-list-tile-avatar class="number-style">
                    <img src="https://placeimg.com/40/40/people/5">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.position"></v-list-tile-sub-title>
                    <v-list-tile-sub-title v-html="item.user_comment"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md6>
          <v-card color="blue lighten-2" dark>
            <v-card-text>{{ this.$store.state.menberList }}</v-card-text>
          </v-card>
        </v-flex>
        <v-btn color="success"@click="test">login</v-btn>
      </v-layout>
  </v-container>
</div>
</template>

<script>
import baseHeader from '@/components/modules/base-header'
import mainContentSchedule from '@/components/modules/main-content-schedule'
import { USER_LIST, MENBER_LIST, SCHEDULE_LIST } from '../store/mutation-types'
  
export default {
  name: 'main-content',
  components: {
    baseHeader
    ,mainContentSchedule
  },
  methods: {

    test: function(){
      this.scheduleList = this.$store.state.scheduleList

    },

    next_page :function(){
      this.$router.push('scheduleDetails')
    }
  },
  mounted () {
    let userItem = {
      password: "sss"
      ,name: "cccc"
    }
    console.log("aaa")
    this.$store.dispatch('MENBER_LIST',userItem)
    this.$store.dispatch('SCHEDULE_LIST')
    this.scheduleList = this.$store.state.scheduleList
    // Vue.nextTick(function() {
    //   this.menberList = this.$store.state.menberList
    //   vue.$forceUpdate();
    // })
            // this.$store.watch(this.$store.menberList, n => {
            //     this.menberList = this.$store.state.menberList

            // })
  },
  data: function () {
    return{
      dialog: false
      ,menberList: this.$store.state.menberList
      ,scheduleList: this.$store.state.scheduleList
      ,headers: [
        { text: 'date', value: 'date' }
        ,{ text: 'category', value: 'category' }
        // ,{ text: 'place', value: 'place' }
        ,{ text: 'actions', value: 'actions', sortable: false  }
      ]

      ,lorem1: `画像`
      ,lorem2: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
      ,items: [
        { avatar: '/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { avatar: '/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { avatar: '/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }
    ]

        ,item_list: [
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me 2'
          }
        ]
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
