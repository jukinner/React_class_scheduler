import React, { Component } from 'react';

class Arrow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
  }

  toggleArrow = function() {
    if(this.state.status) {
      document.getElementById('arrow').classList.remove('arrow-closed');
    } else {
      document.getElementById('arrow').classList.add('arrow-closed');
    }
    this.setState({ status: !this.state.status })
  }.bind(this);


  render() {
    return ( 
        <a id="arrow" onClick={() => this.toggleArrow()} className={`${this.props.className} arrow`}></a>
      )
  }
}

export default Arrow;