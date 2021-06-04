import React from "react";
import "./styles/styles.scss";
import Nav from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Registration from "./components/registration/registration.jsx";
import CTF from "./components/register/forms/CTF.jsx";
import Hackathon from "./components/register/forms/hackathon.jsx";
import Infomaze from "./components/register/forms/infomaze.jsx";
import SpeciaWar from "./components/register/forms/speciawar.jsx";
import Vividly from "./components/register/forms/vividly.jsx";
import Footer from "./components/footer/footer.jsx";
import RegisterForms from "./components/register/register";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";


class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <div className="nav">
            <Nav />
          </div>

          <div>
            <AnimatedSwitch
              atEnter={{ opacity: 0, transition: "20ms ease-in" }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route path="/" exact component={Home} />

              <div>
                <Route path="/about" component={Home} />
                <Route path="/events" component={Home} />
                <Route path="/advisory" component={Home} />
                <Route path="/sponsers" component={Home} />
                <Route path="/team" component={Home} />
                <Route path="/registration" component={Registration} />
                <Route path="/quickLinks" component={Home} />
                <Route path="/hackathon" component={Hackathon} />
                <Route path="/ctf" component={CTF} />
                <Route path="/informaze" component={Infomaze} />
                <Route path="/speciaWar" component={SpeciaWar} />
                <Route path="/vividly" component={Vividly} />
              </div>
            </AnimatedSwitch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
