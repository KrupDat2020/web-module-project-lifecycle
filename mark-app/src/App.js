import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    user: "KrupDat2020",
    followers: [],
  };

  render() {
    return (
      <div className="App">
        <h1>KrupDat2020's GitHub Page</h1>
        <form>
          <input />
          <button>Find Followers</button>
        </form>
      </div>
    );
  }
}

export default App;
