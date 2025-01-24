import  {  Component, ReactNode } from "react";

type propType = {
  name: string;
  age: number;
  sub: boolean;
  message: string;
};
type stateType = {
  name: string;
  age: number;
  sub: boolean
  message: string
};

class HomeClass extends Component<propType, stateType> {
  // what is <propType, stateType> constact here
  constructor(props: propType) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
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
          Hi {this.state.name}, you're {this.state.age}
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