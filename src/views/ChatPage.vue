<script setup>
import {jwtDecode} from "jwt-decode";
import {getImg, jump} from "@/utils/utils";
import {onMounted, ref} from "vue";
import api from "@/pludge/axios";

const imageUrl=ref(null)



onMounted(()=>{
  const token=window.localStorage.getItem("userJwt")
  const userInfo=jwtDecode(token);
  console.log("现在的用户id为"+userInfo);
  if(userInfo===null){

    jump("/")
  }
  imageUrl.value=getImg(userInfo.header);

  console.log("生命周期axios执行传入令牌用户id:id="+userInfo.id)
  api.get("/user/verifyToken",{
    params: {id: userInfo.id}
  }).then((result)=>{
    console.log("权限验证返回代码"+result.data.code)
    if (result.data.code!==200){
      window.localStorage.removeItem("userJwt")
      console.log("权限验证返回不是200")
      jump("/")
    }
  }).catch((err)=>{
    console.log("生命周期axios执行3"+err)
    jump("/")
  })
})




const chatListIcon=ref('image/chat1.png')
const friendRequestIcon=ref('image/friendRequest1.png')
const friendAddIcon=ref('image/friendAdd1.png')
const signOut=ref('image/signOut1.png')
const news=ref('image/news.png')
const config=ref('image/config.png')

const logout=()=>{
  window.localStorage.removeItem("userJwt")
  jump("/")
}


</script>

<template>
  <div id="background">
    <div id="chat-window">
      <div id="menu">
        <!--      头像-->
        <div id="img">
          <img id="avatar" :src="imageUrl"/>
        </div>
        <div id="icon-menu">
          <div class="icon">
            <img :src="chatListIcon"
                 @click="jump('/chatList')"
            >
          </div>
          <div class="icon">
            <img :src="friendRequestIcon"
                 @click="jump('/friendRequest')"
            >
          </div>
          <div class="icon">
            <img :src="friendAddIcon"
                 @click="jump('/friendAdd')"
            >
          </div>
          <div class="icon">
            <img :src="news"
                 @click="jump('/news')"
            >
          </div>
          <div class="icon">
            <img :src="config"
                 @click="jump('/config')"
            >
          </div>
        </div>
        <div id="signOut-btn">
          <el-button color="#FF3366" type="primary" @click="logout"
          style="width: 40px; height: 40px;">
            <img :src="signOut" style="height: 20px; width: 20px"/>
          </el-button>
        </div>
      </div>
      <div id="right-div">
        <router-view/>
      </div>
      <div></div>

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

#chat-window {
  width: 800px;
  height: 500px;

  box-sizing: border-box;
  background-color: #084C61;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
//align-content: center;

  box-shadow: var(--el-box-shadow-dark);

}
#menu{
  height: 100%;
  width: 62px;
  background-color: #2EC4B6;
  padding: 10px 6px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

}
#right-div{
  flex-grow: 1;
}
#img {
  width: 50px;
  height: 50px;
  background-color: white;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-top: 5px;
  box-shadow: var(--el-box-shadow-dark);


}
#avatar{
  width: inherit;
  height: inherit;
  padding: 2px;
  box-sizing: border-box;
}
#icon-menu{
  display: inherit;
  flex-direction: inherit;

  width: 50px;
  height: 60%;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;

}
.icon{
  width: 30px;
  height: 30px;

}

.icon img{
  width: inherit;
  height: inherit;
}
#signOut-btn{
  align-self: center;
  margin-top: auto;
}


#img span{
  font-size: 8px;

}

</style>