import React, {Component, Fragment} from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardHeader, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MixedBarPlot from '../../../components/dashboard/UI/stackedGraph/mixedBarPlot';
import Selector from '../../../components/common/selector/selector'
import NewWindow from 'react-new-window'
import FirstBarGraph from '../../../components/dashboard/Actions/firstBarGraphActions'


export default class BarGraphCard extends Component {
  constructor(props) {
    super(props);



    this.state = { isModalOpen: false };
    this.state = {showWindowPortal:false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => {
      return { isModalOpen: !state.isModalOpen };
    });
  }



  render() {
    const { title, children} = this.props;
    const { isModalOpen } = this.state;

    return(
      <Fragment>
        <Card>
          <CardHeader>{title}</CardHeader>
          <CardBody>

            {isModalOpen && (
              <NewWindow title={title}>

                <FirstBarGraph/>


                </NewWindow>
            )}

              {children}

        <Button onClick={this.toggle}>Expand Graph</Button>
          </CardBody>

        </Card>



        {/* This is one way we can do it to expand the size of the graphs
          <div style={{visibility: isModalOpen ? "visible" : "hidden", background: "white", position: "fixed", top: 0, bottom: 0, left: 0, right: 0, height: "100vh", width: "100vw", zIndex: "100"}}>
          <a onClick={this.toggle}>close this</a>
          {children}
        </div>
        */}
      </Fragment>
    );
  }
}
