import React from 'react';

export default class Card extends React.Component {
  static propTypes = {
    className: React.PropTypes.string
  }

  render() {
    return (
      <div className={`card ${this.props.className}`}>
        { this.props.children }
      </div>
    );
  }
}
