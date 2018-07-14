import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'
import {
	LOCAL_API
	,LOGIN_USER
	,ADD_USER
	,MEMBER_LIST
	,SCHEDULE_LIST
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
		,memberList: []
		,scheduleList: []
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
		,[MEMBER_LIST] ({ commit }, params) {
			console.log(params)
			axioss.post('/memberList',params)
			.then((response) => {
				console.log("ddd")
				console.log(response.data)
				console.log("ddd")
				commit(MEMBER_LIST, response.data)
			}).catch(error => {
				state.addUser = error
			})
		}
		,[SCHEDULE_LIST] ({ commit }, params) {
			commit(SCHEDULE_LIST)
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
		,[MEMBER_LIST] (state, params) {
		console.log("xx")
		console.log(JSON.stringify(params))
		console.log("xx")
		state.memberList = params
		}
		,[SCHEDULE_LIST] (state, params) {
		var schedule = [
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
				date: "2018/02/12",
				category: "type-a",
				place: "高円寺"
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
		state.scheduleList = schedule
		}
	}
})