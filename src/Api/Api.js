import axios from 'axios';
import store from '../store/store';

const api = axios.create({
    baseURL:'http://localhost:3000',
})

api.interceptors.request.use((config)=>{
     const user = store.getState().user;
     if(user){
         config.headers.Authorization= 'bearer '+user.token;
     }
},(err)=>{
     console.log(err);
})

export const login= async (loginCredentials)=>{
    try{
    const res = await api.post('/auth/login',{
        data: loginCredentials
    })
     return res.data;
    }
    catch(err){
         console.log(err.response.data);
         console.log(err);
    }
}

export const register= async (registerCredentials)=>{
    try{
        const res= await api.post('/auth/register',registerCredentials);
        return res.data;
    }
    catch(err){
       console.log(err);
    }
}