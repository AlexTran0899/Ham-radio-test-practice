import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./Components/homepage";
import ClassesPage from "./Components/class"
import Nav from "./Components/nav"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      <Switch>
        {/* <Route path="/SignIn" component={SignIn} /> */}
        <Route path="/AmateurExtra" component={()=> <ClassesPage class={'AmateurExtra'}/>} />
        <Route path="/General" component={()=> <ClassesPage class={'General'}/>} />
        <Route path="/Technician" component={()=> <ClassesPage class={'Technician'}/>} />
        <Route exact path="/" component={Homepage} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;