<script setup>
import {ref, watch} from "vue";
import api from "@/pludge/axios";
import {getImg} from "@/utils/utils";
import {jwtDecode} from "jwt-decode";
import {ElMessage} from "element-plus";





// --------------------------------------------------


// 延迟查询
//延迟时间
const delay = 200;
//全局延迟计时器
let timer;

const searchText = ref('')
let resultSet = ref(null)

watch(() => searchText, (newValue) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    api.get("/user/searchFriends", {
      params: {searchText: newValue.value}
    }).then((result) => {
      console.log(result.data.data)
      if (result.data.code === 200) {
        resultSet.value = result.data.data;
      }
    })
  }, delay)
}, {deep: true})
// ------------------------------------------------------------------

let dialogFormVisible = ref(false)
const formLabelWidth = '80px'

let notes=ref('')
let requestMsg=ref('你好，我是')
let requestToId=ref(null);

const changeFormVisible=()=>{
  dialogFormVisible.value = !dialogFormVisible.value
}
const toRequest=(id)=>{
  requestToId.value=id;
  changeFormVisible()
}

const friendRequest = () => {
  var jwtUser = jwtDecode(window.localStorage.getItem("userJwt"))
  api.post("", {
    uId: jwtUser.id,
    fId: requestToId.value,
    notes: notes.value,
    requestMsg: requestMsg.value
  }).then((result)=>{
    if (result.data.code===200){
      ElMessage({
        showClose: true,
        message: result.data.msg,
        type: "success"
      })
    }else {
      ElMessage({
        showClose: true,
        message: result.data.msg,
        type: "error"
      })
    }
  })
}
</script>

<template>
  <div id="page">
    <h1 id="title">好友添加</h1>
    <div id="search-input">
      <el-input v-model="searchText" placeholder="输入好友昵称"/>
    </div>
    <div id="show-friends">
      <template v-for="user in resultSet" :key="user.id">
        <div class="card">
          <img :src="getImg(user.header)">
          <div class="describe">
            <span style="font-weight: bolder; color: #ffffff">{{ user.nickname }}</span>
            <el-button v-if="user.status===0" color="#FF3366" type="primary" @click="toRequest(user.id)">
              添加为好友
            </el-button>
            <p v-else>已经添加为好友</p>
          </div>
        </div>
      </template>
    </div>
  </div>
  <el-dialog v-model="dialogFormVisible" width="500px" title="添加好友">

    <el-form-item label="好友备注" :label-width="formLabelWidth">
      <el-input v-model="notes" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="打招呼" :label-width="formLabelWidth">
      <el-input
          v-model="requestMsg"
          :rows="3"
          type="textarea"
      />
    </el-form-item>


    <template #footer>
      <span class="dialog-footer">
        <el-button @click="changeFormVisible">取消</el-button>
        <el-button type="primary"
                   @click="friendRequest"
        >
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>

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