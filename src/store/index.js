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

let params = new URLSearchParams()

const axioss = Axios.create({
	baseURL: LOCAL_API
	,headers: {
		'content-Type': 'application/json '
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
	},
	getters: {
		scheduleItems: state => {
			return state.scheduleList
		}
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
			axioss.post('/adduser',params)
			.then((response) => {
				commit(ADD_USER, response.data)
			}).catch(error => {
				state.addUser = error
			})
		}
		,[MEMBER_LIST] ({ commit }, params) {
			axioss.post('/memberList',params)
			.then((response) => {
				commit(MEMBER_LIST, response.data)
			}).catch(error => {
				state.addUser = error
			})
		}
		,[SCHEDULE_LIST] ({ commit }, params) {
			axioss.post('/scheduleList',params)
			.then((response) => {
				commit(SCHEDULE_LIST, response.data)
			}).catch(error => {
				state.addUser = error
			})
		}
	}
	,mutations: {
		[LOGIN_USER] (state, params) {
			state.loginUser = params.result
		}
		,[ADD_USER] (state, params) {
			state.addUser = params.response
		}
		,[MEMBER_LIST] (state, params) {
			state.memberList = params
		}
		,[SCHEDULE_LIST] (state, params) {
			state.scheduleList = params
		}
	}
})
