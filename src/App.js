import React from "react";
import "./styles/styles.scss";
import Nav from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Registration from "./components/registration/registration.jsx";
import Footer from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForms from "./components/register/register";

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
            <Switch>
              <Route path="/" exact component={Home} />
              <div>
                <Route path="/about" component={Home} />
                <Route path="/events" component={Home} />
                <Route path="/advisory" component={Home} />
                <Route path="/sponsers" component={Home} />
                <Route path="/team" component={Home} />

                <Route path="/registration" component={RegisterForms} />
                
                <Route path="/quickLinks" component={Home} />
              </div>
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
