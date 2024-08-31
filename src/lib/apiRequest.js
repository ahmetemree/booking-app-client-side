import axios from "axios"

const apiRequest = axios.create({
    baseURL:"https://booking-app-back-3tqb.onrender.com",
    withCredentials:true,
})

export default apiRequest;