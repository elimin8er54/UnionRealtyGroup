import React from 'react';
import About from "./body/About";
import Home from "./body/Home";
import Sales from "./body/Sales";
import Contact from "./body/Contact";
import Leasing from "./body/Leasing";

import PropertyManagement from "./body/PropertyManagement";
import { Route } from "react-router-dom";

const Body = () => {

  return (

    <div className="pages">
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route
        exact
        path="/leasing"
        component={Leasing}
      />
      <Route
        exact
        path="/sales"
        component={Sales}
      />
 
      <Route
        exact
        path="/propertymanagement"
        component={PropertyManagement}
      />
      <Route
        exact
        path="/contact"s
        component={Contact}
      />




    </div>

  );


}

export default Body;