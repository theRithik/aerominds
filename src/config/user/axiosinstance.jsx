import axios from "axios";
import { message } from "antd";
import endpoints from "../endpoints";



const axiosInstance = axios.create({
    baseURL:endpoints.url,
    headers:{
        "Content-Type":"application/json",
    }
})

axiosInstance.interceptors.request.use(
    config=>{
        config.headers.aerotoken=localStorage.getItem('aerotoken')
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response=>response,
    err=>{
        console.log(err)
        if(err.response){
          if (err.response.status === 404) {
              // The request was made, but the server responded with a status code
              message.error(err.message,[4])
            }else{
          message.error(err.response.data,[4])
            }
        }
          else if (err.request) {
            // The request was made but no response was received
            message.error(err.message,[4])
          } else {
            // Something else happened while setting up the request
            message.error(err.message,[4])
          }
    }
)

export default axiosInstance