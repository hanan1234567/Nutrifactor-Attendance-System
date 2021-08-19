import react from 'react';
import './add role.css'
import '../node_modules/antd/dist/antd.css';
import {CloseCircleTwoTone} from '@ant-design/icons';
import {Button,Title } from 'antd'
export default class ShowEmpData extends react.Component {
    render()
    {
        const postRoleData=async (e)=>
       {
           
            e.preventDefault();
            const elements=document.getElementById("role_form").elements;
            const json={role:elements[0].value,description:elements[1].value}
            let resources=['employee','team','lead'];
            var temp_arr=[];
            for(let i=0;i<resources.length;i++)
              {
                for(let j=0;j<document.getElementsByClassName(`${resources[i]}-check`).length;j++)
                  temp_arr[j]=document.getElementsByClassName(`${resources[i]}-check`)[j].checked;
                json[`${resources[i]}`]=temp_arr;
                temp_arr=[];
              }
              console.log(JSON.stringify(json))
            const data=await fetch('/role',{
                method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(json)
            })
            const res=await data.json();
        //    document.getElementById("role_msg").innerHTML=res.message;
        }
        const checks=()=>
        {

        }
        return (
            <div className="row justify-content-center role-form">
            <div className="col-md-6 py-2">
                <div className="my-2">
                      <CloseCircleTwoTone className='close m-0 p-0 text-danger' style={{fontSize:'25px'}}/>
                </div>
                <table className='table'>
                    <tr>
                        <th>Name</th><th>Break-In</th><th>Break-Out</th>
                    </tr>
                </table>
            </div>
        </div>
        )
    }
    componentDidMount()
    {
        const role_form_show=()=>{
            document.querySelector(".role-form").classList.toggle("role-form-show");
        }
        document.getElementsByClassName("close")[0].addEventListener("click",role_form_show);
       // document.getElementsByClassName("show_emp_attend")[0].addEventListener("click",role_form_show);       
      //  document.getElementById("cancel_role").addEventListener("click",role_form_show);       
    }
    
}