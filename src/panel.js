import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Dashboard from './dashboard';
import getUser from './get user';
import AttendanceLog from './attendance log';
import Settings from './settings';
import './panel.css'
import '../node_modules/antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { Menu, Button,Typography } from 'antd';
import {BsClock,BsPeople,BsReverseLayoutTextWindowReverse,BsArrowBarRight,BsColumnsGap} from "react-icons/bs";
import {RollbackOutlined} from '@ant-design/icons';
import { BsX} from "react-icons/bs";
const { Title } = Typography;
export default class Panel extends React.Component {
  render() {
    return (
    <>
     <div className='panel'>
         <div className='panel-left-part py-3'>
             <div className='py-2 px-2 toggle'>
                 <img src={process.env.PUBLIC_URL + '/nutrifactor.png'}/> 
             </div>
             <div className='py-3'>
                 <NavLink className='p-2 option' to='/'><BsColumnsGap className='mr-2'  style={{fontSize:"20px"}}/><span className='toggle'>Dashboard</span> </NavLink>
                 <NavLink className='p-2 option' to='/getUser'><BsPeople className='mr-2' style={{fontSize:"20px"}}/><span className='toggle'>Employees</span></NavLink>
                 <NavLink className='p-2 option' to='/AttendanceLog'><BsReverseLayoutTextWindowReverse className='mr-2'  style={{fontSize:"20px"}}/><span className='toggle'>Attendance Log</span></NavLink>
                 <div className='p-2 option' id='settings'><BsClock className='mr-2' style={{fontSize:"20px"}}/><span className='toggle'>Time Table</span></div>
                 <div className='p-2 option' onClick={this.props.login}><BsArrowBarRight className='mr-2'  style={{fontSize:"20px"}}/><span className='toggle'>Logout</span></div>
                 <NavLink className='p-2 option' to='' id='title'> <RollbackOutlined id='rollback'  className='mr-2'/><span className='toggle'>Resize</span></NavLink>
             </div>
         </div>
         <div className='panel-right-part' style={{backgroundColor:'rgb(245,246,248)'}}>
           <div className='w-100 py-3 bg-white'>
               <div>
                 
               </div>
             </div> 
             <Switch>
             <Route exact path='/' component={Dashboard}/>
              <Route exact path='/getUser' component={getUser}/>
              <Route exact path='/AttendanceLog' component={AttendanceLog}/>
            </Switch>
         </div>
     </div>
     <Settings/>
     </>
    );
  }
  componentDidMount()
  {
      const rollback=document.getElementById("rollback");
      const panel_left=document.getElementsByClassName("panel-left-part")[0];
      const hide=document.getElementsByClassName("toggle");
      const option=document.getElementsByClassName("option");
      rollback.addEventListener("click",()=>{
       for(let i=0;i<hide.length;i++)
       hide[i].classList.toggle("hide");
       panel_left.classList.toggle("panel-left-part-width");
      })
    //   for(let i=0;i<option.length;i++)
    //   {
    //       option[i].addEventListener("click",()=>{
    //           for(let j=0;j<option.length;j++){option[j].style.backgroundColor='transparent'}
    //           option[i].style.backgroundColor='rgba(255,255,255,0.5);';
    //       })
    //  }
  }
}