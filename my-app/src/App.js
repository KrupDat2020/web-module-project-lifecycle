import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    githubInfo: [],
  };

  componentDidMount() {
    axios
      .get("")
      .then((resp) => {
        this.setState({
          githubInfo: resp.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount(prevProps, prevState) {
    if (prevState.githubInfo !== this.state.githubInfo) {
      axios
        .get("")
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

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
