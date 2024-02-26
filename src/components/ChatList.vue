<script setup>

import {onMounted, ref} from "vue";
import FriendChatDialogue from "@/components/FriendChatDialogue.vue";
import DialogBox from "@/components/DialogBox.vue";
import api from "@/pludge/axios";
import {jwtDecode} from "jwt-decode";
import {getImg} from "@/utils/utils";


const voice=ref('image/voice.png')
const file=ref('image/file.png')
const onlinePhone=ref('image/onlinePhone.png')

let friendList=ref(null)

onMounted(()=>{
  const userInfo=jwtDecode(window.localStorage.getItem("userJwt"));
  //获取好友列表
  api.get("/msgHistory/getFriendList",{
    params:{id:userInfo.id}
  }).then((result)=>{
    console.log("axio获取好友列表为："+result.data.data)
    friendList.value=result.data.data
  })
})
//TODO：还有一个动画效果要实现，实现一个点击对话保持变色，并且其他弹起
//鼠标点击切换对话
const toThisChat=(id)=>{
  console.log("点击获取好友id为:"+id)

  api.get("",{
    params:id
  }).then((result)=>{
    console.log("获取聊天内容为："+result.data.data)
  })
}


let imgUrl=ref(require("@/assets/defaultUser.png"))
let content=ref({
  header:imgUrl,
  name:"匿名用户",
  time:"2024年01月26日 20:55",
  message:"第一种方式（适用于单个资源文件） import homeBg from 'src/assets/images/home/home_bg.png' <img :src= \"homeBg\" /> 第二种方式（适用于多个资源文件，动态传入文件路径） new URL () + import.meta.url 在src目录下创建一个util文件夹，文件夹里创建一个utils.ts文件 // 获取assets静态资源 const getAssetsFile = (url: string) => {"
})
const role=ref("u-chat")
let myRole=ref({
  header:imgUrl,
  name:"匿名用户",
  msg:"他和你哼哼哈哈哈哈说话了"
})
</script>

<template>
  <div id="window">
    <div id="friend-list" class="input">

      <div v-if="friendList!=null">
        <template  v-for="(item,index) in friendList" :key="index">
          <DialogBox :header="getImg(item.header)" :name="item.nickname"
                     @click="toThisChat(item.fId)"></DialogBox>
        </template>
      </div>

      <DialogBox :header="myRole.header" :name="myRole.name" :msg="myRole.msg"></DialogBox>

    </div>
    <div id="chat-window">
      <div id="chat-box" class="input">
        <div class="dialogue friend-chat">
          <div class="chat-avatar">
            <img :src="imgUrl"/>
          </div>
          <div class="msg">
            <span style="font-weight: bolder; color: #ffffff;">默认用户 2024年01月26日 20:55</span>
            <div class="bubble">他和你说话了</div>
          </div>
        </div>
        <FriendChatDialogue :content="content" :role="role"></FriendChatDialogue>
        <div class="dialogue friend-chat">
          <div class="chat-avatar">
            <img src="../assets/defaultUser.png"/>
          </div>
          <div class="msg">
            <span style="font-weight: bolder; color: #ffffff;">默认用户 2024年01月26日 20:55</span>
            <div class="bubble">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。
              白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中</div>
          </div>
        </div>
        <div class="dialogue friend-chat">
          <div class="chat-avatar">
            <img src="../assets/defaultUser.png"/>
          </div>
          <div class="msg">
            <span style="font-weight: bolder; color: #ffffff;">默认用户 2024年01月26日 20:55</span>
            <div class="bubble">他和你说话了</div>
          </div>
        </div>
        <div class="dialogue u-chat">
          <div class="chat-avatar">
            <img src="../assets/defaultUser.png"/>
          </div>
          <div class="msg">
            <div style="font-weight: bolder; color: #ffffff;">默认用户 2024年01月26日 20:55</div>
            <div class="bubble">他和你说话了</div>
          </div>
        </div>

      </div>
      <div id="chat-bar">
        <div class="icon">
          <img :src="voice">
        </div>
        <div class="icon">
          <img :src="file">
        </div>
        <div class="icon">
          <img :src="onlinePhone">
        </div>
      </div>
      <div id="input-box">
        <textarea class="input" rows="7" placeholder="请输入聊天……"></textarea>

        <el-button  color="#FF3366" type="primary"
                    style="
                         width: 120px;
                         position: relative;
                         top:-40px;
                         right: 10px;
                       "
        >
          发送
        </el-button>
      </div>
    </div>
  </div>

</template>


<style scoped>
#window{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
#friend-list{
  height: 100%;
  width: 250px;
  background-color: #B55272;
  border-right: dashed 1px white;
  border-left: dashed 1px white;
  box-sizing: border-box;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

}

#chat-window{
  flex: 1;
}
.chatter{
  width: 100%;
  height: 80px;
  background-color: rgb(222, 101, 139);
  display: flex;
  justify-content: center;
  border-bottom: dashed 1px white;
  box-sizing: border-box;
}
.my-avatar{
  width: 80px;
  height: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
}
.my-avatar img{
  width: 60px;
  height: 60px;
}
.my-message{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.my-message span{
  width: 100%;
  display: flex;
  margin-left: 10px;
}
#chat-window{
  height: 100%;
  flex-grow: 1;
}
#chat-box{

  height: 60%;
  width: 100%;
  background-color: #084c61;
  overflow: scroll;
}
#chat-bar{
  width: 100%;
  height: 40px;
  background-color: #063949;

  display: flex;
  align-content: center;
  flex-wrap: wrap;
}
.icon{
  margin-left: 10px;
  width: 20px;
  height: 20px;
}
.icon img{

  height: inherit;
  width: inherit;
}
#input-box{
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-content: center;
  flex-wrap: wrap;
}
#input-box textarea{
  width: 100%;
  resize: none;
  background-color: #084c61;
  border: none;
  color: white;
  outline: none;
  font-size: 18px;
  font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
  'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.dialogue{
  margin-top: 10px;
  display: flex;
  width: 100%;

}
.friend-chat{
  flex-direction: row;
}
.u-chat{
  flex-direction: row-reverse;
}
.msg{
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.friend-chat .msg{
  margin-left: 10px;
  align-content: start;
  justify-content: start;
  text-align: start;
}
.u-chat .msg{
  margin-right: 10px;
  align-content: flex-end;
  justify-content: flex-end;

}
.bubble{
  max-width: 80%;
  width: fit-content;
  margin-top: 5px;
  padding: 10px;
  box-sizing: border-box;
}
.friend-chat .bubble{
  background-color: #B55272;
}
.u-chat .bubble{
  background-color: #2EC4B6;
  align-self: end;
}
.chat-avatar img{
  width: 30px;
  height: 30px;
  margin-top: 10px;

}
.friend-chat .chat-avatar img{
  margin-left: 10px;
}
.u-chat .chat-avatar img{
  margin-right: 10px;
}


.input::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.input::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #c3c3c3;
}
.input::-webkit-scrollbar-track {
  background-color: transparent;
}

</style>