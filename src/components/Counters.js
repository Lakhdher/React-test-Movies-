import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div className="container">
        <button className="btn btn-primary-sm m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
