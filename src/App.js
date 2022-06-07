import { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    number: 0,
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counterId) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((c) => c.id === counterId);
    counters[index].value++;
    this.setState(counters);
  };

  handleDecrement = (counterId) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((c) => c.id === counterId);
    counters[index].value--;
    this.setState(counters);
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <Navbar
          Number={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
