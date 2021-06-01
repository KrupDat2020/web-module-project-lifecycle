import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    githubInfo: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mark-krupinsky")
      .then((resp) => {
        this.setState({
          githubInfo: resp.data.message,
          user: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount(prevProps, prevState) {
    if (prevState.githubInfo !== this.state.githubInfo) {
      axios
        .get("https://api.github.com/users/")
        .then((resp) => {
          this.setState({
            githubInfo: resp.data.message,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleFormChange = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.user}'`)
      .then((resp) => {
        this.setState({
          githubInfo: resp.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub User Search</h1>

        <form onSubmit={this.handleFormSubmit}>
          <input value={this.state.user} onChange={this.handleFormChange} />
          <button>Get Users</button>
        </form>
        <div className="users"></div>
      </div>
    );
  }
}

export default App;
