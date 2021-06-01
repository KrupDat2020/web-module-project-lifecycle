import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/user")
      .then((resp) => {
        this.setState({
          users: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
handleChange = (e) => {
  this.setState({
    followers: e.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();

  axios.get('')
  .then(resp => {
    this.setState({
      users: resp.data
    });
  })
  .catch(err => {
    console.log(err);
  });
}

  render() {
  return(<div className='App'>
  <h1>Mark's GitHub Page</h1>
  <form on submit = {this.handleSubmit}>
    <input value= {this.state.user} onChange= {this.handleChange}/>
    <button>Get Followers</button>
  </form>
  </div>
  )
}

export default App;
