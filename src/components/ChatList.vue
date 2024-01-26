<script setup>

import {ref} from "vue";


const voice=ref('image/voice.png')
const file=ref('image/file.png')
const onlinePhone=ref('image/onlinePhone.png')

// let textarea=ref(null)

</script>

<template>
  <div id="window">
    <div id="friend-list">
      <div class="chatter">
        <div class="my-avatar">
          <img src="../assets/defaultUser.png">
        </div>

        <div class="my-message">
          <span style="font-weight: bolder; color: #ffffff;">默认用户</span>
          <span>他和你说话了</span>
        </div>
      </div>
      <div class="chatter">
        <div class="my-avatar">
          <img src="../assets/defaultUser.png">
        </div>

        <div class="my-message">
          <span style="font-weight: bolder; color: #ffffff;">默认用户</span>
          <span>他和你说话了</span>
        </div>
      </div>
      <div class="chatter">
        <div class="my-avatar">
          <img src="../assets/defaultUser.png">
        </div>

        <div class="my-message">
          <span style="font-weight: bolder; color: #ffffff;">默认用户</span>
          <span>他和你说话了</span>
        </div>
      </div>
    </div>
    <div id="chat-window">
      <div id="chat-box" class="input">
        <div class="dialogue">
          <div class="chat-avatar">
            <img src="../assets/defaultUser.png"/>
          </div>
          <div class="msg">
            <span style="font-weight: bolder; color: #ffffff;">默认用户 2024年01月26日 20:55</span>
            <div class="bubble">他和你说话了</div>
          </div>
        </div>
        <div class="dialogue">
          <div class="chat-avatar">
            <img src="../assets/defaultUser.png"/>
          </div>
          <div class="msg">
            <span style="font-weight: bolder; color: #ffffff;">默认用户 2024年01月26日 20:55</span>
            <div class="bubble">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。
              白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中</div>
          </div>
        </div>
        <div class="dialogue">
          <div class="chat-avatar">
            <img src="../assets/defaultUser.png"/>
          </div>
          <div class="msg">
            <span style="font-weight: bolder; color: #ffffff;">默认用户 2024年01月26日 20:55</span>
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
.msg{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  flex-wrap: wrap;
  text-align: start;
  margin-left: 10px;
}
.bubble{
  max-width: 80%;
  width: fit-content;

  margin-top: 5px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #B55272;
}
.chat-avatar img{
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
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