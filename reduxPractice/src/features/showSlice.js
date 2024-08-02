import { createSlice } from "@reduxjs/toolkit";


const shuruwatiData ={value:9};

export const sliceDikha = createSlice({
    name:"show Data",
    initialState: shuruwatiData ,
    reducers:{
        dataDikha:(state)=>{
            state.value

        },
        increment:(state,action)=>
        {
            state.value=state.value+1;
        },
        incrementByValue:(state,action)=>
        {
            state.value=state.value+action.payload;

        }

    }
});

export const {showData,increment,incrementByValue}  = sliceDikha.actions; 

export default sliceDikha.reducer;
  