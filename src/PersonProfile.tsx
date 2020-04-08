import * as React from 'react';   //Import statements at top. The 'react' file is in node_modules.
// * means import all as React from 'react'
import './PersonProfile.css';

//Contract between what this component will expect other components that use this component
//to provide to this component.
//Think of this as similar to function arguments.
export interface IPersonProfileProps {        
}

//This is a class. It can have public methods and private methods
//render must always be public
//App is the default name given by tsrcc, so need to change this, here PersonProfile
//extends gives PersonProfile all the functionality of React.Component class (Inheritance).
//IPersonProfileProps is the interface of how the props that are passed out must be passed in at the next level.
//It has export because it is in its own file and the class needs to be accessible to other files.
export default class PersonProfile extends React.Component<IPersonProfileProps> {
  public render() {
    return (
      <React.Fragment>
          <h1>Person Name</h1>
          <p>Person Birthday</p>
          <p>Person Pet Name</p>
      </React.Fragment>
    );
  }

}
