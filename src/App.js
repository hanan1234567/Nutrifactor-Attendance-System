import Panel from './panel'
import LoginForm from './login'
import react from 'react';
import './App.css'
class App extends react.Component {
   state={login:false}
   login=()=>{
      (this.state.login)?this.setState({login:false}):this.setState({login:true})
   }
 render() {
  return (
     <>
     {(this.state.login)?<Panel login={this.login}/>:<LoginForm login={this.login}/>}
     </>
  )
            }
}

export default App;
