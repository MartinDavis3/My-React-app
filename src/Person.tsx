import * as React from 'react';

export interface IPersonProps {
    name: string;
    callbackMethod: (callbackString: string) => string;
}

export default class Person extends React.Component<IPersonProps> {
    public greeting(): string {
        return "hello!"
}
  public render() {
    //could just have {this.props.name}
    //and {this.props.callbackMethod(":)")}
    //but can get clumsy
    //so use destructuring:
      let { name, callbackMethod} = this.props;
    return (
      <React.Fragment>
        {name}
        {callbackMethod(":)")}
      </React.Fragment>
    );
  }
}
