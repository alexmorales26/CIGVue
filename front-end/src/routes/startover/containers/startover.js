import React,{Component} from 'react';


const fileReader = new FileReader();
fileReader.onload = handleFile;

const  test_click = () => (
 console.log('click')
);

const handleFile = (e) => {
  const content = fileReader.result;
  console.log('file content',  content)
  // You can set content in state and show it in render.
}

const handleChangeFile = (file) => {
  fileReader.readAsText(file);
}
export default class StartOver extends Component{
    render(){
        return (
              <div>
            <button  onClick={test_click} type="button">Click Me!</button>
            <input onChange={(e)=>handleChangeFile(e.target.files[0])}type="file" name="myFile"/>



              </div>
        );
    }
}
