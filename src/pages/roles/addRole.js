import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink,useHistory } from 'react-router-dom';
import {Typography,Row,Col,Button,Drawer,Input,Form,message,Switch} from 'antd';
import {BsX} from "react-icons/bs";
const {Title}=Typography;
export default function AddRole()
{
    const [data,setData]=useState('')
    const userID=useSelector((state)=>state.login.userID)
    const user=useSelector((state)=>state.login.user)
    const history=useHistory();
    // drawer function  
    const [premissions,setPremissions]=useState({by:userID,name:'',students:[0,0,0,0],courses:[0,0,0,0],topics:[0,0,0,0],questionBank:[0,0,0,0],quizes:[0,0,0,0]})
    const [visible,setVisible]=useState(true)
    const onClose = () => {setVisible(false);history.push(`/roles`) }
    const getData=async ()=>
    {
        setData('')
        let roles=await fetch(`/role/${userID}`,{method:'get', headers:{'Content-Type':'application/json'}})
        roles=await roles.json();
        if(roles.success)
        setData(roles.data)
        else
        {
            setData([]);
            message.error(roles.message)
        }
    }
    const premission=(module,i,value)=>
    {
        console.log(module)
        premissions[module][i]=value
        setPremissions(premissions)
    }
    const registerRole=async ()=>
            {
                message.loading("loading...")
                let json=premissions;
                json.name=document.querySelector("#role-form").elements[0].value
                console.log(premissions);
                const data=await fetch(`/role`,{method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(json)})
                const res=await data.json();
                if(res.success) {getData();message.success(res.message,2.5);return}
                message.error(res.message,2.5)
            }
        useEffect(()=>{
            getData();
        },[])
        useEffect(()=>{
            console.log('premssion',premissions)
        })
        return    (
                <Drawer  title={<Title level={5} className='m-0'>Add Role</Title>}  width={720}  onClose={onClose} destroyOnClose={true}  visible={visible}  closeIcon={< BsX style={{fontSize:'23px'}}/>}
                      footer={<div className='between'><Button onClick={onClose}>Back</Button><Button onClick={registerRole}>Submit</Button></div>}>
                        <Form layout="vertical" hideRequiredMark id='role-form'>
                                <Row>
                                     <Col span={12}>
                                        <Form.Item label={<Title level={5} className='m-0'>Name</Title>}> 
                                        <Input placeholder="role name" allowClear/>
                                        </Form.Item>
                                    </Col>
                                     <Col span={24}>
                                        <Row className='py-2 border-bottom'>
                                            <Col span={4} className='fw-bold'>Modules</Col>
                                            <Col span={5} className='fw-bold'>Create</Col>
                                            <Col span={5} className='fw-bold'>Read</Col>
                                            <Col span={5} className='fw-bold'>Update</Col>
                                            <Col span={5} className='fw-bold'>Delete</Col>
                                        </Row>
                                        <Row className='py-2 border-bottom'>
                                            <Col span={4}>Students</Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('students',0,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('students',1,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('students',2,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('students',3,value)}}/> </Col>
                                        </Row>
                                        <Row className='py-2 border-bottom'>
                                            <Col span={4}>Courses</Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('courses',0,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('courses',1,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('courses',2,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('courses',3,value)}}/> </Col>
                                        </Row>
                                        <Row className='py-2 border-bottom'>
                                            <Col span={4}>Topics</Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('topics',0,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('topics',1,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('topics',2,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('topics',3,value)}}/> </Col>
                                        </Row>
                                        <Row className='py-2 border-bottom'> 
                                            <Col span={4}>Question Bank</Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('questionBank',0,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('questionBank',1,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('questionBank',2,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('questionBank',3,value)}}/> </Col>
                                        </Row>
                                        <Row className='py-2 border-bottom'> 
                                            <Col span={4}>Quizes</Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('quizes',0,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('quizes',1,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('quizes',2,value)}}/> </Col>
                                            <Col span={5}><Switch size='small' onChange={(value)=>{premission('quizes',3,value)}}/> </Col>
                                        </Row>
                                    </Col>  
                                    <Col span={24}>
                                        <small id='error'></small>
                                    </Col> 
                                </Row>
                        </Form>
                   </Drawer>
        )
}

