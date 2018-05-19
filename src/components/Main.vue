<template>
  <div class="main-color">
    <v-container>
      <base-head />
      <v-data-table
        :headers="headers"
        :items="users"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.date }}</td>
          <td class="text-xs-right">{{ props.item.category }}</td>
          <td class="text-xs-right">{{ props.item.place }}</td>
        </template>
      </v-data-table>
      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="500px">
          <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
          <v-card style="background-color:#263238;">
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal first name" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      label="Legal last name"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password" type="password" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      label="Age"
                      required
                      :items="['0-17', '18-29', '30-54', '54+']"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      label="Interests"
                      multiple
                      autocomplete
                      chips
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

      <v-card>
        <h2><v-icon>group</v-icon>member-list</h2>
        <v-list two-line>
            <v-list-tile avatar @click="">
              <v-list-tile-avatar>
                <img src="https://placeimg.com/40/40/people/5">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Abbey</v-list-tile-title>
                <v-list-tile-sub-title>Christansen</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-list two-line>
            <v-list-tile avatar @click="">
              <v-list-tile-avatar>
                <img src="https://placeimg.com/40/40/people/5">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Abbey</v-list-tile-title>
                <v-list-tile-sub-title>Christansen</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-list two-line>
            <v-list-tile avatar @click="">
              <v-list-tile-avatar>
                <img src="https://placeimg.com/40/40/people/5">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Abbey</v-list-tile-title>
                <v-list-tile-sub-title>Christansen</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import baseHead from '@/components/modules/base-head'
import { USER_LIST } from '../store/mutation-types'
  
export default {
  name: 'main',
  components: {
    baseHead
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
