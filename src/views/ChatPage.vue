<script setup>
import {jwtDecode} from "jwt-decode";
import {getImg, jump} from "@/utils/utils";
import {ref} from "vue";

const token=window.localStorage.getItem("userJwt")
const userInfo=jwtDecode(token);
const imageUrl=getImg(userInfo.header);

const chatListIcon=ref('image/chat1.png')
const friendRequestIcon=ref('image/friendRequest1.png')
const friendAddIcon=ref('image/friendAdd1.png')




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
  padding: 6px;
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
  height: 40%;
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