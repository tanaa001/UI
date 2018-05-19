<style scoped>
</style>

<template>
  <div class="main-color">
    <v-container>
      <h1>test</h1>
        <v-form v-model="valid">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-form>
      <p> {{name}}</p>
      <v-flex xs6>
        <v-subheader>Standard</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          :items="items"
          v-model="e1"
          label="Select"
          single-line
        ></v-select>
      </v-flex>
         <v-badge left>
      <span slot="badge">{{name}}</span>
      <v-icon large color="grey lighten-1">shopping_cart</v-icon>
    </v-badge>

    <v-badge color="red">
      <span slot="badge">!</span>
      <v-icon large color="grey">mail</v-icon>
    </v-badge>
    </v-container>
    <p> {{items}}</p>
  </div>
</template>

<script>
// import store from '../vuex/'
window.onload = function() {
  // console.log(this.items)
}


export default {
  name: 'test',
  components: {
  },
  methods: {
  },
  // beforeCreate: {
  //       viewList: function(){
  //         console.log("items")
  //         this.$store.dispatch('TEST_LIST')
  //     }
  // },
  data: function () {
    return{
       items: this.$store.state.testList,
       e1: null,
       valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  }
}
</script>
