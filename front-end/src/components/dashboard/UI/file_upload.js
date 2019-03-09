import React,{Component} from 'react';


export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      uploadPercentage: 0
    };
    this.onSelectFileChange = this.onSelectFileChange.bind(this);
    this.onUploadClick = this.onUploadClick.bind(this);
  }

  onSelectFileChange(e) {
    this.setState({
      selectedFile: e.target.files[0],
      uploadPercentage: 0
    });
    this.props.setFile(e.target.files[0]);
  }

  onUploadClick(e) {
    if(!this.state.selectedFile){
      return window.alert("Please choose a File!");
    }
    this.props.uploadFile();
  }

  render() {
    const {uploadPercentage} = this.state;
    return (
      <div className="file-upload">
        <input type="file" onChange={this.onSelectFileChange} />
        <button onClick={this.onUploadClick}>Upload</button>
        <div> {Math.round(uploadPercentage,2) } % </div>
      </div>
    );
  }
}
