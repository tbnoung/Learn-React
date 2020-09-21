import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Dashboard from '../components/Dashboard'
import AddPage from '../components/Add'
import EditPage from '../components/Edit'
import HelpPage from "../components/help";
import NotFound from "../components/NotFound";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddPage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter
