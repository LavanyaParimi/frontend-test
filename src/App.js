import React, { Component } from "react";
import "./App.css";
import { getTunes } from "./TunesService";
import TunesList from "./TuenslList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      size: 15,
      tunesList: undefined,
      allTunes: undefined,
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    let res = await getTunes();
    let tunes = [...res.feed.results];
    this.setState({
      isLoading: false,
      tunesList: tunes.slice(0, this.state.size),
      allTunes: res.feed.results
    });
  }

  handleNext = () => {
    let pageNo = this.state.pageNo;
    if (pageNo * this.state.size >= this.state.allTunes.length) {
      pageNo = 1;
    }
    let allTunes = [...this.state.allTunes];
    let from = pageNo * this.state.size;
    let nextList = allTunes.slice(from, from + this.state.size);
    pageNo = pageNo + 1;
    this.setState({
      tunesList: nextList,
      pageNo: pageNo
    });
  };

  handlePrev = () => {
    let pageNo = this.state.pageNo;
    if (pageNo === 0 || pageNo === 6) {
      pageNo = 5;
    }
    let allTunes = [...this.state.allTunes];
    let from = pageNo * (this.state.size - 1);
    pageNo = pageNo - 1;
    this.setState({
      tunesList: allTunes.slice(from, from + this.state.size),
      pageNo: pageNo
    });
  };

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
          {this.state.tunesList && (
            <React.Fragment>
              <h2> Apple Music New Releases for mm/dd/yyyy </h2>
              <TunesList tunesList={this.state.tunesList} />
              <div className="pagination">
                <button className="btn" onClick={this.handlePrev}>
                  Previous
                </button>
                <button className="btn btn-next" onClick={this.handleNext}>
                  Next
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
