import React from "react";
import "./styles/styles.scss";
import {Router} from '@reach/router'
import CTF from "./components/register/forms/CTF.jsx";
import Hackathon from "./components/register/forms/hackathon.jsx";
import Infomaze from "./components/register/forms/infomaze.jsx";
import SpeciaWar from "./components/register/forms/speciawar.jsx";
import Vividly from "./components/register/forms/vividly.jsx";



class App extends React.Component {
  render() {

    return (
      <div>
        <Router>
        <Hackathon path='/hackathon'/>
        <Infomaze path='/infomaze'/>
        <SpeciaWar path='/speciawar'/>
        <Vividly path='/vividly'/>
        <CTF path='/ctf'/>
      </Router>
      </div>
    );
  }
}

export default App;
