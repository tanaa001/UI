<template>
  <v-container fluid grid-list-md>
    <v-card color="green lighten-2" dark>
      <v-card-text>member-list</v-card-text>
      <v-list two-line>
        <template v-for="(item, index) in this.$store.state.memberList">
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
  </v-container>
</template>

<script>
import { MEMBER_LIST } from '@/store/mutation-types'
  
export default {
  name: 'main-content-member',
  components: {
  },
  methods: {
  },
  mounted () {
    let userItem = {
      password: "sss"
      ,name: "cccc"
    }
    this.$store.dispatch('MEMBER_LIST',userItem)
  },
  data: function () {
    return{
      dialog: false
      ,memberList: this.$store.state.memberList
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
