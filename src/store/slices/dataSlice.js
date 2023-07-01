import {createSlice} from '@reduxjs/toolkit'
const initialState={
    url:null
};

const dataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        setData(state,action){
            state.url=action.payload.url;
        }
    }
})
export const {setData}=dataSlice.actions;
export default dataSlice.reducer;