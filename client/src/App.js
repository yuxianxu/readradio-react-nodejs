import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./Homepage";
import MyNotes from "./Pages/MyNotes/MyNotes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch> 
          <Route path="/" exact component={Homepage}/>
          <Route path="/mynotes" component={MyNotes}/>
          {/* <Route exact path="/support" component={Support}/> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
