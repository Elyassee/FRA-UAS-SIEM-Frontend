
import './App.css';
import  Sidebar  from "./components/Sidebar";
import  About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Charts from "./components/Charts";
import  Notification from "./components/Notification";
import  Setup from "./components/Setup";

function App() {
  return ( 
    <Router>
    <div className="App"> 
    <Sidebar />
    <Switch>
    <Route path='/about' component={About} />
    <Route path='/' exact component={Charts} />
    <Route path='/notification' component={Notification} />
    <Route path='/setup' component={Setup} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
