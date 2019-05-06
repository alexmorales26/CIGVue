import React,{Component} from 'react';
import { Container, Row, Col,Image } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardHeader, Button } from 'reactstrap';
import '../../../assets/css/graph.css'
import MixedBarPlot from '../../../components/dashboard/UI/stackedGraph/mixedBarPlot';
import GraphCard from "./graphCard";
import PieGraph from "../../../components/dashboard/UI/pieChartGraph/pieGraph.js";

//src/components/dashboard/UI/stackedGraph/mixedBarPlot.js
export default class Graphs extends Component{
    render(){
      return (
          <Container style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <Row style={{marginBottom: "1rem"}}>
              <Col lg="6">
                <GraphCard title="Graph 1">
                  <MixedBarPlot />
                </GraphCard>
              </Col>

              <Col lg="6">
              <GraphCard title="Graph 2">
                <MixedBarPlot />
              </GraphCard>
              </Col>
            </Row>

            <Row style={{marginBottom: "1rem"}}>
              <Col lg="6">
                <GraphCard title="Graph 3">
                  <PieGraph />
                </GraphCard>
              </Col>

              <Col lg="6">
              <GraphCard title="Graph 4">
                <PieGraph />
              </GraphCard>
              </Col>
            </Row>
          </Container>
      )
    }
}
