import React from 'react'
import axios from "axios"
import './App.css'
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout.js"

function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;
