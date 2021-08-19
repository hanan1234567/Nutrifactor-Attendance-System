import React from 'react'
import {Typography,Row,Col } from 'antd';
import './serve.css'
import {BellOutlined} from '@ant-design/icons';
const {Title}=Typography;
class Home extends React.Component
{
  render()
  {
        return    (
            <>
            <div className='alert-msg' style={{position:"fixed",right:'0px',top:"10px"}}></div>
            <div className="my-5 d-flex flex-column align-items-center" >
             <div className="box-cover my-3" style={{width:'99%'}}>
               <div className="box  my-3 py-4 mx-3"><img src={process.env.PUBLIC_URL+'/img/ph.png'} className='mb-3'/><Title level={5} className='mb-0'>pH Level</Title><Title level={4} className='value ph-sensor-value'>-</Title></div>
               <div className="box  my-3 py-4 mx-3"><img src={process.env.PUBLIC_URL+'/img/oxygen.png'} className='mb-3'/><Title level={5} className='mb-0 '>Oxygen Level</Title></div>
               <div className="box  my-3 py-4 mx-3"><img src={process.env.PUBLIC_URL+'/img/fish.png'} className='mb-3'/><Title level={5} className='mb-0 '>Fish Quantity</Title></div>
               <div className="box  my-3 py-4 mx-3"><img src={process.env.PUBLIC_URL+'/img/pool.png'} className='mb-3'/><Title level={5} className='mb-0 '>Water Pools</Title></div>
               <div className="box  my-3 py-4 mx-3"><img src={process.env.PUBLIC_URL+'/img/temperature.png'} className='mb-3'/><Title level={5} className='mb-0 '>Temperature</Title><Title level={5} className='value temp'>-</Title></div>
               <div className="box shadow my-3 py-4 mx-3"><img src={process.env.PUBLIC_URL+'/img/worker.png'} className='mb-3'/><Title level={5} className='mb-0 '>Worker Details</Title></div>
             </div>
          </div>
          <div className='alerts'>
              <div>
              <Title level={5} className='mb-0 d-flex flex-column' style={{color:"white"}}><BellOutlined /><span>Alerts</span></Title>
              </div>
          </div>
          </>
        )
  }
  componentDidMount()
  {
             const   getPHSensorData=async ()=>
             {
                console.log("yes")
                const data=await fetch('/ph',{
                   method:'get', headers:{'Content-Type':'application/json'}
                })
                
                const res=await data.json();
                if(res.status==500 || !res) console.log("Server Error")
                else {
                  if(document.getElementsByClassName("ph-sensor-value")[0]==undefined) return;
                     document.getElementsByClassName("ph-sensor-value")[0].innerHTML=res;
                     let result=Math.floor(res);
                     if(result>=0 && result<=5)
                     {
                       if(document.getElementsByClassName("alert-msg")[0]==undefined) return;
                       document.getElementsByClassName("alert-msg")[0].innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert" ><strong>Alert!!</strong> Water is in Acidic Nature. Take precautions.\
                       <button type="button" class="close" data-dismiss="alert" aria-label="Close">\<span aria-hidden="true">&times;</span></button>`

                     }
                    //  else if(result>5 && result<=9)
                    //  {
                    //   document.getElementsByClassName("alert-msg")[0].innerHTML=''
                    //  }
                    //  else
                    //  {
                    //   document.getElementsByClassName("alert-msg")[0].innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert" ><strong>Alert!!</strong> Water is in Acidic Nature. Take precautions.\
                    //   <button type="button" class="close" data-dismiss="alert" aria-label="Close">\<span aria-hidden="true">&times;</span></button>`

                    //  }
                }
             }
            getPHSensorData();
            setInterval(()=>{getPHSensorData()},2000)
             const   getTemp=async ()=>
             {
                const data=await fetch('/temp',{
                   method:'get', headers:{'Content-Type':'application/json'}
                })
                const res=await data.json();
                if(res.status==500 || !res) console.log("Server Error")
                else {
                     document.getElementsByClassName("temp")[0].innerHTML='Min:'+res.min+", Max:"+res.max;
                }
             }
             document.getElementsByClassName("temp")[0].innerHTML='31 deg'
        //     getTemp();
  }    
}
export default Home;
