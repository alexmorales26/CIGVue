
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import API from '../../../api'

class LogInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const emailValue = form.email_field.value;
    const passwordValue = form.password_field.value;

    // send the email and password to the API to trigger a login
    this.props.storeCredentials({email: emailValue, password: passwordValue});
    this.props.attemptLogin();
  }

  render() {
    return (
      <div>
        <div onClick={this.toggle}>Login</div>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.handleFormSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email_field"  placeholder="email address" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="password_field" />
            </FormGroup>
            <Alert color="danger" isOpen={!!this.props.loginError} fade={false}>
              {this.props.loginError}
            </Alert>
            <Button>Login</Button>
          </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LogInModal;
