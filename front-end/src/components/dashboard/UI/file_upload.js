import React, { Component } from 'react';
import {Button} from 'reactstrap'
import CSVReader from 'react-csv-reader';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  handleFile(data){
    this.setState({
      selectedFile: data
    });
  }
  handleUpload(){
    let {selectedFile} = this.state
    this.props.setFile(selectedFile);
    //this.props.uploadFile(); this is the API call still under development 
  }

  render() {
    return (
      <div className="file-upload">
        <CSVReader
        cssClass="react-csv-input"
          label="Upload CSV File"
          onFileLoaded={this.handleFile.bind(this)}
        />
      <Button 
        color="primary"
        onClick={this.handleUpload.bind(this)}
      > 
        Upload
      </Button>
      </div>
    );
  }
}
