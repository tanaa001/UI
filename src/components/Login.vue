<template>
  <v-container fluid>
    <h1>{{title}}</h1>
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
            counter
            required
          ></v-text-field>
        <v-btn color="success"@click="next_page">login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: 'login'
    ,components: {
    }
    ,methods: {
      next_page :function(){
        this.$router.push('main')
      }

    }
    ,data: function () {
      return{
        title: "LOGIN"
        ,passWordDisplayFlg: false
        ,userName: null
        ,passWord: null
      }
    }
  }
</script>
<style scoped>
</style>
