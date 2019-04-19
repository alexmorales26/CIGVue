import React, { Component } from 'react'
import Select from 'react-select'

export default class Selector extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedUser: undefined
    }
    this.selectorHandle = this.selectorHandle.bind(this);
  }

  selectorHandle(e){
    console.log(e)
  }

  render(){
    const { teamNames } = this.props;
    return(
        <Select options={teamNames} onChange={this.selectorHandle} />
    )
  }
}
