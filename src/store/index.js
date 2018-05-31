import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'
import {
	USER_LIST
	,TEST_LIST
	,TEST_API
	,LOCAL_API
	,LOGIN_USER
	,ADD_USER
} from '../store/mutation-types'

Vue.use(Vuex)

let params = new URLSearchParams();

const axioss = Axios.create({
	baseURL: LOCAL_API
	,headers: {
		'content-Type': 'application/json'
		,'X-Requested-With': 'XMLHttpRequest'
	}
	,proxy: false
	,responseType: 'json'
})

export default new Vuex.Store({
	state: {
		testList: ""
		,stepCount: 0
		,impression: ""
		,errorFlag: false//trueなら通過
		,check: ""
		,userList: []
		,loginUser: []
		,addUser: []
	}
	,actions: {
		[LOGIN_USER] ({ commit }, params) {
			axioss.post('/login',params)
			.then((response) => {
				if(response.data.result == "true"){
					router.push('main')
				}
				commit(LOGIN_USER, response.data)
			}).catch(error => {
				state.loginUser = error
			})
		}
		,[ADD_USER] ({ commit }, params) {
			console.log(params)
			axioss.post('/adduser',params)
			.then((response) => {
				commit(ADD_USER, response.data)
			}).catch(error => {
				state.addUser = error
			})
		}
		,[USER_LIST] ({ commit }, userList) {
			commit(USER_LIST, userList)
		}
		,[TEST_LIST] ({ commit }, params) {
			axioss.post('/body',params)
			.then((response) => {
				console.log("ssss")
				// state.testList = response.data
				console.log(response.data)
				console.log(JSON.stringify(response))
			}).catch(error => {
				console.log(state.testList)
				// state.testList = error
			})
		}
	}
	,mutations: {
		[LOGIN_USER] (state, params) {
			state.loginUser = params.result
			console.log("params.result")
			console.log(params.result)
			console.log("params.result")
			// if(params.result == "true"){
				
			// }
			console.log(JSON.stringify(params))
			console.log(state.loginUser)
		}
		,[ADD_USER] (state, params) {
			state.addUser = params.response
			console.log(JSON.stringify(params))
		}
		,[USER_LIST] (state, userList) {
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
		}
		,[TEST_LIST] (state, params) {
			state.testList = params
			console.log(JSON.stringify(params))
		}
	}
})