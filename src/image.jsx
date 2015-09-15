import React from 'react';

export default class Image extends React.Component {
  render() {
    return (
      <div className={`card-image ${this.props.className}`}>
        { this.props.children }
      </div>
    );
  }
}
