import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap';
import "./styles/bootstrap.min.css";
import "./styles/components_styles.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Country from "./components/Country";
import countriesData from "./constants/countries";

function App() {
  return (
    <div className="root">
      <Router>
        <Switch>
          <Route path="/:name">
            <Country />
          </Route>
          <Route path="/">
            <Main countries={countriesData} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
