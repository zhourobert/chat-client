<script setup >
import {defineProps} from 'vue';
defineProps({
  role:String,
  content:{
    header:String,
    name:String,
    time:String,
    message:String
  }

})
</script>

<template>
  <div class="dialogue" :class="role">
    <div class="chat-avatar">
      <img :src="content.header"/>
    </div>
    <div class="msg" >
      <span style="font-weight: bolder; color: #ffffff;">{{ content.name }} {{ content.time }}</span>
      <div class="bubble">{{ content.message }}</div>
    </div>
  </div>
</template>

<style scoped>
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
  text-align: start;
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
</style>