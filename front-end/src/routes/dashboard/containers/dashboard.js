import React,{Component} from 'react';
import '../../../assets/css/dashboard.css'
import logo from '../../../assets/img/CIG_LOGO.jpg';
import { Button, Fade } from 'reactstrap';

export default class Dashboard extends Component{

  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
}

    render(){
        return (
              <div>

            <div id="body">

            <h1 id="title">Dashboard</h1>

            </div>
          <p id="spacer"></p>
            <div>
            <div id="startButton">
                <Button color="primary" onClick={this.toggle}>Start</Button>
                </div>
                <Fade id="logoFadeIn" in={this.state.fadeIn} tag="h5" className="mt-3">
                <img src={logo} className="App-logo" alt="logo" />
                </Fade>
            </div>

            
            
        
        </div>


        );
    }

    toggle() {
      this.setState({
          fadeIn: !this.state.fadeIn
      });
  }

}
