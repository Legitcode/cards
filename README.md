# Legit-Cards

A simple React component for easily creating the Card component from Thoughbot's Refills.

##Usage

```js
import React from 'react';
import { Card, Header, Image, Copy } from 'legit-cards';

require('legit-cards/lib/css/default');

export default class MyComponent extends React.Component {
  render() {
    return (
      <Card className='my-card'>
        <Header className='my-custom-header-class'>
          <h2>This is a great card</h2>
        </Header>

        <Image className='my-custom-image-class'>
          <img src='https://foo.bar.com/amazing-image.png' />
        </Image>

        <Copy className='my-custom-copy-class'>
          <p>Lorem ipsum bacon</p>
        </Copy>
      </Card>
    );
  }
}
```
