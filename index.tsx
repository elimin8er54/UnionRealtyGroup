import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Login from "./components/admin/Login";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./components/body/Landing";

import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <ScrollToTop>
        <Switch>
        <Route exact path="/" component={Landing} />
          <Route exact path="/admin/" component={Login} />
          <Route exact path="/*">
            <Header />
           
            <div className="container">
            
              <Body />
            </div>
           
            <Footer />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
