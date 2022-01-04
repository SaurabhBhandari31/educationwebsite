import react from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Conatact';
import Navabar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
     <>
     <Navabar/>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
        </Switch>

     </>
  );
}

export default App;
