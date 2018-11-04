<template>
  <v-container fluid>
    <h1>{{title}}</h1>

    {{test("aaa")}}
    <v-layout row>
      <v-flex xs12 sm12 md12>
          <v-text-field
            v-model="userName"
            :counter="10"
            label="name"
            required
          ></v-text-field>
          <v-text-field
            v-model="passWord"
            :append-icon="passWordDisplayFlg ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (passWordDisplayFlg = !passWordDisplayFlg)"
            :type="passWordDisplayFlg ? 'password' : 'text'"
            label="Enter your password"
            hint="At least 8 characters"
            min="8"
            :counter="8"
            required
          ></v-text-field>
        <v-btn color="success"@click="userLogin">login</v-btn>
      </v-flex>
    </v-layout>
      {{this.$store.state.loginUser}}

  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" color="primary" dark>sign up</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list three-line subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                v-model="addName"
                :counter="10"
                label="name"
                required
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                v-model="addPassword"
                :append-icon="passWordDisplayFlg ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (passWordDisplayFlg = !passWordDisplayFlg)"
                :type="passWordDisplayFlg ? 'password' : 'text'"
                label="Enter your password"
                hint="At least 8 characters"
                min="8"
                counter
                required
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                v-model="confirmPassword"
                :append-icon="passWordDisplayFlg ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (passWordDisplayFlg = !passWordDisplayFlg)"
                :type="passWordDisplayFlg ? 'password' : 'text'"
                label="Confirm password"
                hint="At least 8 characters"
                min="8"
                counter
                required
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-btn color="success"@click="addUser">add</v-btn>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-btn color="success"@click="userLogin">login</v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>
  </v-layout>




  </v-container>
</template>

<script>
  import { TEST_LIST, LOGIN_USER, ADD_USER, SCHEDULE_LIST } from '../store/mutation-types'

  export default {
    name: 'login'
    ,components: {
    }
    ,methods: {
      userLogin: function(){
        let userItem = {
          password: this.passWord
          ,name: this.userName
        }
        this.$store.dispatch('LOGIN_USER',userItem)
        this.$store.dispatch('SCHEDULE_LIST',userItem)
      }
      ,addUser: function(){
        let addUserItem = {
          name: this.addName
          ,password: this.addPassword
        }
        this.$store.dispatch('ADD_USER',addUserItem)
      },
      test (data) {
        let testItem = []
        this.$_.each(this.testData, (item) => {
            console.log(item)
            testItem.push(item)
            testItem.push(data)
        })
        return testItem
      }
    }
    ,data: function () {
      return{
        title: "LOGIN"
        ,passWordDisplayFlg: false
        ,userName: null
        ,passWord: null
        ,addName: null
        ,addPassword: null
        ,confirmPassword: null
        ,dialog: false
        ,testData: [1,2,3,4,5]
      }
    }
  }
</script>
<style scoped>
</style>
