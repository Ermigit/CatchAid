import React, { Component } from "react";

type sateType = {
  count: number;
};

export class Counter extends Component<{}, sateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increament() {
    this.setState(
      {
        // how we implemrnt 'prevSate' as on video 11 (12:30)
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.increament()}>increament</button>
      </div>
    );
  }
}

export default Counter;
