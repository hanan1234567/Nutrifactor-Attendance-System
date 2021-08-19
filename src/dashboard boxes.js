import React from 'react';
import './dashboard boxes.css'
import { BsFillPeopleFill,BsPersonCheckFill,BsFillAlarmFill,BsPersonDashFill } from "react-icons/bs";
import '../node_modules/antd/dist/antd.css';
import { Menu, Button,Typography } from 'antd';
import {RollbackOutlined, DashboardOutlined,TeamOutlined,SettingOutlined,ProfileOutlined,LogoutOutlined} from '@ant-design/icons';
const { Title } = Typography;
export default class DashboardBoxes extends React.Component {
  render() {
    return (
     <>
                     <div className='col-lg-3'>
                        <div className='bg-white text-dark dashboard-box px-3 py-2'>
                        {(()=>{
                          if(this.props.icon==1) return <BsFillPeopleFill style={{fontSize:'30px',color:'#008269'}}/>
                          else if(this.props.icon==2) return <BsPersonCheckFill style={{fontSize:'30px',color:'#008269'}}/>
                          else if(this.props.icon==3) return <BsFillAlarmFill style={{fontSize:'30px',color:'#008269'}}/>
                          else if(this.props.icon==4) return <BsPersonDashFill style={{fontSize:'30px',color:'#008269'}}/>
                        })()}
                          <div className='px-3 py-1'>
                            <Title level={3} className='m-0 p-0'>{this.props.value}</Title>
                            <Title level={5} className='m-0 p-0' style={{color:'#008269'}}>{this.props.name}</Title>
                          </div>
                        </div>
                     </div>
                     
     </>
    );
  }
  
}