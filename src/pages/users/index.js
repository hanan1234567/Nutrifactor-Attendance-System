import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Typography,Row,Col,Button,Drawer,Form,Input,Select,message,Popconfirm,Switch} from 'antd';
import {BsX} from "react-icons/bs";
import {LoadingOutlined,MinusCircleOutlined,QuestionCircleOutlined,EditOutlined} from '@ant-design/icons';
const {Title}=Typography
const {Option}=Select
export default function User()
{
    const [data,setData]=useState('')
    const [selectedRole,setSelectedRole]=useState([])
    const [roles,setRoles]=useState([])
    const userID=useSelector((state)=>state.login.userID)
    const handleRole=(value)=>{setSelectedRole(value)}
    const [update,setUpdate]=useState([-1,false])
    const [userData,setUserData]=useState({name:'',email:'',role:[]})
    const [disabled,setDisabled]=useState(true)
  
    // drawer function  
    const [visible,setVisible]=useState(false)
    const showDrawer = () => {setVisible(true)}
    const onClose = () => {setVisible(false);setUpdate([-1,false]);setUserData({name:'',email:'',role:[]}) }
    const getData=async ()=>
    {
        setData('')
        const data=await fetch(`/examinar/${userID}`,{method:'get', headers:{'Content-Type':'application/json'}})
        const res=await data.json();
      //  let courses=await fetch(`/courses/${userID}`,{method:'get', headers:{'Content-Type':'application/json'}})
      //  courses=await courses.json();    
        let fetch_roles=await fetch(`/role/${userID}`,{method:'get', headers:{'Content-Type':'application/json'}})
        fetch_roles=await fetch_roles.json();
        if(res.success)setData(res.data)
        else{setData([]);message.error(res.message)}
        // setCourses(courses.data)
        if(fetch_roles.success) setRoles(fetch_roles.data)
        else setRoles([])
    }
    const registerUser=async ()=>
            {
                message.loading("loading...")
                var elements=document.querySelector("#user-form").elements
                console.log(elements[3].value)
                let json,data
                if(update[1])
                {
                    if(disabled)
                    json={adminID:userID,name:elements[0].value,email:elements[1].value,role:selectedRole}
                    else
                    json={adminID:userID,name:elements[0].value,email:elements[1].value,pswd:elements[3].value,role:selectedRole}
                    data=await fetch(`/user/${update[0]}`,{method:'PUT', headers:{'Content-Type':'application/json'},body:JSON.stringify(json)})
                }
                else
                {
                    json={adminID:userID,name:elements[0].value,email:elements[1].value,pswd:elements[3].value,role:selectedRole}
                    data=await fetch('/registerUser',{method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(json)})
                }
                const res=await data.json()
                if(res.success) {getData();message.success(res.message,2.5);return}
                message.error(res.message,2.5)
            }
    const updateData=(i)=>{
            setUserData({name:data[i].name,email:data[i].email})
            setSelectedRole(data[i].role)
            setUpdate([data[i]._id,true])
            setDisabled(true)
            setVisible(true)
            }
    const delData=async (id)=>{
            let del=await fetch(`/user/${id}`,{method:'delete', headers:{'Content-Type':'application/json'}})
            del=await del.json();
            if(del.success) {getData()}
            else message.error(del.message,2.5)
            }
    useEffect(()=>{
        getData();
    },[])
        return    (
            <>
            <div className="my-3 column-between">
             <div style={{width:'97%'}} className='border rounded bg-white py-2 px-3'>
                <div className='my-0 py-2 border-bottom'><NavLink to='/'>Admin</NavLink> / Users</div>
                <Title level={5} className='my-0 py-2 d-flex justify-content-between align-items-center'>
                    Users<Button size="small" onClick={showDrawer}>Register</Button>
                </Title>
                <table className='table table-hover table-sm py-2'>
                        <tr className='border-bottom'>
                            <th>#</th>
                            <th>Name</th>  
                            <th>Email</th>    
                            <th>Role</th>    
                            <th>Operation</th>
                        </tr>
                    <tbody id='table'>
                       {
                           (!data)?<td colSpan='9'><LoadingOutlined className='my-1' style={{fontSize:"40px",color:'#5375e2'}}/></td>:
                            data.map((value,i)=>{
                               return <tr style={{cursor:'pointer'}} key={value._id}>
                                          <td>{i+1}</td>
                                          <td className='text-capitalize'>{value.name}</td>
                                          <td>{value.email}</td>
                                          <td>{value.role}</td>
                                          <td><EditOutlined style={{cursor:'pointer',color:'#5375e2'}} onClick={()=>{updateData(i)}}/>
                                              <Popconfirm title="Are you sure delete this role?" onConfirm={()=>{delData(value._id)}} icon={<QuestionCircleOutlined style={{color:'crimson'}}/>}>
                                               <MinusCircleOutlined style={{cursor:'pointer',color:'crimson'}} className='ms-2'/>
                                              </Popconfirm>
                                          </td>
                                       </tr>
                           })
                       }
                    </tbody>
                </table>
             </div>
            </div>
            <Drawer  title={<Title level={5} className='m-0'>Register User</Title>}  width={720}  onClose={onClose} destroyOnClose={true} visible={visible}  closeIcon={< BsX style={{fontSize:'23px'}}/>}
               footer={<div className='between'><Button onClick={onClose}>Back</Button><Button onClick={registerUser}>Submit</Button></div>}>
                <Form layout="vertical" hideRequiredMark id='user-form'>
                        <Row>
                            <Col span={12}>
                                <Form.Item label={<Title level={5} className='m-0'>Name</Title>} className='me-2'> 
                                <Input placeholder="examinar name" className='name' defaultValue={userData.name} allowClear/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<Title level={5} className='m-0'>Email</Title>}>
                                <Input type='email' placeholder="enter email" className='email' defaultValue={userData.email} allowClear/>
                                </Form.Item>
                            </Col>
                            <Col span={24} className='align-center mb-2'>
                               <Switch size='small' onChange={(value)=>{setDisabled(()=>disabled?false:true)}} defaultChecked={(update[1])?true:false}/> 
                               <span className='ms-2 fw-bold'>Change password for this user</span>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<Title level={5} className='m-0'>Password</Title>} className='me-2'>
                                <Input type='password' placeholder="enter password" disabled={disabled} allowClear/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<Title level={5} className='m-0'>Confirm Password</Title>} className='me-2'>
                                <Input type='password' placeholder="re-enter password" disabled={disabled} allowClear/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<Title level={5} className='m-0'>Role</Title>}>
                                <Select  allowClear  style={{ width: '100%' }}  placeholder="set role" defaultValue={selectedRole} onChange={handleRole}>
                                     {
                                         (roles==null)?'':
                                         roles.map((value,i)=> <Option key={value.name}>{value.name}</Option>)
                                     }
                                </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                </Form>
          </Drawer>
          </>
        )
}

