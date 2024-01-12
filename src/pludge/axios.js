import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:8999/"
})

export default API