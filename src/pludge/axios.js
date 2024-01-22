import axios from "axios";


// axios.defaults.baseURL="http://localhost:8999/"
//创建axios对象供其他组件导入使用
//这里axios封装有一个bug，可能有时候会header里token没有更新
let api=axios.create({
    baseURL:"http://localhost:8999/",
    headers:{Token: window.localStorage.getItem("userJwt")}
})

api.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.Token= window.localStorage.getItem("userJwt")
    return config;
});

export default api;