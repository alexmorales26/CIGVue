import React, {Component, Fragment} from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardHeader, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MixedBarPlot from '../../../components/dashboard/UI/stackedGraph/mixedBarPlot';

export default class GraphCard extends Component {
  constructor(props) {
    super(props);

    this.state = { isModalOpen: false };

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
            {children}
            <Button onClick={this.toggle}>Extend Graph</Button>
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
