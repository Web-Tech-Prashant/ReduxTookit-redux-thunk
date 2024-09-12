import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserList = createAsyncThunk('userlist/fetchUserList',async()=>{
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    let data = await response.data;
    return data;
})

export const setUserEmailList = createAsyncThunk('userlist/setUserEmailList',(value)=>{
        return value;
})

const userListSlice = createSlice({
    name:"userlist",
    initialState:{isLoading:false,userListData:[],userListError:{},emailList:[]},
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchUserList.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchUserList.fulfilled,(state,action)=>{
            state.userListData = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchUserList.rejected,(state,action)=>{
            state.userListError = action.payload;
            state.isLoading = false;
        })
        builder.addCase(setUserEmailList.fulfilled,(state,action)=>{
            state.emailList.push(action.payload)
        })
    }
})
export default userListSlice.reducer;