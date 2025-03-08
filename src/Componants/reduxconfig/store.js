import { configureStore } from "@reduxjs/toolkit";
import  UserReducer from "./UserSlice"
//  import UserReducer from " ./UserSlice " ;
const store = configureStore({reducer:
    {
        user : UserReducer
    }})

    store.subscribe(()=>{
      const data = JSON.stringify(store.getState().user.value)
      localStorage.setItem('user',data)
    })

export default store;