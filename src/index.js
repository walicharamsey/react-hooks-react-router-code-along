// .src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
      <Home />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);