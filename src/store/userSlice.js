import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    initialState:null,
    name:'user',
    reducers:{
        setUser:(state,action)=>{
            state = action.payload
        }
    }
})

export const {setUser} = userSlice.actions;

export default userSlice.reducer;