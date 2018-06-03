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
          <v-card color="indigo" dark>
            <v-card-text>スケジュール
              <v-btn icon class="mx-0" @click="">
                <v-icon color="teal">add_circle</v-icon>
              </v-btn>
            </v-card-text>

            <v-data-table
              :headers="headers"
              :items="users"
              hide-actions
              color="indigo"
              class="elevation-1"
            >
              <template slot="items" slot-scope="props" color="indigo">
                <td class="text-xs-right">{{ props.item.date }}</td>
                <td class="text-xs-right">{{ props.item.category }}</td>
                <td class="text-xs-right">{{ props.item.place }}</td>
                <td class="justify-center layout px-0">
                  <v-menu bottom offset-y>
                    <v-btn icon class="mx-0" slot="activator">
                      <v-icon color="teal">toys</v-icon>
                    </v-btn>
                    <v-list>
                      <v-list-tile v-for="(item, i) in item_list" :key="i" @click="">
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6 child-flex>
          <v-card color="green lighten-2" dark>
            <v-card-text>メンバーリスト</v-card-text>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                <v-list-tile v-else :key="item.title" avatar @click="">
                  <v-list-tile-avatar class="number-style">
                    <img src="https://placeimg.com/40/40/people/5">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md6>
          <v-card color="blue lighten-2" dark>
            <v-card-text>{{ lorem2 }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</div>
</template>

<script>
import baseHeader from '@/components/modules/base-header'
import { USER_LIST } from '../store/mutation-types'
  
export default {
  name: 'main-content',
  components: {
    baseHeader
  },
  methods: {
    next_page :function(){
      this.$router.push('scheduleDetails')
    }
  },
  beforeCreate () {
    this.$store.dispatch('USER_LIST')
  },
  data: function () {
    return{
      dialog: false
      ,users: this.$store.state.userList
      ,headers: [
        { text: 'date', value: 'date' }
        ,{ text: 'category', value: 'category' }
        ,{ text: 'place', value: 'place' }
        ,{ text: 'actions', value: 'actions', sortable: false  }
      ]

      ,lorem1: `画像`
      ,lorem2: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
        ,items: [
        { header: 'member-list' },
        { avatar: '/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
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
</style>
