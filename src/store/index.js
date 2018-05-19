import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { USER_LIST, TEST_LIST } from '../store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testList: "ssss"
    ,stepCount: 0
    ,impression: ""
    ,errorFlag: false//trueなら通過
    ,check: ""
    ,userList: []
  },
	actions: {
		[USER_LIST] ({ commit }, userList) {
			commit(USER_LIST, userList)
		},
		[TEST_LIST] ({ commit }, testList) {
			commit(TEST_LIST, testList)
		}
	}
  ,mutations: {
		[USER_LIST] (state, userList) {
			var users = [
				{
					date: "2018/03/22",
					category: "type-a",
					place: "山田電機屋上"
				},
				{
					date: "2018/04/13",
					category: "type-b",
					place: "豊洲",
				},
				{
					date: "2018/02/12",
					category: "type-a",
					place: "高円寺"
				},
				{
					date: "2018/05/04",
					category: "type-c",
					place: "豊洲"
				}
			]
			state.userList = users
		},
		[TEST_LIST] (state, testList) {
      state.testList = [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ]
    }
  }
})