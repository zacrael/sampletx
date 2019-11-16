import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";
class Clients extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              <h1 className="display-10 mb-2 text-center">
                <span className="text-info ">Client List</span>
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Clients;
