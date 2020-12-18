import React from "react";
import Deal from "./body/Deal";

import { Route } from "react-router-dom";

const Body = () => {
  return (
    <div className="pages">
      <Route exact path="/admin/deal" component={Deal} />
    </div>
  );
};

export default Body;
