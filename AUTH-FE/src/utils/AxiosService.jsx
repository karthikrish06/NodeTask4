import axios from "axios";

const AxiosService = axios.create({
    // baseURL: "http://localhost:7000",
    baseURL : "https://zen-node-task-4.onrender.com",
    headers : {
        "Content-Type" : "application/json"
    }
})

AxiosService.interceptors.request.use((config)=> {
    const token = sessionStorage.getItem('token')
    if(token){
    config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error) => {
    return Promise.reject(error)
})

export default AxiosService 