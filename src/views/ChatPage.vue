<script setup>
import {jwtDecode} from "jwt-decode";
import {getImg} from "@/utils/utils";

const token=window.localStorage.getItem("userJwt")
console.log("取出的token里的为："+ token)
const userInfo=jwtDecode(token);
console.log(userInfo);
const imageUrl=getImg(userInfo.header);

</script>

<template>
  <div id="background">
    <div id="login-window">
      <!--      头像-->
      <div id="img">

        <el-image :src="imageUrl"></el-image>

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
#avatar{
  width: 100px;
  height: 100px;
  padding: 2px;
  box-sizing: border-box;
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