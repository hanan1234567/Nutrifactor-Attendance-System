import React, { useEffect,useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {Typography,Row,Col,Button,Drawer,Input,Form,message,Switch,Popconfirm} from 'antd';
import {LoadingOutlined,MinusCircleOutlined, EditOutlined,QuestionCircleOutlined} from '@ant-design/icons';
import {BsX} from "react-icons/bs";
const {Title}=Typography;
export default function Roles()
{
    const [data,setData]=useState('')
    const userID=useSelector((state)=>state.login.userID)
    const user=useSelector((state)=>state.login.user)
    const modules=['subject','video']
    const [update,setUpdate]=useState([-1,false])
    //
    const [premissions,setPremissions]=useState({name:'',premissions:{subject:{'create:Own':false,'read:Own':false,'update:Own':false,'delete:Own':false},video:{'create:Own':false,'read:Own':false,'update:Own':false,'delete:Own':false}}})
    const [visible,setVisible]=useState(false)
    const onClose = () => {    
        setPremissions({name:'',premissions:{subject:{'create:Own':false,'read:Own':false,'update:Own':false,'delete:Own':false},video:{'create:Own':false,'read:Own':false,'update:Own':false,'delete:Own':false}}})
                             setUpdate([-1,false]);setVisible(false)}
    //
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
        console.log(roles.data)
    }
    const premission=(module,action,value)=>
    {
        premissions['premissions'][module][action]=value
        setPremissions(premissions)
        console.log(premissions)
    }
    const registerRole=async ()=>
            {
                message.loading("loading...")
                let json=premissions;
                json.name=document.querySelector("#role-form").elements[0].value
                let data;
                if(update[1])
                data=await fetch(`/role/${update[0]}`,{method:'PUT', headers:{'Content-Type':'application/json'},body:JSON.stringify(json)})
                else
                data=await fetch(`/role`,{method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(json)})
                const res=await data.json();
                if(res.success) {getData();message.success(res.message,2.5);onClose();return}
                message.error(res.message,2.5)
            }
    const updateData=(i)=>{
        setPremissions({name:data[i].name,premissions:data[i].premissions})
        setUpdate([data[i]._id,true])
        setVisible(true)
    }
    const delData=async (id)=>{
        let del=await fetch(`/role/${id}`,{method:'delete', headers:{'Content-Type':'application/json'}})
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
             <div className="border rounded " style={{width:'97%'}} className='bg-white py-2 px-3'>
                <div className='my-0 py-2 border-bottom'><NavLink to='/'>Admin</NavLink> / Roles</div>
                <Title level={5} className='my-0 py-2 d-flex justify-content-between align-items-center'>
                    Roles <Button size="small" className='align-center' onClick={()=>{setVisible(true)}}>Add Role</Button>
                </Title>
                <table className='table table-hover table-sm py-2'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>  
                            <th></th>    
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody id='table'>
                       {
                           (!data)?<LoadingOutlined className='my-3' style={{fontSize:"40px",color:'#5375e2'}}/>:
                           data.map((value,i)=>{
                               return <tr style={{cursor:'pointer'}} key={value._id}>
                                          <td>{i+1}</td>
                                          <td className='text-capitalize'>{value.name}</td>
                                          <td>{value.email}</td>
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
            <Drawer  title={<Title level={5} className='m-0'>Add Role</Title>}  width={720}  onClose={onClose} destroyOnClose={true}  visible={visible}  closeIcon={< BsX style={{fontSize:'23px'}}/>}
                      footer={<div className='between'><Button onClick={onClose}>Back</Button><Button onClick={registerRole}>{(update[1])?'Update':'Save'}</Button></div>}>
                        <Form layout="vertical" hideRequiredMark id='role-form'>
                                <Row>
                                     <Col span={12}>
                                        <Form.Item label={<Title level={5} className='m-0'>Name</Title>}> 
                                        <Input placeholder="role name" allowClear defaultValue={premissions.name}/>
                                        </Form.Item>
                                    </Col>
                                     <Col span={24}>
                                        <Row className='py-2 border-bottom'>
                                            <Col span={4} className='fw-bold'>Modules</Col>
                                            <Col span={5} className='fw-bold'>Create</Col>
                                            <Col span={5} className='fw-bold'>Read</Col>
                                            <Col span={5} className='fw-bold'>Put</Col>
                                            <Col span={5} className='fw-bold'>Delete</Col>
                                        </Row>
                                        {
                                            modules?.map((module,i)=>{
                                                return (
                                                    <Row className='py-2 border-bottom'>
                                                        <Col span={4}>{module}</Col>
                                                        <Col span={5}><Switch size='small' onChange={(value)=>{premission(module,'create:Own',value)}} defaultChecked={premissions['premissions'][module]['create:Own']}/> </Col>
                                                        <Col span={5}><Switch size='small' onChange={(value)=>{premission(module,'read:Own',value)}} defaultChecked={premissions['premissions'][module]['read:Own']}/> </Col>
                                                        <Col span={5}><Switch size='small' onChange={(value)=>{premission(module,'update:Own',value)}} defaultChecked={premissions['premissions'][module]['update:Own']}/> </Col>
                                                        <Col span={5}><Switch size='small' onChange={(value)=>{premission(module,'delete:Own',value)}} defaultChecked={premissions['premissions'][module]['delete:Own']}/> </Col>
                                                    </Row>
                                                )
                                            })
                                        }
                                    </Col>  
                                    <Col span={24}>
                                        <small id='error'></small>
                                    </Col> 
                                </Row>
                        </Form>
            </Drawer>     
          </>
        )
}

