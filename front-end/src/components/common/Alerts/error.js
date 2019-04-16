import React, { Component } from 'react';
import { Alert } from 'reactstrap';

export default class ErrorAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.fileUploadErrorAlert
        }
        this.onDismiss = this.onDismiss.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            visible:nextProps.fileUploadErrorAlert
        })
    }
    onDismiss() {
        this.props.setFileUploadErrorStatus(false);
    }
    render() {
        return (
            <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                Please select a CSV file before uploading!
            </Alert>
        )
    }
}