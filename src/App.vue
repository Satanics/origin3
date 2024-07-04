<template>
<form action="#">
	<label class="wrap-radio-btn" style="display: block; text-align: left">
		<input type="radio" name="choice" value="0" class="radio-btncreate" @click="Erase();Newclick('1')">
		<span>Создать пользователя</span>
    <div v-if="option=='1'" class="margin-left">
      <br>
      <input type="Name" placeholder="Имя" v-model="username"><br><br>
      <input type="SurName" placeholder="Фамилия" v-model="usersurname"><br><br>
      <input type="Birthdate" placeholder="Дата рождения" v-model="birthdate"><br><br>
      <button type="button" @click="Create_User()" class="accept-btn">Create</button><br><br>
    </div>
	</label>
  <br>
	<label class="wrap-radio-btn" style="display: block; text-align: left">
		<input type="radio" name="choice" value="1" class="radio-btnread" @click="Erase();Newclick('2')">
		<span>Получить пользователя</span>
    <div v-if="option=='2'" class="margin-left">
      <br>
      <input type="name" placeholder="Имя" v-model="username"><br><br>
      <button type="button" @click="Find_user()" class="accept-btn">Find</button><br><br>
    </div>
	</label>
  <br>
	<label class="wrap-radio-btn" style="display: block; text-align: left">
		<input type="radio" name="choice" value="2" class="radio-btnupdate" @click="Erase();Newclick('3')">
		<span>Обновить пользователя</span>
    <div v-if="option=='3'" class="margin-left">
      <br>
      <input type="id" placeholder="Номер" v-model="userid"><br><br>
      <input type="name" placeholder="Имя" v-model="username"><br><br>
      <input type="surname" placeholder="Фамилия" v-model="usersurname"><br><br>
      <input type="birthdate" placeholder="Дата рождения" v-model="birthdate"><br><br>
      <button type="button" @click="Update_user()" class="accept-btn">Update</button><br><br>
    </div>
	</label>
  <br>
	<label class="wrap-radio-btn" style="display: block; text-align: left">
		<input type="radio" name="choice" value="3" class="radio-btndelete" @click="Erase();Newclick('4')">
		<span>Удалить пользователя</span>
    <div v-if="option=='4'" class="margin-left">
      <br>
      <input type="id" placeholder="Номер" v-model="userid"><br><br>
      <button type="button" @click="Delete_user()" class="delete-btn">Delete</button><br><br>
    </div>
	</label>
  <div style="text-align: left" v-for="(user, index) in this.$store.state.result" :key="index" class="users">
    <h3 v-if="this.$store.state.result != null"> {{ user.surname }} {{ user.name }}</h3>
    <p>{{ user.birthdate }}</p>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return{
      username: '',
      usersurname: '',
      birthdate: '',
      userid: null,
      option: '0',
    }
  },
  methods: {
    Newclick(value){
      this.option = value
    },
    Create_User(){
      var user = {
        id: this.$store.state.count,
        name: this.username,
        surname: this.usersurname,
        birthdate: this.birthdate
      }
      this.$store.commit('CREATE_USER',user)
    },
    Update_user(){
      var user = {
        id: this.userid,
        name: this.username,
        surname: this.usersurname,
        birthdate: this.birthdate
      }
      this.$store.commit('UPDATE_USER', user)
    },
    Delete_user(){
      this.$store.commit('DELETE_USER', this.userid)
      this.userid = null
    },
    Find_user(){
      this.$store.commit('SELECT_USER', this.username)
    },
    Erase(){
      this.result=[]
      this.username=''
      this.usersurname=''
      this.birthdate=''
      this.userid=null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrap-radio-btn{
  background-color: grey;
  border-radius: 10px;
  border-style: solid;
  width: 200px;
}
.accept-btn{
  background-color: lightgreen;
  border-style: solid;
  border-radius: 10px;
  margin-left: 5px;
}
.delete-btn{
  background-color: lightcoral;
  border-style: solid;
  border-radius: 10px;
  margin-left: 5px;
}
.margin-left{
  margin-left: 10px;
}
.users{
  width: 500px;
  margin-top: 20px;
  border: 1px solid silver;
  background: #e3e3e3;
  color: #222;
  padding: 20px;
  border-radius: 5px;
}
</style>
