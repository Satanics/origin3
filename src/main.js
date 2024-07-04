import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        users: [{id: 0, name: 'admin', surname: 'admin', birthdate: '00.00.0000'}],
        count: 0,
        result: []
      }
    },
    getters:{
      USERS: state => {
        return (state.users)
      }
    },
    mutations: {
      CREATE_USER: (state, payload) => {
        state.users.push(payload)
        state.count++
      },
      UPDATE_USER: (state, user) => {
        for(var i = 0; i < state.users.length; i++){
          var index = state.users[i].id
          if (index == user.id){
            index = i
            break
          }
        }
        state.users[index] = user
        },
      DELETE_USER: (state, id) => {
        for (var i = 0; i < state.users.length; i++){
          var index = state.users[i].id
          if (index == id){
            index = i
            break
          }
        }
        state.users.splice(i,1)
      },
      SELECT_USER: (state, name) => {
        state.result = []
        for (var i = 0; i < state.users.length; i++){
          if (state.users[i].name == name){
            state.result.push(state.users[i])  
          }
        }
      }
    }
  })

createApp(App).use(store).mount('#app')
