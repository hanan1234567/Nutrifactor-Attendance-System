import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const loginApi=createApi({
    reducerPath:'loginApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/'
    }),
    endpoints:(builder)=> ({
        login:builder.query({
            query:()=>({
                url:'logins',
                method:'GET'
            })
        })
    })
})
export const {useLoginQuery}=loginApi