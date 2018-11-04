<template>
  <v-container fluid grid-list-md>
    <v-icon color="teal">calendar_today</v-icon>
    schedule
    <v-btn icon class="mx-0" @click.stop="schedulDaialog = true">
      <v-icon color="teal">add_circle</v-icon>
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="scheduleList"
      hide-actions
      color="indigo"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props" color="indigo">
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.time }}</td>
        <td class="text-xs-right">{{ props.item.category }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="setSchedule(props.index)">
            <v-icon color="teal">toys</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
    <v-dialog
      v-model="schedulDaialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <mainContentSchedulDaialog @closeDaialog="closeDaialog" :setData="setData"></mainContentSchedulDaialog>
    </v-dialog>
  </v-container>
</template>

<script>
import { SCHEDULE_LIST } from '@/store/mutation-types'
import mainContentSchedulDaialog from '@/components/modules/main-content-schedul-daialog'

export default {
  name: 'main-content-schedule',
  components: {
    mainContentSchedulDaialog
  },
  methods: {
    closeDaialog (val) {
      this.schedulDaialog = val
    },
    setSchedule (val) {
      this.setData = this.scheduleList[val]
      this.schedulDaialog = true
    }
  },
  watch: {
  },
  mounted () {
  },
  data: function () {
    return{
      headers: [
        { text: 'date', value: 'date' },
        { text: 'time', value: 'time' },
        { text: 'category', value: 'category' },
        { text: 'actions', value: 'actions', sortable: false    }
      ],
      schedulDaialog: false,
      setData: null,

      // テストデータ
      scheduleList: [
        {
          date: '2018/12/12',
          time: '11:54',
          category: '大会'
        },
        {
          date: '2019/1/12',
          time: '13:12',
          category: '練習'
        },
        {
          date: '2020/8/29',
          time: '20:12',
          category: '練習試合'
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
    