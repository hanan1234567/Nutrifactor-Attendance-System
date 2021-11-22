import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {useLoginQuery} from './services/login'
import {loginStatus,loginDetails} from './features/login/loginSlice'
import './login form.css'
import '../node_modules/antd/dist/antd.css';
import {Typography,Input,Button,Checkbox } from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone,LoadingOutlined} from '@ant-design/icons';
import {BsPersonCheck,BsLock,BsFillUnlockFill} from 'react-icons/bs'
const { Title } = Typography;
export default function LoginForm(props){
  const {data,error,isLoading}=useLoginQuery()
  console.log("loading:",isLoading)
  console.log("data:",data)
  console.log("error:",error)
  const history=useHistory();
  const [login,setLogin]=useState(false)
   const dispatch=useDispatch();
   const  Login=async ()=>{
      setLogin(true);
      let username=document.getElementById("username").value;
      let pswd=document.getElementById("pswd").value;
      let login=await fetch(`/user`,{ method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify({username,pswd})})
      login=await login.json();
       if(login.success)
       {
        dispatch(loginDetails(login.data))
         dispatch(loginStatus())
       }
     else document.querySelector("#login_error").innerHTML=login.message
     setLogin(false)
    }
   const  loginByEnter=(e)=>{
     let a= (e.keyCode==13)?Login():''
    }
    return (
     <>
     <div className='row login-form  m-0 p-0'>
       <div className='col-md-6 p-0 m-0 flex-column d-none d-md-flex'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} className=''/> 
          {/* <Title level={5} style={{color:'white'}}>Nutrifactor Attendance System</Title> */}
       </div>
       <div className='col-md-6  p-0 m-0 bg-light'>
                     <form className='form '>
                     <Title level={5} className='m-0 mb-3' style={{color:'rgb(24,144,255)'}}><BsFillUnlockFill className='me-2'/>{props.user} Log in to your account</Title>
                     <Input addonAfter={<BsPersonCheck style={{fontSize:'17px'}}/>} placeholder="user name" className='mb-3' id='username' onKeyUp={(e)=>{loginByEnter(e)}}/>
                     <Input.Password placeholder="password" className='mb-3 ' 
                          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}  
                          addonAfter={<BsLock style={{fontSize:'17px'}}/>} id='pswd' 
                          onKeyUp={(e)=>{loginByEnter(e)}}/>
                     <Checkbox className='mb-3' style={{color:'rgb(24,144,255)'}}>Remember me</Checkbox>
                     {
                       (!login)?
                       <Button type="primary" block style={{backgroundColor:'rgb(24,144,255)',borderColor:'rgb(24,144,255)'}} onClick={Login}><BsFillUnlockFill className='me-2'/>Login</Button>:
                       <Button type="primary" block style={{backgroundColor:'rgb(24,144,255)',borderColor:'rgb(24,144,255)'}}><LoadingOutlined className='me-1'/>Login</Button>
                     }
                     
                     <small id='login_error' style={{color:"crimson"}} className='mt-3'>-</small>
                     </form>
       </div>
     </div>
     </>
    )
}