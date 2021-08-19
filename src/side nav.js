import React from 'react';
import '../node_modules/antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,MenuUnfoldOutlined,MenuFoldOutlined,PieChartOutlined,DesktopOutlined,ContainerOutlined,MailOutlined,} from '@ant-design/icons';
const { SubMenu } = Menu;

export default class SideNav extends React.Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className='left-part'> 
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }} className='ml-2 my-2' style={{backgroundColor:"#E94B3CFF",border:'none',display:"flex",alignItems:"center"}}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="2" icon={<DesktopOutlined />} className='set' style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
            <NavLink to='/getUser'>Users</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />} className='set' style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
            <NavLink to='/AttendanceLog'>Attendance Log</NavLink>
            </Menu.Item>
          <Menu.Item key="4" icon={<DesktopOutlined />} className='set role-btn' style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>Restart Machine</Menu.Item>
          <Menu.Item key="5" icon={<DesktopOutlined />} className='set add' style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>Add User</Menu.Item>
        </Menu>
      </div>
    );
  }
}