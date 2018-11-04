<template>
  <v-container fluid grid-list-md>
    <v-list two-line>
      <template v-for="(item, index) in memberList">
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
  </v-container>
</template>

<script>
import { MEMBER_LIST } from '@/store/mutation-types'
  
export default {
  name: 'main-content-member',
  components: {
  },
  methods: {
    getMemberList (params) {
      const axioss = this.$axios.create({
        baseURL: 'http://localhost:8093',
        headers: {
          'content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        proxy: false,
        responseType: 'json'
      })
      axioss.post('/memberList',params)
      .then((response) => {
        this.memberList = response.data
      }).catch(error => {
        this.error = error
      })
    }
  },
  mounted () {
    let userItem = {
      password: "sss",
      name: "cccc"
    }
    this.getMemberList(userItem)
  },
  data: function () {
    return{
      dialog: false,
      memberList: null,
      error: null
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
