import React from 'react';
import { Card, Image, Header, Copy } from '../src/cards';

require('../src/css/default.css');

export default class Basic extends React.Component {
  render() {
    return (
      <Card>
        <Header>
          <h1>Wow this is amazing</h1>
        </Header>

        <Image>
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-3.png" alt="" />
        </Image>

        <Copy>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Copy>
      </Card>
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
