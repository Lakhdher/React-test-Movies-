import React, { Component } from "react";

class Counter extends Component {


  render() {
    let classes = "badge ù-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return (
      <div className="container">
        <span className={classes}>{this.formatCount()}</span>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={()=>this.props.onIncrement(this.props.id)}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          disabled={this.props.value === 0 ? true : false}
          onClick={()=>this.props.onDecrement(this.props.id)}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    return this.props.value === 0 ? "Zero" : this.props.value;
  }
}

export default Counter;
