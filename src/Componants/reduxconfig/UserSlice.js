import { createSlice } from "@reduxjs/toolkit";

const getData =()=>
{
 const data = localStorage.getItem('user');
 if(data==undefined)
    return {
        islogin :false,
        name : undefined,
        role : undefined,
        token : undefined
         
}
else
   return JSON.parse(data)
}

const slice = createSlice({
    name : 'usr',
    initialState : {
        value: getData()
    },
    reducers : {
        setData : (state,action)=>{
            state.value = {...action.payload,islogin:true}
        },
        delData : (state,action)=>{
            state.value = {
                islogin : false ,
                name : undefined,
                role : undefined,
                token : undefined
            }
        }
    }
})

export default slice.reducer;
export const {setData,delData} = slice.actions;