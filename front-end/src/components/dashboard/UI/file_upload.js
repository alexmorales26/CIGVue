import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      modal:false
    };
    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    this.setState({
      modal:false
    })
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  closeModal (){

    this.setState(() => ({
      modal: false
    }));

  }

  render() {
    return (

      <div>
        <Button color="danger" onClick={this.toggle}>popup</Button>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
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
      </ModalBody>

    </Modal>
  </div>
    );
  }
}
