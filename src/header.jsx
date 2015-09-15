import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className={`card-header ${this.props.className}`}>
        { this.props.children }
      </div>
    );
  }
}
