import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registeration/Registration';

const Routing = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Registration}></Route>
            <Route path = "/login" component={Login}></Route> 
            <Route path = "/dashboard" component={Dashboard}></Route> 
       
          </Switch>
        </div>
      </Router>
    );
  }

  export default Routing;