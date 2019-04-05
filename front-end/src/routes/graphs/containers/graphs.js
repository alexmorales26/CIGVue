import React,{Component} from 'react';
import { Container, Row, Col,Image } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardHeader, Table, Button, ButtonGroup, Alert } from 'reactstrap';
import ReactSvgPieChart from "react-svg-piechart"
import '../../../assets/css/graph.css'
import MixedBarPlot from '../../../components/dashboard/UI/stackedGraph/mixedBarPlot';
import PieExample from '../../../components/dashboard/UI/stackedGraph/piChart';

//src/components/dashboard/UI/stackedGraph/mixedBarPlot.js
export default class Graphs extends Component{
    render(){
        return (
          <div>
            
      <Container id="container">

      <Table>
        <thead>
          <tr>
            <th><Col sm>



<Card>
<CardHeader> Graph 1 </CardHeader>
<CardBody>
  <MixedBarPlot />

  <ButtonGroup id="buttonGroup">
        <Button color="info">Hide</Button>
        <Button color="info">Save</Button>
        <Button color="info">Expand</Button>
  </ButtonGroup><p></p>

    <Alert color="success">
        This chart indicates positive increases <a href="#" className="alert-link">See more ...</a>
    </Alert>

      </CardBody>
  </Card>
</Col></th>
            <th><Col sm>

<Card>
<CardHeader> Graph 2 </CardHeader>
<CardBody>
  <MixedBarPlot />

  
  <ButtonGroup id="buttonGroup">
        <Button color="info">Hide</Button>
        <Button color="info">Save</Button>
        <Button color="info">Expand</Button>
            </ButtonGroup>
            
            <p></p>
      
      <Alert color="primary">
      This chart indicates a plateau in good ranges <a href="#" className="alert-link">See more ...</a>
      </Alert>


      </CardBody>
  </Card>
</Col>

      </th>
          </tr>
            <tr>
            <th><Col sm>
            <Card>
            <CardHeader> Graph 3 </CardHeader>
                <CardBody>
              <MixedBarPlot />

            
            <ButtonGroup id="buttonGroup">
        <Button color="info">Hide</Button>
        <Button color="info">Save</Button>
        <Button color="info">Extend</Button>
            </ButtonGroup>
            <p></p>
            

          <Alert color="danger">
            This chart indicates a decline <a href="#" className="alert-link">See more ...</a>
          </Alert><p></p>


          </CardBody>
              </Card>
              </Col></th>
            <th><Col sm>
            <Card>
            <CardHeader> Graph 4 </CardHeader>
                <CardBody>
              <MixedBarPlot />

              <ButtonGroup id="buttonGroup">
        <Button color="info">Hide</Button>
        <Button color="info">Save</Button>
        <Button color="info">Expand</Button>
            </ButtonGroup><p></p>

            <Alert color="dark">
            This chart indicates a low plateau <a href="#" className="alert-link">See more ...</a>
          </Alert><p></p>

            </CardBody>
              </Card>
              </Col></th>
        </tr>
      </thead>



      </Table>
      <Row>


<Col sm>
</Col>

<Col sm>
            <Card>
            <CardHeader> Graph 5 </CardHeader>
                <CardBody>
              <MixedBarPlot />

              <ButtonGroup id="buttonGroup">
        <Button color="info">Hide</Button>
        <Button color="info">Save</Button>
        <Button color="info">Expand</Button>
            </ButtonGroup><p></p>

          <Alert color="primary">
            This chart indicates a steady plateau over long term <a href="#" className="alert-link">See more ...</a>
          </Alert><p></p>

            </CardBody>
              </Card>
              </Col>

        
        <Table>
        <thead>
          <tr>
            <th><Col sm>

            <Card>
            <CardHeader> PiChart</CardHeader>
                <CardBody>

                  
              <PieExample />

            </CardBody>
              </Card>
              </Col></th>
        </tr>
      </thead>
      </Table>
      


              <Col sm>


              
              </Col>
          </Row>
</Container>
          </div>
        );

    }
}
