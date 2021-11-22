import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query'
import {loginApi} from '../services/login.js'
import loginSlice from '../features/login/loginSlice'
export const store=configureStore({
    reducer:{
        login:loginSlice,
        [loginApi.reducerPath]:loginApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(loginApi.middleware)
})
setupListeners(store.dispatch)