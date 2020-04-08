import React, { Fragment } from 'react';
import './App.css';
import {Button, Icon, Card, Image} from 'semantic-ui-react';  //NB you can put multiple objects for import!
// import {Icon} from 'semantic-ui-react';
function App() {

  return (
    <React.Fragment>
      <Fragment>
        <h1>This is a header!</h1>
        <p>Paragraph!<em>Emphasized text!</em></p>
        <button className="SpecialButton">I know what a button is!</button>
        <button>Another button!</button>
        <p>Proof!</p>
        <Button color='red'>
        <Icon name='heart' />
        Like
        </Button>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='../public/img/favicon.png'
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Fragment>
    </React.Fragment>
  );




}

export default App;
