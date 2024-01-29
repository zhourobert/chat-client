<script setup>
import {defineProps, toRef} from 'vue';
let props=defineProps({
  role:{
    header:String,
    name:String,
    msg:String
  }
})
let message=toRef(props.role.msg);
if (message.value.length>6){
  message.value=message.value.substring(0,6)+"……"
}
console.log("message为："+message.value)

</script>

<template>
  <div class="chatter">
    <div class="my-avatar">
      <img :src="role.header">
    </div>

    <div class="my-message">
      <span style="font-weight: bolder; color: #ffffff;">{{ role.name }}</span>
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