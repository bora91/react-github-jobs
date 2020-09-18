import React from 'react';
import {Container, Segment} from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Segment.Group>
        <Segment>Container1</Segment>
        <Segment>Container2</Segment>
        <Segment>Container3</Segment>
      </Segment.Group>
    </Container>
  );
}

export default App;
