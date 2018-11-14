import React from "react";
import Tune from "./Tune";
class TunesList extends React.PureComponent {
  state = {};
  render() {
    return (
      <div className="row">
        {this.props.tunesList.map((tune, index) => (
          <div key={index} className="col">
            <Tune tune={tune} />
          </div>
        ))}
      </div>
    );
  }
}

export default TunesList;
