import { createSlice } from "@reduxjs/toolkit";
import { AccessControl } from "accesscontrol";
export const loginSlice=createSlice({
    name:'login',
    initialState:{value:false,user:'',userID:'',grantList:""},
    reducers:{
        loginStatus:(state)=>{
            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                  let c = ca[i];
                  while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return "";
              }
            if(getCookie("jwt_token")){
              state.user=getCookie("user")
              state.value=true
            }
            else
            state.value=false;
        },
        loginDetails:(state,action)=>{
          state.userID=action.payload.userID
          const role=action.payload.role
          console.log("role:",role.name)
          let grantList=[];
          for(var key in role.premissions)
                {
                    for(var action in role.premissions[key])
                    {
                      if(role.premissions[key][action])
                      grantList.push({role:role.name,resource:key,action,attributes: '*'})
                    }
                }
                console.log(grantList)
          state.grantList=grantList;
        },
        logoutUser:(state)=>{
        // document.cookie = "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        state.value=false;
      }
    }
})
export const{loginStatus,loginDetails,userStatus,logoutUser}=loginSlice.actions;
export default loginSlice.reducer