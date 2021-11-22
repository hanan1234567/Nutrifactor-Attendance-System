import React from 'react'
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend,CartesianGrid,BarChart,Bar} from 'recharts';
import '../node_modules/antd/dist/antd.css';
import {Typography,Row,Col,Card,Avatar} from 'antd';
import {BsCircleFill} from 'react-icons/bs'
import {TeamOutlined,CrownOutlined,ReadOutlined} from '@ant-design/icons'
const { Title } = Typography;
const {Meta}=Card;

export default class Dashboard extends React.Component {
    state={data:''}
  render() {
    return (
     <>
     <div className="my-3 d-flex flex-column align-items-center" >
             <div className="border rounded " style={{width:'97%'}} className='bg-white py-2 px-3'>
                 <Row gutter={16} className='my-2'>
                     <Col span='6'>
                      <Card className='bg-light'>
                      <Meta avatar={<TeamOutlined style={{fontSize:'20px'}}/>}  title="30" description="Students"/>
                      </Card>
                     </Col>
                     <Col span='6'>
                      <Card className='bg-light'>
                      <Meta avatar={<CrownOutlined style={{fontSize:'20px'}}/>}  title="2" description="Examinars"/>
                      </Card>
                     </Col>
                     <Col span='6'>
                      <Card className='bg-light'>
                      <Meta avatar={<ReadOutlined style={{fontSize:'20px'}}/>}  title="5" description="Courses"/>
                      </Card>
                     </Col>
                     <Col span='6'>
                      <Card className='bg-light'>
                      <Meta avatar={<TeamOutlined style={{fontSize:'20px'}}/>}   title="5" description="Courses"/>
                      </Card>
                     </Col>
                 </Row>
                 <Row gutter={16} className='my-2'>
                    <Col span={12} >
                        <div className='graphs p-2 border bg-light'>
                            <Title level={5}>Attendance Log</Title>
                            <div className='graph-title py-2'>
                                <BsCircleFill color='#008290' className='ms-1'/><span className='mr-3'>Check In</span>
                                <BsCircleFill color='#008269' className='ms-1'/><span>Late</span>
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
                    </Col>
                    <Col span={12}>
                       <div className='graphs p-2 border bg-light'>
                       <Title level={5}>Attendance Log</Title>
                       <div className='graph-title py-2'>
                                <BsCircleFill color='#008290' className='ms-1'/><span className='mr-3'>Check In</span>
                                <BsCircleFill color='#008269' className='ms-1'/><span>Late</span>
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
                    </Col>
                 </Row>
             </div>
     </div>
     </>
    );
  }
}