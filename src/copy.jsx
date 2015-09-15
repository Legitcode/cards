import React from 'react';

export default class Copy extends React.Component {
  render() {
    return (
      <div className={`card-copy ${this.props.className}`}>
        { this.props.children }
      </div>
    );
  }
}
