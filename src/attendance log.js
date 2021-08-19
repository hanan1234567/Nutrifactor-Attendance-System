import React from 'react'
import {Typography,DatePicker,Select,Input,Button} from 'antd';
import './get user.css'
import './show emp data.css'
import {LoadingOutlined} from '@ant-design/icons';
import { BsX,BsArrowRepeat} from "react-icons/bs";
const {Title}=Typography;
const { Option } = Select;
export default class AttendanceLog extends React.Component
{
    state={
        data:false,
        break_data:[]
    }
    updateAttendanceLog=async (dte)=>
    {
        let data=await fetch(`/attendance_log`,{method:'post', headers:{'Content-Type':'application/json'}})
        data=await fetch(`/attendance_log/${dte.d1}/max/${dte.d2}`,{ method:'get', headers:{'Content-Type':'application/json'}})
       this.getAttendanceLog(dte);   
    }
    async getAttendanceLog(dte)
    {
       const data=await fetch(`/attendance_record/${dte.d1}/max/${dte.d2}`,{ method:'get', headers:{'Content-Type':'application/json'}})
        const res=await data.json();
        this.setState({data:JSON.parse(res.message)})
    }
    check_date(attendance)
    {
        var month=['01','02','03','04','05','06','07','08','09','10','11','12'];
        var date =(attendance!=null)?new Date(attendance):new Date();
        let d1=`${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`;
        let d=date.getDate();
        let d2=`${date.getFullYear()}-${month[date.getMonth()]}-${++d}`
    return {d1,d2};
    }
    fun2=(e)=>{
        this.setState({data:false})
        this.updateAttendanceLog(this.check_date(document.getElementById("date").value))
    }
    show_break_record=(i)=>{
        document.querySelector(".emp-table").classList.toggle("emp-table-show");
        this.setState({break_data:JSON.parse(this.state.data[i].data)})
    }
    render()
    {
       
        return    (
            <>
            <div className="my-5 d-flex flex-column align-items-center w-100">
             <div className="border" style={{width:'97%'}}>     
                 <div style={{background:"rgb(255,255,255)"}} className='p-3'>
                    <Title level={5} className='p-0 m-0' style={{color:'#008269'}}>Attendance Log</Title>
                    <div className='py-2'>
                    <DatePicker  format={'YYYY/MM/DD'} onChange={(e)=>{this.fun2(e)}} id='date'/>
                    <Select defaultValue="Search By" style={{ width: 120 }} className='ml-2'><Option value="id">ID</Option><Option value="name">Name</Option></Select>
                    <Input.Search allowClear style={{ width:150}} defaultValue=""  className='ml-2'/>
                    <Button className='ml-2' id='reload'><BsArrowRepeat style={{fontSize:"20px"}}/></Button>
                    </div>
                    {/* style={{background:'#F2AA4CFF'}} */}
                    <table className='table table-sm table-hover rounded'>
                            <tr>
                                <th>#</th><th>User ID</th><th>Name</th><th>Check In</th><th>check Out</th><th>Shift</th><th>Late</th><th>Active Hours</th><th>Break</th>
                            </tr>
                        <tbody id='attendance_log_table'>
                            {(this.state.data==false)?<td colSpan='9'><center><LoadingOutlined className='my-3' style={{fontSize:"40px",color:'#008269'}}/></center></td>:
                              this.state.data.map((value,i)=>{
                                  return <tr style={{cursor:'pointer'}} key={i} onClick={()=>{this.show_break_record(i)}}><td>{i+1}</td><td>{value.id}</td><td className='text-capitalize'>{value.name}</td><td>{value.entry}</td><td>{value.leave}</td><td>{value.shift}</td><td>{(value.late)?'Yes':'No'}</td><td>{value.work}</td><td>{value.break}</td></tr>;
                              })
                              }
                        </tbody>
                    </table>
                 </div>
             </div>
          </div>
          {/*  */}
          <div className="emp-table bg-secondary shadow">
            <div className="py-2">
                <div className="mb-2">
                      <BsX style={{fontSize:'26px',cursor:"pointer"}} className='close'/>
                </div>
                <table className='table table-sm table-hover rounded'>
                   <tr><th>#</th><th>Break-In</th><th>Break-Out</th><th>Total</th></tr>
                   <tbody id='break_data'>
                       {
                          (this.state.break_data.length==0)?<tr><td colSpan='7'>No Data Found</td></tr>:this.state.break_data.map((value,i)=>{
                                return <tr key={i}><td>{i+1}</td><td>{value.leave}</td><td>{value.back}</td><td>{value.total}</td></tr>;
                            })
                       }
                   </tbody>
                </table>
            </div>
        </div>
          {/*  */}
          </>
        )
    }
    componentDidUpdate()
    {
    }
    componentDidMount()
        {
         document.getElementById("reload").addEventListener("click",()=>{
            this.setState({data:false})
            this.updateAttendanceLog(this.check_date());
         })
         this.getAttendanceLog(this.check_date());
                const role_form_show=()=>{
                    document.querySelector(".emp-table").classList.toggle("emp-table-show");
                }
                const setData=(i)=>{
                    let data=document.getElementsByClassName("rows")[i].getAttribute("data")
                    document.getElementById("break_data").innerHTML=`${data}`
                }
                document.getElementsByClassName("close")[0].addEventListener("click",role_form_show);
                function set()
                {
                    let rows=document.getElementsByClassName("rows");
                    for(let i=0;i<rows.length;i++)
                    { 
                        document.getElementsByClassName("rows")[i].addEventListener("click",()=>{role_form_show();setData(i)});
                    }
                }
                var change_date=document.getElementById("change_date");
              //  change_date.addEventListener("change",()=>{getAttendanceLog(check_date(change_date.value))})
            
                
        }
}