import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://64df70c271c3335b25829fd0.mockapi.io/api/v1/tasks',
})

axiosClient.interceptors.response.use(
    function(res) {
        return res.data;
    },
    function(error){
        return Promise.reject(error);
    }
);
export default axiosClient;