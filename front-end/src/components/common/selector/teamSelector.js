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

  componentWillReceiveProps(e){
    this.setState({
      pieData: e
    })
  }
  
  selectorHandle(e){
    console.log(e);
   
  }

  
  render(){
    const { teamNames } = this.props;
   
    return(
      <div>
        <Select options={teamNames} onChange={this.selectorHandle} />
      </div>
    )
  }

}
