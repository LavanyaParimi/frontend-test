import React, { Component } from "react";
import "./App.css";
import { getTunes } from "./TunesService";
import TunesList from "./TuenslList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTunes: undefined,
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    let res = await getTunes();
    this.setState({
      isLoading: false,
      allTunes: res.feed.results
    });
  }

  render() {
    return (
      <div className="main-container">
        {this.state.isLoading && (
          <p className="loading">
            <span>Loading data... </span>
            <br />
            <span>Please wait</span>
          </p>
        )}
        <div className="container">
          {this.state.allTunes && (
            <React.Fragment>
              <h2> Apple Music New Releases for mm/dd/yyyy </h2>
              <TunesList tunesList={this.state.allTunes} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
