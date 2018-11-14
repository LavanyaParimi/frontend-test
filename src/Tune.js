import React from "react";
class Tune extends React.PureComponent {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={this.props.tune.artworkUrl100} alt={this.props.tune.name} />
        <div className="text-container">
          <p>{this.props.tune.name}</p>
          <p>{this.props.tune.artistName}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Tune;
