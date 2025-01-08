import  {  Component, ReactNode } from "react";

type propType = {
  name: string;
  age: number;
  sub: boolean;
  message: string;
};
type stateType = {
  sub: boolean;
  message: string;
};

class HomeClass extends Component<propType, stateType> {
  // what is <propType, stateType> constact here
  constructor(props: propType) {
    super(props);
    this.state = {
      sub: this.props.sub,
      message: this.props.message,
    };
  }

  onsubs() {
    this.setState({
      sub: true,
      message: "subscribed ;)",
    });
  }

  onUnsubs() {
    this.setState({
      sub: false,
      message: "subscribe back ;)",
    });
  }
  render(): ReactNode {
    return (
      <div>
        <h1>
          Hi {this.props.name}, you're {this.props.age}
        </h1>
        <h1>{this.state.message}</h1>
        {this.state.sub ? (
          <button onClick={() => this.onUnsubs()}></button>
        ) : (
          <button onClick={() => this.onsubs()}>Subscribe</button>
        )}
      </div>
    );
  }
}

export default HomeClass