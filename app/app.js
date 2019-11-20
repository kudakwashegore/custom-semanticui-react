import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button, Segment, Label } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less'; // if you do this once in your entry point file, you don't have to do it again in other files.

ReactDOM.render(
<Segment>
  <p>Hello semantic-ui button with icon</p>
  <Button as='div' labelPosition='right'>
    <Button>
      <Icon name='heart' />
      Like
    </Button>
    <Label as='a' basic color='red' pointing='left'>
      2,048
    </Label>
  </Button>
</Segment>,
document.getElementById('appRoot'),
);
