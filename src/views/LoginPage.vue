<script setup>
import {ref, watch} from "vue";
import {jump} from "@/utils/utils";
import api from "@/pludge/axios";
import {getImg} from "@/utils/utils";


const imageUrl = ref(require("../assets/defaultUser.png"))

// 延迟查询
//延迟时间
const delay=200;
//全局延迟计时器
let timer;

const form = ref({
  username: null,
  password: null
})

watch(form,(newValue)=>{
  if (timer){
    clearTimeout(timer);
  }
  timer= setTimeout(()=>{
    api.get("/user/getHeader",{
      params:newValue
    }).then((result)=>{
      if (result.data.code===200){
        imageUrl.value=getImg(result.data.data);
      }
    })
  },delay)

}, {deep: true})

const login=()=>{
  api.get("/user/login", {
    params:form.value
  })
      .then((result)=>{
        console.log("axios成功结果"+ result)
        console.log("axios成功结果"+ result.data.code)
        if (result.data.code===200){
          window.localStorage.setItem("userJwt",result.data.data);
          jump("/chat")
        }
        // jump("/chat")
      }).catch((error)=>{
    console.log("axios失败结果"+error.code+error.msg);
  })
}
</script>

<template>
  <div id="background">
    <div id="login-window">
      <!--      头像-->
      <div id="img">
        <img id="avatar" :src="imageUrl"/>
      </div>
      <div id="input">
        <el-input v-model="form.username" placeholder="请输入账号"/>
        <el-input v-model="form.password" type="password"
                  placeholder="请输入密码"
                  show-password/>
      </div>

      <el-button color="#FF3366" type="primary" @click="login">登陆</el-button>
      <div id="bottom">
        <span @click="jump('findPassword')">忘记密码</span>
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
#avatar{
  width: 100px;
  height: 100px;
  padding: 2px;
  box-sizing: border-box;
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