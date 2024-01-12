<script setup>
import {getCurrentInstance, reactive, ref} from "vue";
import jump from "@/utils/utils";
const { proxy } = getCurrentInstance()


const imageUrl = ref(require("../assets/defaultUser.png"))

const form = reactive({
  user: null,
  password: null
})

const login=()=>{
  proxy.$http({
    method:"GET",
    params:form,
    url:"/test/t"
  }).then((result)=>{
    var data=result.data
    console.log(data)
  })
}
</script>

<template>
  <div id="background">
    <div id="login-window">
      <!--      头像-->
      <div id="img">
        <el-image :src="imageUrl"></el-image>
      </div>
      <div id="input">
        <el-input v-model="form.user" placeholder="请输入账号"/>
        <el-input v-model="form.password" type="password"
                  placeholder="请输入密码"
                  show-password/>
      </div>

      <el-button color="#FF3366" type="primary" @click="login">登陆</el-button>
      <div id="bottom">
        <span>忘记密码</span>
        <span @click="jump('register')">注册账号</span>
      </div>

    </div>
  </div>
</template>

<style scoped>

#background {
  width: 100%;
  height: 100%;
  background-color: #011627;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

#login-window {
  width: 300px;
  height: 500px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #2EC4B6;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  box-shadow: var(--el-box-shadow-dark);

}

#img {
  width: 100px;
  height: 100px;
  background-color: white;
  display: flex;
  box-shadow: var(--el-box-shadow-dark);
}

#input {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#bottom {
  display: flex;
  justify-content: space-between;
}

el-button {
//box-shadow: var(--el-box-shadow-dark);
}
</style>