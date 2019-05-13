import React,{Component} from 'react';
import { Container, Row, Col,Image } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardHeader, Button } from 'reactstrap';
import '../../../assets/css/graph.css'
import FirstBarGraph from '../../../components/dashboard/Actions/firstBarGraphActions';
import TeamBarGraph from '../../../components/dashboard/Actions/teamBarplotActions';
import GraphCard from "./graphCard";
import PieGraph from "../../../components/dashboard/Actions/pieChartActions";
import SecondPieGraph from "../../../components/dashboard/Actions/secondPieChartActions";
import FileUpload from '../../../components/dashboard/Actions/fileUploadActions';
import BarGraphCard from  './barGraphCard'
export default class Graphs extends Component{
    render(){
      return (
          <Container style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <FileUpload />
            <Row style={{marginBottom: "1rem"}}>
              <Col lg="6">
                <BarGraphCard title="Graph 1">
                  <FirstBarGraph />
                </BarGraphCard>
              </Col>
              <Col lg="6">
              <BarGraphCard title="Graph 2">
                <TeamBarGraph/>
              </BarGraphCard>
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
                <SecondPieGraph />
              </GraphCard>
              </Col>
            </Row>
          </Container>
      )
    }
}
