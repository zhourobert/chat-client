import axios from "axios";


// axios.defaults.baseURL="http://localhost:8999/"
//创建axios对象供其他组件导入使用
const api=axios.create({
    baseURL:"http://localhost:8999/"
})

export default api