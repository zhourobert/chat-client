<script setup>
import {getImg} from "@/utils/utils";
import api from "@/pludge/axios";
import {onMounted, ref} from "vue";

let resultSetFTM=ref(null)
let resultSetMTF=ref(null)

onMounted(()=>{
  api.get("/friendRequest/getFriendToMeRequest")
      .then((result)=>{
        console.log(result.data.data)
        if (result.data.code===200){
          resultSetFTM.value=result.data.data
        }
      })
  api.get("/friendRequest/getMeToFriendRequest")
      .then((result)=>{
        console.log(result.data.data)
        if (result.data.code===200){
          resultSetMTF.value=result.data.data
        }
      })
})

const handleFriendRequest=(id,code)=>{
  api.patch("/friendRequest/patchRequest",{
    friendRequestId: id,
    statusCode: code
  }).then(()=>{
    location.reload();
  })
}


</script>

<template>
  <div id="page" class="input">
    <h1 id="title">好友申请</h1>
    <div id="show-friends">
      <template v-for="request in resultSetFTM" :key="request.id">
        <div class="card">
          <img :src="getImg(request.friendInfo.header)">
          <div class="describe">
            <span style="font-weight: bolder; color: #ffffff">{{ request.friendInfo.nickname }}</span>
            <div class="request-btn">
              <el-button v-if="request.status===0" color="#FF3366" type="primary"
                         @click="handleFriendRequest(request.id,1)">
                同意
              </el-button>
              <el-button v-if="request.status===0" color="#3D3B8E" type="primary"
                         @click="handleFriendRequest(request.id,-1)">
                拒绝
              </el-button>
              <p v-else-if="request.status===1">已经添加为好友</p>
              <p v-else>已经添加为好友</p>
            </div>
          </div>
        </div>
      </template>
    </div>
    <h1 id="title">我的申请</h1>
    <div id="show-friends">
      <template v-for="request in resultSetMTF" :key="request.id">
        <div class="card">
          <img :src="getImg(request.friendInfo.header)">
          <div class="describe">
            <span style="font-weight: bolder; color: #ffffff">{{ request.friendInfo.nickname }}</span>
            <div class="request-btn">

              <p v-if="request.status===0">对方尚未同意</p>
              <p v-else>已经添加为好友</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
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

#page {

  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  overflow: scroll;
}

#title {
  align-self: start;
  padding-left: 30px;
  color: #FF3366;
}

#search-input {
  padding: 0 30px;
}

#show-friends {
  flex-grow: 1;
  margin-top: 10px;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
  grid-template-rows: auto;

}

.card {
  width: 200px;
  height: 120px;
  background-color: #B55272;
  padding: 2px;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow: var(--el-box-shadow-lighter);

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
}

.card img {
  width: 60px;
  height: 60px;
}

.describe {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.describe p{
  color: white;
}
.request-btn{
  display: flex;
  flex-direction: row;
}
</style>