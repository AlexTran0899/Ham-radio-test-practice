import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState  } from 'react';
import Homepage from "./Components/homepage";
import ClassesPage from "./Components/eachClass"
import Questions from './Components/questions'
import Nav from "./Components/nav"
import { UserContext } from "./UserContext";

function App() {
  const [value, setValue] = useState('hello');

  return (
    <div className="App">
      <UserContext.Provider value={{ value, setValue }}>
        <Router>
          <Nav />
          <Switch>
            {/* <Route path="/SignIn" component={SignIn} /> */}
            <Route path="/questions" component={() => <Questions/>} />
            <Route path="/AmateurExtra" component={() => <ClassesPage class={'AmateurExtra'} />} />
            <Route path="/General" component={() => <ClassesPage class={'General'} />} />
            <Route path="/Technician" component={() => <ClassesPage class={'Technician'} />} />
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Router>
      </UserContext.Provider>


    </div>
  );
}

export default App;