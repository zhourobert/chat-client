<script setup>
import {getCurrentInstance, reactive} from "vue";
import jump from "@/utils/utils";
const { proxy } = getCurrentInstance()


// const imageUrl = null


const handleAvatarSuccess=()=>{

}
const beforeAvatarUpload=()=>{

}

const icon=reactive({
  size:50,
  color: '#8c939d'
})

const form = reactive({
  user: "",
  password: "",
  nickname:"",
  email:""

})


const register=()=>{
  proxy.$http({
    method:"POST",
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
        <el-upload
            action="http://localhost:8999/uploadImg"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <el-image v-if="imageUrl" />
          <div id="my-icon" v-else>
            <el-icon  :size="icon.size" :color="icon.color">
              <Plus />
            </el-icon>
            <span>点击加入头像</span>
          </div>
        </el-upload>



      </div>
      <!-- 输入注册表单-->
      <div id="input">
        <el-form ref="form" :model="form" label-width="80px" label-position="left">
          <el-form-item label="用户名" :style="style">
            <el-input v-model="form.user" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码" :style="style">
            <el-input v-model="form.password" type="password"
                      placeholder="请输入密码"
                      />
          </el-form-item>
          <el-form-item label="昵称" :style="style">
            <el-input v-model="form.nickname" placeholder="请输入昵称"/>
          </el-form-item>
          <el-form-item label="邮箱" :style="style">
            <el-input v-model="form.email" placeholder="请输入邮箱"/>
          </el-form-item>
        </el-form>

      </div>

      <el-button
          color="#FF3366"
          type="primary"
          @click="register"

      >注册账号</el-button>

      <div id="bottom">

        <span @click="jump('/')">已经有账号？登录</span>
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
  width: 600px;
  height: 500px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #2EC4B6;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  //align-content: center;

  box-shadow: var(--el-box-shadow-dark);

}

#img {
  width: 100px;
  height: 100px;
  background-color: white;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-right: auto;
  box-shadow: var(--el-box-shadow-dark);


}
#my-icon{
  display: flex;
  flex-direction: column;
}
#input {
  height: 200px;
  //width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


}

#bottom {
  display: flex;
  justify-content: end;


}
el-button{
  width: 300px;
}

#img span{
  font-size: 8px;

}


</style>