import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home";
import UserDetails from "./components/UserDetails";
import RepoDetails from "./components/RepoDetails";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                <Route path="/about">
                    <About/>
                </Route>
                  <Route exact path="/users/:id">
                    <UserDetails/>
                  </Route>
                <Route path="/users/:id/:repo">
                    <RepoDetails/>
                </Route>
                {/*  <Route path="*">*/}
                {/*    <Error/>*/}
                {/*  </Route>*/}
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
