<template>
    <v-container fluid grid-list-md>
            <v-card-text>
              <v-icon color="teal">calendar_today</v-icon>
              schedule
              <v-btn icon class="mx-0" @click="">
              <v-icon color="teal">add_circle</v-icon>
              </v-btn>
            </v-card-text>

            <v-data-table
              :headers="headers"
              :items="scheduleList"
              hide-actions
              color="indigo"
              class="elevation-1"
            >
              <template slot="items" slot-scope="props" color="indigo">
                <td class="text-xs-right">{{ props.item.date }}</td>
                <td class="text-xs-right">{{ props.item.category }}</td>
                <!-- <td class="text-xs-right">{{ props.item.place }}</td> -->
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
  </v-container>
</template>

<script>
import baseHeader from '@/components/modules/base-header'
import { SCHEDULE_LIST } from '@/store/mutation-types'
  
export default {
  name: 'main-content-schedule',
  components: {
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('SCHEDULE_LIST')
    this.scheduleList = this.$store.state.scheduleList
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
