<script setup>
import {getImg} from "@/utils/utils";
import api from "@/pludge/axios";
import {onMounted, ref} from "vue";

let resultSet=ref(null)

onMounted(()=>{
  api.get("/friendRequest/getFriendRequest")
      .then((result)=>{
        console.log(result.data.data)
        if (result.data.code===200){
          resultSet.value=result.data.data
        }
      })
})

const handleFriendRequest=(id,code)=>{
  api.patch("/friendRequest/patchRequest",{

    friendRequestId: id,
    statusCode: code

  })
}


</script>

<template>
  <div id="page">
    <h1 id="title">好友申请</h1>
    <div id="show-friends">
      <template v-for="request in resultSet" :key="request.id">
        <div class="card">
          <img :src="getImg(request.friendInfo.header)">
          <div class="describe">
            <span style="font-weight: bolder; color: #ffffff">{{ request.friendInfo.nickname }}</span>
            <el-button v-if="request.friendInfo.status===0" color="#FF3366" type="primary"
                       @click="handleFriendRequest(request.id,1)">
              同意
            </el-button>
            <el-button v-if="request.friendInfo.status===0" color="#FF3366" type="primary"
                       @click="handleFriendRequest(request.id,-1)">
              拒绝
            </el-button>
            <p v-else>已经添加为好友</p>
          </div>
        </div>

      </template>
    </div>
  </div>
</template>

<style scoped>
#page {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

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
</style>