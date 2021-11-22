import Panel from './panel'
import LoginForm from './login'
import { Switch,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {loginStatus} from './features/login/loginSlice'
import { Result } from 'antd';
import './App.css'
function App(){
  const loginCheck=useSelector((state)=>state.login.value)
  const dispatch=useDispatch();
  dispatch(loginStatus())
  return (
     <>
       <Switch>
         {/* <Route exact path='/'>
         {(loginCheck)?<Panel/>:<LoginForm user='admin'/>}
         </Route> */}
         <Route path='/'>
         {(loginCheck)?<Panel/>:<LoginForm/>}
         </Route>
         <Route path={'/*'}>
            <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist."/>
          </Route>
       </Switch>
     </>
  )
      
}
export default App;
