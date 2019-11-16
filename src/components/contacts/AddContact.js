import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: " Name is Required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: " Email is Required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: " Phone is Required" } });
      return;
    }
    const newContact = {
      name,
      email,
      phone
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({ name: "", email: "", phone: "" });
    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;
    // let i = 1;
    // for (i; i <= 100; i++) {
    //   if (i % 3 === 0) {
    //     console.log(i, "fizz");
    //   } else if (i % 5 === 0) {
    //     console.log(i, "buzz");
    //   }
    // }
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header text-center">Add Client</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Client"
                    className="btn btn-info btn-block "
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
