import React,{useEffect, useState} from 'react';
import { AccessControl } from 'accesscontrol';
import logo from './logo.png'
import {Route,Switch} from 'react-router-dom';
import Dashboard from './dashboard';
import Roles from './pages/roles';
import User from './pages/users';
import Videos from './pages/videos'
import './panel.css'
import '../node_modules/antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Typography,Avatar,Dropdown,Result,Button,message} from 'antd';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutUser } from './features/login/loginSlice';
const { Header, Content, Footer, Sider } = Layout;
const {Title}=Typography
const { SubMenu } = Menu;
export default function Panel() {
  const [collapsed,setCollapsed]=useState(false)
  const user=useSelector((state)=>state.login.user)
  const grantList=useSelector((state)=>{return new AccessControl(state.login.grantList)})
  const dispatch=useDispatch();
  const history=useHistory();
  const toggle = () => {
    (collapsed)?setCollapsed(false):setCollapsed(true)
  }
  const logout=async ()=>{
   // dispatch(logoutUser())
   // history.push(`/`)
   let logOut=await fetch(`/logout`,{method:'get', headers:{'Content-Type':'application/json'}})
       logOut=await logOut.json();
        if(logOut.success) {
             dispatch(logoutUser())
              history.push(`/`)
        }
        else message.error(logOut.message,2.5)
  }
  useEffect(()=>{
  
  },[])
  const  menu = (
    <Menu>
      <Menu.Item key={0}>
        <a target="_blank" className='px-3'>Settings</a>
      </Menu.Item>
      <Menu.Item key={1}>
        <a target="_blank" className='px-3' onClick={logout}>Logout</a>
      </Menu.Item>
    </Menu>
  )
    return (
      <Layout className='panel'>
      <Sider trigger={null} collapsible collapsed={collapsed} className='bg-white border-end'> 
        <div className='logo py-2 mb-2'>
          {/* <img src={logo}/>  */}
        </div>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<ion-icon name="speedometer" style={{fontSize:'19px'}}></ion-icon>} className='mt-0'><NavLink to={'/'} className='ms-1'>Dashboard</NavLink></Menu.Item>        
              {(grantList.can(user).readOwn('roles').granted)?<Menu.Item key="2" icon={<ion-icon name="key" style={{fontSize:'19px'}}></ion-icon>}><NavLink to={'/roles'} className='ms-1'>Roles</NavLink></Menu.Item>:''}
              {(grantList.can(user).readOwn('users').granted)?<Menu.Item key="3" icon={<ion-icon name="people" style={{fontSize:'19px'}}></ion-icon>}><NavLink to={'/users'} className='ms-1'>Users</NavLink></Menu.Item>:''}
              {(grantList.can(user).readOwn('video').granted)?<Menu.Item key="4" icon={<ion-icon name="videocam" style={{fontSize:'19px'}}></ion-icon>}><NavLink to={'/videos'} className='ms-1'>video</NavLink></Menu.Item>:''}
              {(grantList.can(user).readOwn('subject').granted)?<Menu.Item key="5" icon={<ion-icon name="book" style={{fontSize:'19px'}}></ion-icon>}><NavLink to={'/users'} className='ms-1'>Subject</NavLink></Menu.Item>:''}
              <SubMenu key="sub1" icon={<ion-icon name="person" style={{fontSize:'19px'}}></ion-icon>} title="User">
              <Menu.Item key="6">Account</Menu.Item>
              <Menu.Item key="7" onClick={logout}>Logout</Menu.Item>
             </SubMenu>
            </Menu>
      </Sider>
      <Layout className="site-layout">
        <div className='bg-white p-3 border-bottom between'>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {className: 'trigger',style:{fontSize:'22px'},onClick: toggle})}
          <div className='center'>
           <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <Avatar size='default' icon={<ion-icon name="person-outline"></ion-icon>} className='center me-2'/>
           </Dropdown>
           <span className='fw-bold'>Welcome {user}</span>
          </div>
        </div>
        <Content className='content'>
            <Switch>
             <Route exact path={'/'} component={() => <Dashboard/>}/>
             <Route exact path={'/roles'} component={() => <Roles/>}/>
             <Route exact path={'/users'} component={() => <User/>}/>
             <Route exact path={'/videos'} component={() => <Videos/>}/>
           </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }} className='p-3 light-shadow bg-white border-top'>
          <Title level={5} className='m-0'>Btech Group ©2021</Title>
        </Footer>
      </Layout>
    </Layout>
    );
}