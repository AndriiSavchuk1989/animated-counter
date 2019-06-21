import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.styled";

import "./styles.css";

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, start: false, disabled: false };
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.revert = this.revert.bind(this);
  }

  revert() {
    this.setState({ start: !this.state.start, disabled: !this.state.start });
  }

  increaseCounter() {
    this.setState({
      count: this.state.count + 1,
      start: !this.state.start,
      disabled: !this.state.start
    });
    console.log(this.state);
    const timer = setTimeout(this.revert, 500);
    timer();
    console.log(this.state);
  }

  decreaseCounter() {
    this.setState({
      count: this.state.count - 1,
      start: !this.state.start,
      disabled: !this.state.start
    });
    console.log(this.state);
    const timer = setTimeout(this.revert, 500);
    timer();
    console.log(this.state);
  }

  render() {
    console.log("start animation___", !this.state.start);
    return (
      <Counter.Wrapper>
        <Counter.DecreaseButton
          disabled={this.state.disabled}
          onClick={this.decreaseCounter}
        >
          -
        </Counter.DecreaseButton>
        <Counter.ViewBoard>
          <Counter.View animantionStart={!this.state.start}>
            {this.state.count}
          </Counter.View>
        </Counter.ViewBoard>
        <Counter.IncreaseButton
          disabled={this.state.disabled}
          onClick={this.increaseCounter}
        >
          +
        </Counter.IncreaseButton>
      </Counter.Wrapper>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterComponent />, rootElement);