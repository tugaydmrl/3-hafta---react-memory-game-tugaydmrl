import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardGame from "./components/CardGame/CardGame";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Play</Link>
            </li>
            <li>
              <Link to="/result">Result</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/game">
            <CardGame />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
