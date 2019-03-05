import React,{Component} from 'react';


class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: null,
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.onUploadClick = this.onUploadClick.bind(this);
    this.fileReader = new FileReader();
    this.fileReader.onload = e => console.log(e.target.result);
  }

  onFileChange(e) {
    this.setState({
      filename: e.target.files[0],
    });
  }

  onUploadClick(e) {
    /* consider readAsBinaryString for uploading images */

    if(!this.state.filename){
      return window.alert("Please choose a File!");
    }
    this.fileReader.readAsText(this.state.filename);
  }

  render() {
    return (
      <div className="file-upload">
        <input type="file" onChange={this.onFileChange} />
        <button onClick={this.onUploadClick}>Upload</button>
      </div>
    );
  }
}

export default FileUpload;
