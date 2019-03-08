
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FileUpload from './file_upload.js'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
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


           <FileUpload onUploadComplete={this.closeModal}/>

          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default ModalExample;
