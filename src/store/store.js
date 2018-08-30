import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	comments:localStorage["comments"]?JSON.parse(localStorage["comments"]):[],
}

const actions = {
	addMessage:({commit},comment)=>commit("getComments",comment),
	handleDeleteComment:({commit},index)=>commit("handleDeleteComment",index)
}	

const mutations ={
	getComments(state,comment){
		console.log(state.comments)
		state.comments.push(comment);
		localStorage.setItem("comments",JSON.stringify(state.comments))	
	},
	handleDeleteComment(state,index){
		console.log(index)
		state.comments.splice(index,1);
		localStorage.setItem("comments",JSON.stringify(state.comments))
	}
}

const getters = {
	
}


export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
