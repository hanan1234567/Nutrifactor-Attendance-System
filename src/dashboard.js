import React from 'react';
import './dashboard.css';
import DashboardBoxes from './dashboard boxes';
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend,CartesianGrid,BarChart,Bar} from 'recharts';
import '../node_modules/antd/dist/antd.css';
import {Typography } from 'antd';
import {BsCircleFill} from 'react-icons/bs'
const { Title } = Typography;

export default class Dashboard extends React.Component {
    state={data:''}
    async dashboard(dte)
    {
        
        const data=await fetch(`/dashboard/${dte.d1}/max/${dte.d2}`,{ method:'get', headers:{'Content-Type':'application/json'}})
        const res=await data.json();
        this.setState({data:res.message})
        console.log(this.state.data)
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
  render() {
    return (
     <>
     <div className="py-5 dashboard-cover h-100" >
             <div className="dashboard" style={{width:'97%'}}>
                 <div className='row w-100 p-0 m-0  my-3'>
                     <DashboardBoxes value={(!this.state.data)?'-':this.state.data.users} name='Employees' icon='1'/>
                     <DashboardBoxes value={(!this.state.data)?'-':this.state.data.check_in} name='Check In' icon='2'/>
                     <DashboardBoxes value={(!this.state.data)?'-':this.state.data.late} name='Late' icon='3'/>    
                     <DashboardBoxes value={(!this.state.data)?'-':this.state.data.late} name='Check Out' icon='4'/>    
                 </div>
                 <div className='row w-100 p-0 m-0  my-3'>
                    <div className='col-lg-6'>
                        <div className='graphs p-2 border'>
                            <Title level={5} style={{color:'#008269'}}>Attendance Log</Title>
                            <div className='graph-title py-2'>
                                <BsCircleFill color='#008290' className='mr-1'/><span className='mr-3'>Check In</span>
                                <BsCircleFill color='#008269' className='mr-1'/><span>Late</span>
                            </div>
                            <ResponsiveContainer width='100%' aspect={2}>
                                <LineChart data={(!this.state.data)?'':this.state.data.graph} >
                                <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey='date' interval={'preserveStartEnd'}/>
                                    <YAxis />
                                    {/* <Legend/> */}
                                    <Tooltip contentStyle={{backgroundColor:"white",borderRadius:"3px"}}/>
                                    {/* itemStyle */}
                                    <Line dataKey='check_in' type="natural" stroke="#008290" activeDot={{r:8}}/>  
                                    <Line dataKey='late' type="natural" stroke="#008269" activeDot={{r:8}}/>  
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                       <div className='graphs p-2 border'>
                       <Title level={5} style={{color:'#008269'}}>Attendance Log</Title>
                       <div className='graph-title py-2'>
                                <BsCircleFill color='#008290' className='mr-1'/><span className='mr-3'>Check In</span>
                                <BsCircleFill color='#008269' className='mr-1'/><span>Late</span>
                        </div>
                       <ResponsiveContainer width='100%' aspect={2}>
                            <BarChart data={(!this.state.data)?'':this.state.data.graph}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Bar dataKey="check_in" fill="#008290" />
                            <Bar dataKey="late" fill="#008269" />
                            </BarChart>
                        </ResponsiveContainer>
                       </div>
                    </div>
                 </div>
             </div>
     </div>
     </>
    );
  }
  componentDidMount()
  {
      this.dashboard(this.check_date());
   //   alert( new Date((new Date().getTime() - (1 * 24 * 60 * 60 * 1000))))
  }
}