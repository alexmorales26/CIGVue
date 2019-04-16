import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ErrorAlert from '../../common/Alerts/error';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      modal: this.props.fileUploadModalStatus,
      errorStatus: this.props.fileUploadErrorAlert
    };
    this.toggle = this.toggle.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      errorStatus: nextProps.fileUploadErrorAlert
    })
  }
  handleFile(data) {
    this.setState({
      selectedFile: data
    });
  }
  handleUpload() {
    let { selectedFile } = this.state
    if (selectedFile === null) {
      this.props.setFileUploadErrorStatus(true);
    }
    else {
      this.props.setFile(selectedFile);
      this.props.uploadFile();
      this.setState({
        modal: false
      })
      this.props.setFileUploadModalStatus(this.state.modal);
    }

  }
  toggle() {
    if (this.state.selectedFile === null) {
      this.setState(prevState => ({
        modal: prevState.modal
      }));
    }
    else {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
      this.props.setFileUploadModalStatus(this.state.modal);
    }
  }
  render() {
    const { modal } = this.state;
    return (
      <div>
        <Modal isOpen={modal}
          keyboard={false}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader> Upload JIRA CSV Export File</ModalHeader>
          <ModalBody>
            <div className="file-upload">
              <CSVReader
                cssClass="react-csv-input"
                label="Upload CSV File"
                onFileLoaded={this.handleFile.bind(this)}
              />
              <ErrorAlert {...this.props} />
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
