import axiosClient from "./axiosClient";

const ProductApi ={
    getAll(){
        const url = '';
        return axiosClient.get(url)
    },
    get(id){

    },
    add(data){
        const url = '';
        return axiosClient.post(url,data)
    },
    update(data){
        const url = `/${data.id}`;
        return axiosClient.put(url, { isComplete: !data.isComplete })
    },
    delete(id){
        debugger;
        const url = `/${id}`;
        return axiosClient.delete(url)
    }
};

export default ProductApi;