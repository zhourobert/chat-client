<script setup>
import {ref} from "vue";
import {jump} from "@/utils/utils";


const form = ref({
  username: null,
  email: null,
  VerificationCode:null
})
</script>

<template>
  <div id="background">
    <div id="login-window">
      <div id="title">
        <h3>密码找回</h3>
      </div>
      <div id="input">
        <el-input v-model="form.username" placeholder="请输入账号" style="margin-top: -100px"/>
        <el-input v-model="form.email" type="password"
                  placeholder="请输入邮箱"
                  show-password/>
        <div style="display: flex; margin-bottom: -50px">
          <el-input v-model="form.VerificationCode" placeholder="请输入验证码"/>
          <el-button color="#FF3366" type="primary" @click="login">发送验证码</el-button>
        </div>
      </div>

      <el-button color="#FF3366" type="primary" @click="login">找回密码</el-button>
      <div id="bottom">
        <span @click="jump('/')">返回登陆</span>
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
#title{
  height: 100px;
  display: flex;
  justify-content: flex-start;
}

#input {

  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#bottom {
  display: flex;
  justify-content: end;
}

el-button {
//box-shadow: var(--el-box-shadow-dark);
}
</style>