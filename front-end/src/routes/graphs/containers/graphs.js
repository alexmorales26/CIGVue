import React,{Component} from 'react';
import { Container, Row, Col,Image } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardHeader, Button } from 'reactstrap';
import '../../../assets/css/graph.css'
import MixedBarPlot from '../../../components/dashboard/UI/stackedGraph/mixedBarPlot';

//src/components/dashboard/UI/stackedGraph/mixedBarPlot.js
export default class Graphs extends Component{
    render(){
        return (
          <div>
      <Container>
      <Row>
      <Col sm>
          <Card>
          <CardHeader> Graph 1 </CardHeader>
          <CardBody>
            <MixedBarPlot />
            <Button> Extend Graph </Button>
                </CardBody>
            </Card>
</Col>
<Col sm>
</Col>

<Col sm>
            <Card>
            <CardHeader> Graph 2 </CardHeader>
                <CardBody>
              <MixedBarPlot />
              <Button> Extend Graph </Button>
            </CardBody>
              </Card>
              </Col>
              <Col sm>
              </Col>
          </Row>
</Container>
          </div>
        );

    }
}
