import react from 'react';
import './add form.css'
import '../node_modules/antd/dist/antd.css';
import {CloseCircleTwoTone} from '@ant-design/icons';
export default class Add extends react.Component {
    render()
    {
        const postData=async (e)=>
       {
           
            e.preventDefault();
            const elements=document.getElementById("add_form").elements;
            const name=elements[0].value;
            const password=elements[1].value;
            const role=elements[2].value;
            const data=await fetch('/registerUser',{
                method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify({name,password,role})
            })
            const res=await data.json();
            document.getElementById("msg").innerHTML=res.message;
    }
        return (
            <div className="row justify-content-center emp-form">
            <div className="col-md-6 py-2">
                <div className="my-2">
                      <CloseCircleTwoTone className='close m-0 p-0 text-danger'/>
                </div>
                <form id='add_form'>
                <div className="form-row insert-form" >
                                <div className="form-group col-md-6">
                                    <label HTMLfor="name">Name</label><input type="text" className="form-control  border" id="name" name="name" placeholder="First Name*"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label HTMLfor="pswd">Password</label><input type="password" className="form-control  border" id="pswd" name="pswd" placeholder="Password*"/>
                                </div>
                                <div class="form-group col-md-12">
                                    <label HTMLfor="role">Role</label>
                                    <select className="form-control border" name="role" id='role' multiple>
                                    </select>
                                </div>
                </div>
                 <div className="w-100"><input type="submit" className="btn btn-primary btn-sm bg-primary text-light border border-primary" onClick={postData}/></div>   
                                <small id="msg" className="text-danger"></small>
                </form>
            </div>
        </div>
        )
    }
    componentDidMount()
    {
        const emp_form_show=()=>{
            document.querySelector(".emp-form").classList.toggle("emp-form-show");
            getRoles();
        }
        document.getElementsByClassName("close")[0].addEventListener("click",emp_form_show)
        document.getElementsByClassName("add")[0].addEventListener("click",emp_form_show);
        const   getRoles=async ()=>
        {
            const data=await fetch('/role',{
                method:'get', headers:{'Content-Type':'application/json'}
            })
            const res=await data.json();
            if(res.status==500 || !res) console.log("Data not inserted")
            else {document.getElementById("role").innerHTML=res.message;}
        }
    }
    
}