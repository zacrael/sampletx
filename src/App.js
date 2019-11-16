import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";
import "./App.css";
import Clients from "./components/contacts/Clients";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./components/context";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="sample context" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Clients} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
