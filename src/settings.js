import React from 'react'
import { BsX, BsCursorFill} from "react-icons/bs";
import './settings.css'
import {Typography} from 'antd';
const {Title}=Typography;
export default class Settings extends React.Component
{
    alert=()=>{
        document.querySelector(".alert-box").classList.toggle("alert-box2");
      }
    render()
    {
       
        return    (
            <>
          {/*  */}
          <div className="settings bg-secondary">
            <div className="py-3">
                <div className="mb-3 border-bottom">
                      <Title level={5} className='p-0 m-0' style={{color:'#008269'}}>Time Table</Title>
                      <BsX className='settings-close main-clr' style={{fontSize:'26px',cursor:"pointer"}}/>
                </div>
                <form action="/attend" method="POST" className='row w-100 m-0 p-0' id='settings_form'>
                        <div class="col-sm-12"><label for="fri" className='font-weight-bold main-clr'>Morning Shift</label></div>    
                        <div class="form-group col-sm-12">
                            <label for="" className='font-weight-bold'>Check-In Timing</label>
                            <div className='d-flex'><input type="time" class="time form-control form-control-sm mr-2"/><input type="time" class="time form-control form-control-sm"/></div>
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="" className='font-weight-bold'>Check-Out Timing</label>
                            <div className='d-flex'><input type="time" class="time form-control form-control-sm"/></div>
                        </div>
                       {/*  */}
                       <div class="col-sm-12 mt-3"><label for="fri" className='font-weight-bold main-clr'>Evening Shift</label></div>    
                        <div class="form-group col-sm-12">
                            <label for="" className='font-weight-bold'>Check-In Timing</label>
                            <div className='d-flex'><input type="time" class="time form-control form-control-sm mr-2"/><input type="time" class="time form-control form-control-sm"/></div>
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="" className='font-weight-bold'>Check-Out Timing</label>
                            <div className='d-flex'><input type="time" class="time form-control form-control-sm"/></div>
                        </div>
                       {/*  */}
                       <div class="col-sm-12 mt-3"><label for="fri" className='font-weight-bold main-clr'>Night Shift</label></div>    
                        <div class="form-group col-sm-12">
                            <label for="" className='font-weight-bold'>Check-In Timing</label>
                            <div className='d-flex'><input type="time" class="time form-control form-control-sm mr-2"/><input type="time" class="time form-control form-control-sm"/></div>
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="" className='font-weight-bold'>Check-Out Timing</label>
                            <div className='d-flex'><input type="time" class="time form-control form-control-sm"/></div>
                        </div>
                       {/*  */}
                        <div class="form-group col-12">
                            <button  class="btn button btn-sm" value='update' id='settings_update'>Update<BsCursorFill className='ml-1'/></button>
                        </div> 
                        <div className='alert-box' id='alert'>
                          <div className="alert">
                        <span className='alert-msg mr-3'>Time Table Updated Successfully.</span>
                        <BsX style={{fontSize:"26px",cursor:'pointer'}} onClick={this.alert}/>
                                </div>
                          </div>                  
            </form>
            </div>
        </div>

          {/*  */})
          </>
        )
    }
    componentDidMount()
        {
                
                const show=async ()=>{
                    document.querySelector(".settings").classList.toggle("settings-show");
                    let form=document.getElementById("settings_form")
                    let elements=form.elements;
                    const data=await fetch('/settings',{method:'GET', headers:{'Content-Type':'application/json'} })
                    let res=await data.json();
                    console.log(res)
                    res=res.message;
                    elements[0].value=res.morning[0][0];
                    elements[1].value=res.morning[0][1];
                    elements[2].value=res.morning[1];
                    elements[3].value=res.evening[0][0];
                    elements[4].value=res.evening[0][1];
                    elements[5].value=res.evening[1];
                    elements[6].value=res.night[0][0];
                    elements[7].value=res.night[0][1];
                    elements[8].value=res.night[1];
                }
                document.getElementsByClassName("settings-close")[0].addEventListener("click",show);
                document.getElementById("settings").addEventListener("click",show);
                const settings=async (e)=>
                {
                    e.preventDefault()
                    let form=document.getElementById("settings_form")
                    let elements=form.elements;
                    const json={
                        morning:[[elements[0].value,elements[1].value],elements[2].value],
                        evening:[[elements[3].value,elements[4].value],elements[5].value],
                        night:[[elements[6].value,elements[7].value],elements[8].value],
                    }
                    const data=await fetch('/settings',{method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(json) })
                   const res=await data.json();
                    this.alert();
                }
                document.getElementById("settings_update").addEventListener("click",settings);
                
        }
}

