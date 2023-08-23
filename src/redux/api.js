import axios from "axios";

const API_URL = 'https://reqres.in/api/users?page=2';

export const fetchTodos = async () => {
    try {
        const res = await axios.get(API_URL);
        return res.data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};