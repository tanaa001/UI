<template>
  <v-card>
    <v-toolbar card dark color="primary">
      <v-btn icon dark @click="close()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="dialog = false">登録</v-btn>
      </v-toolbar-items>
      <v-menu bottom right offset-y>
        <v-btn slot="activator" dark icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in items" :key="i" @click="">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-card-text>
      <v-list three-line subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>開催日：{{date}}</v-list-tile-title>
            <v-btn dark icon @click.native.stop="dialog1 = true">
              <v-icon>date_range</v-icon>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>開催時刻：{{time}}</v-list-tile-title>
            <v-btn dark icon @click.native.stop="dialog2 = true">
              <v-icon>query_builder</v-icon>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>開催場所</v-list-tile-title>
            <v-list-tile-sub-title>
              <v-text-field
                  id="testing"
                  name="input-1"
              ></v-text-field>
           </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                  name="input-1"
                  label="備考"
                  textarea
                  dark
                  ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-list>
    </v-card-text>
    <div style="flex: 1 1 auto;"></div>

    <v-dialog v-model="dateDialogFlg" max-width="290">
      <v-card>
        <v-date-picker v-model="date"></v-date-picker>
      </v-card>
    </v-dialog>

    <v-dialog v-model="timeDialogFlg" max-width="290">
      <v-card>
        <v-time-picker v-model="time" format="24hr"></v-time-picker>
      </v-card>
    </v-dialog>--{{setData}}--
  </v-card>
</template>

<script>
import { SCHEDULE_LIST } from '@/store/mutation-types'
    
export default {
  name: 'main-content-schedul-daialog',
  props: [
   'setData'
  ],
  components: {
  },
  methods: {
    close () {
      this.$emit('closeDaialog', false)
    }
  },
  watch: {
  },
  mounted () {
  },
  data: function () {
    return{
      dateDialogFlg: false,
      timeDialogFlg: false,
      schedule: null,
      date: null,
      time: null,
      items: [
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
    