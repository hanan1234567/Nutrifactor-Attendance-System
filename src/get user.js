import React from 'react'
import {Typography,Row,Col,Button,Select,Input} from 'antd';
import {BsPencil,BsArrowRepeat} from "react-icons/bs";
import './get user.css'
import {LoadingOutlined,DeleteOutlined } from '@ant-design/icons';
const {Title}=Typography;
const { Option } = Select;
export default class getUser extends React.Component
{
    state={data:'',shift:''}
    getData=async ()=>
    {
        const data=await fetch('/user',{method:'get', headers:{'Content-Type':'application/json'}})
        const res=await data.json();
        this.setState({data:res.message})
    }
    updateData=async (id,i)=>
    {
        this.setState({data:''})
        const json={id:id,salary:document.getElementsByClassName("salary")[i].value,shift:document.getElementsByClassName("shift")[i].value}
        const data=await fetch('/user',{method:'post', headers:{'Content-Type':'application/json'},body:JSON.stringify(json)})
        const res=await data.json();
       // this.setState({data:res.message})
       this.getData();
    }
    updateUsers=async ()=>{
        const data=await fetch('/users',{method:'POST', headers:{'Content-Type':'application/json'}})
        const res=await data.json();
    }
    fun=()=>{
        alert(new Date('1/1/1999 '+ '8:00')> new Date( '1/1/1999 '+ '15:00'))
    }
    render()
    {
        return    (
            <>
            <div className="my-5 d-flex flex-column align-items-center w-100">
             <div className="border rounded" style={{width:'97%'}}>
               <div style={{background:"rgb(255,255,255)"}} className='p-3'>
                 <Title level={5} className='p-0 m-0' style={{color:'#008269'}}>Employees Record</Title>
                 <div className='py-2'>
                 <Select defaultValue="Search By" style={{ width: 120 }}><Option value="id">ID</Option><Option value="name">Name</Option></Select>
                 <Input.Search allowClear style={{ width:150}} defaultValue=""  className='ml-2'/>
                 <Button className='ml-2' id='reload' onClick={this.fun}><BsArrowRepeat style={{fontSize:"20px"}}/></Button>
                 </div>
                <table className='table table-hover table-sm'>
                        <tr>
                            <th>#</th>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Card No</th>
                            <th>Salary(Per Hour)</th>
                            <th>Shift</th>
                            <th>Working Hours(Aug)</th>
                            <th>Operation</th>
                        </tr>
                    <tbody id='table'>
                       {
                           (!this.state.data)?<td colSpan='9'><center><LoadingOutlined className='my-3' style={{fontSize:"40px",color:'#008269'}}/></center></td>:
                           this.state.data.map((value,i)=>{
                               return <tr style={{cursor:'pointer'}}><td>{i+1}</td><td>{value.userId}</td><td className='text-capitalize'>{value.name}</td><td>{value.role}</td><td>{value.cardno}</td>
                                   <td><Input size="small" defaultValue={value.salary} style={{width:'100px',border:"none"}} className='salary'/></td><td>
                                   <select style={{width:'100px',border:"none"}} className='p-0 shift' defaultValue={value.shift}>
                                       <option value='Morning'>Morning</option><option value='Evening'>Evening</option><option value='Night'>Night</option>
                                    </select>
                                   </td>
                                   <td>120</td>
                                   <td><BsPencil style={{cursor:'pointer',color:'#008269'}} onClick={()=>{this.updateData(`${value.userId}`,i)}}/>
                                   <DeleteOutlined style={{cursor:'pointer',color:'crimson'}} className='ml-3'/></td>
                                   </tr>
                           })
                       }
                    </tbody>
                </table>
                </div>
             </div>
          </div>
          </>
        )
    }
    componentDidMount()
        {
       this.getData()
        }
}

