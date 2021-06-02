import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registeration/Registration';
import Routing from './Routes/Routing';

function App() {
  return (
    <BrowserRouter> <Routing/> </BrowserRouter>
  );
}

export default App;