import React from 'react';

export class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={"devicons devicons-" + this.props.icon} title={this.props.title || ''}></span>
    );
  }

}
