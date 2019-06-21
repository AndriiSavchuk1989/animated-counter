import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.styled";
import View from "./View.styled";

class ViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, animation: true };
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
  }

  onMouseOverHandler() {
    this.setState({ animation: !this.state.animation });
  }

  render() {
    return (
      <View.Wraper onMouseOver={this.onMouseOverHandler}>
        <View.Counter animation={this.state.animation}>
          {this.state.count}
        </View.Counter>
      </View.Wraper>
    );
  }
}

class CounterComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.revert = this.revert.bind(this);
  }

  componentDidMount() {
    this.setState({ count: 0, start: false, disabled: false });
  }

  revert() {
    console.log("state before revert___", this.state);
    this.setState({ start: !this.state.start, disabled: !this.state.start });
    console.log("state after revert___", this.state);
  }

  increaseCounter() {
    this.setState({
      count: this.state.count + 1,
      start: !this.state.start,
      disabled: !this.state.start
    });
    const timer = setTimeout(this.revert, 1500);
    timer();
  }

  decreaseCounter() {
    this.setState({
      count: this.state.count - 1,
      start: !this.state.start,
      disabled: !this.state.start
    });
    const timer = setTimeout(this.revert, 1500);
    timer();
  }

  render() {
    const { start } = this.state;
    console.log("start___", start);
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
