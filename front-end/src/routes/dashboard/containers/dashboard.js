import React,{Component} from 'react';
import { Container, Row, Col,Image } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardHeader, Button } from 'reactstrap';
import '../../../assets/css/graph.css'
import FirstBarGraph from '../../../components/dashboard/Actions/firstBarGraphActions';
import SecondBarGraph from '../../../components/dashboard/Actions/secondBarGraphActions';
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
              <Col >
                <BarGraphCard title="Hours contributed per Employee">
                  <FirstBarGraph />
                </BarGraphCard>
              </Col>
              <Col >
              <BarGraphCard title="Hours Contributed to each Project">
                <SecondBarGraph />
              </BarGraphCard>
              </Col>
            </Row>

            <Row style={{marginBottom: "1rem"}}>
              <Col>
                <GraphCard title="Employee time consumed by each Project">
                  <PieGraph />
                </GraphCard>
              </Col>
              <Col>
              <GraphCard title="Amount of hours contributed by Employee">
                <SecondPieGraph />
              </GraphCard>
              </Col>
            </Row>
          </Container>
      )
    }
}
