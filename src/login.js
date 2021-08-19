import React from 'react';
import './login form.css'
import '../node_modules/antd/dist/antd.css';
import {Typography,Input,Button,Checkbox } from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {BsPersonCheck,BsLock} from 'react-icons/bs'
const { Title } = Typography;
export default class LoginForm extends React.Component {
    Login=()=>{
      this.props.login();
    }
  render() {
    return (
     <>
     <div className="login-form" >
             <div className="" style={{width:'97%'}}>
                 <div style={{width:"400px"}} className='bg-white border rounded'>
                     <div level={2} className='py-3' style={{background:'#008269',color:"white"}}>
                        <center><img src={process.env.PUBLIC_URL + '/nutrifactor.png'}/> </center>
                     </div>
                     <form className='form' className='px-5 py-5'>
                     <Input addonAfter={<BsPersonCheck style={{fontSize:'17px'}}/>} placeholder="user name" className='mb-3'/>
                     <Input.Password placeholder="password" className='mb-3' iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}  addonAfter={<BsLock style={{fontSize:'17px'}}/>}/>
                     <Checkbox className='mb-3'>Remember me</Checkbox>
                     <Button type="primary" block style={{backgroundColor:'#008269',borderColor:'#008269'}} onClick={this.Login}>Login</Button>
                     </form>
                 </div>
             </div>
     </div>
     </>
    );
  }
  
}