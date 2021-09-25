import LoginComp from '../pages/Login'
import MenuComp from '../pages/Menu'
import SignUpComp from '../pages/SignUp'
import {Switch,Route}from 'react-router-dom'

function MainComp() {

  return (
    <div className="Main">
      <Switch>
        <Route exact path="/" component={LoginComp}/>
        <Route  path="/menu" component={MenuComp}/>
        <Route  path="/signup" component={SignUpComp}/>
      </Switch>
    
    </div>
  );
}

export default MainComp;
