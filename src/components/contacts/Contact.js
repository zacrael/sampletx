import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Contact extends Component {
  state = {
    showInfo: true
  };
  showDetails = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  onDelete = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.showDetails}
                  className="fas fa-hand-point-down"
                />
                <i
                  onClick={this.onDelete.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />

                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      float: "right",
                      cursor: "pointer",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  ></i>
                </Link>
              </h4>
              {showInfo === true ? (
                <ul className="List-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
