import react from 'react';
import './show emp data.css'
import '../node_modules/antd/dist/antd.css';
import {CloseCircleTwoTone} from '@ant-design/icons';
import {Button,Title } from 'antd'
export default class ShowEmpData extends react.Component {
    render()
    {
        return (
            <div className="row justify-content-center emp-table">
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
        document.getElementsByClassName("close")[0].addEventListener("click",()=>{document.querySelector(".emp-form").classList.toggle("emp-form-show");});
        
       // document.getElementsByClassName("show_emp_attend")[0].addEventListener("click",role_form_show);       
      //  document.getElementById("cancel_role").addEventListener("click",role_form_show);       
    }
    
}