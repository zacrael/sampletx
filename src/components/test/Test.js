import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    userID: "",
    body: "",
    id: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          userID: data.userId,
          id: data.id,
          body: data.body
        })
      );
  }
  render() {
    const { title, userID, id, body } = this.state;
    console.log(title, userID, id, body);
    return <div></div>;
  }
}
export default Test;
