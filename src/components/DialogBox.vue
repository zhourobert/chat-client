<script setup>
import {defineProps, ref, toRef} from 'vue';
let props=defineProps({

    header:String,
    name:String,
    msg:{
      type:String,
      default:"说句话吧"
    }

})

let message=toRef(props.msg);

if (message.value.length>6){
  message.value=message.value.substring(0,6)+"……"
}
console.log("message为："+message.value)

let noMouseOver=ref(true)
let isMouseOver=ref(false)

const mouseEnter=()=>{
  // console.log("鼠标进入了")
  noMouseOver.value=false
  isMouseOver.value=true
}
const mouseLeave=()=>{
  // console.log("鼠标出去了")
  noMouseOver.value=true
  isMouseOver.value=false
}

</script>

<template>
  <div :class="{'chatter':noMouseOver,'chatter2':isMouseOver}"
       @mouseenter="mouseEnter"
       @mouseleave="mouseLeave"
  >
    <div class="my-avatar">
      <img :src="header">
    </div>

    <div class="my-message">
      <span style="font-weight: bolder; color: #ffffff;">{{ name }}</span>
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<style scoped>
.chatter{
  width: 100%;
  height: 80px;
  background-color: rgb(222, 101, 139);
  display: flex;
  justify-content: center;
  border-bottom: dashed 1px white;
  box-sizing: border-box;
}
.chatter2{
  width: 100%;
  height: 80px;
  background-color: #b45171;
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
</style>