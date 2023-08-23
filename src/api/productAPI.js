import axiosClient from "./axiosClient";

const ProductApi ={
    getAll(params){
        const url = '';
        return axiosClient.get(url)
    },
};

export default ProductApi;