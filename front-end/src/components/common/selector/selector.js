import React, { Component } from 'react'
import Select from 'react-select'

export default class Selector extends Component{
  constructor(props){
    super(props);
    this.state={
      options: props.userNames,
      selectedUser: undefined
    }
    this.selectorHandle = this.selectorHandle.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      options: nextProps.userNames

    })
  }
  selectorHandle(e){
    console.log(e)
  }

  render(){
    const { options } = this.state
    return(
        <Select options={options} onChange={this.selectorHandle} />
    )
  }
}
