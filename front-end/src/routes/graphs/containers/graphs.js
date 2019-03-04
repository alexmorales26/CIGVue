import React,{Component} from 'react';
import { Container, Row, Col,Image } from 'reactstrap';
import '../../../assets/css/graph.css'




const GraphItem = ({ pic }) => (
  <img src={pic} />
);

export default class Graphs extends Component{
    render(){
        return (

  <Container>
  <Row >
   <Col className="firstGrid" >
   <GraphItem pic={ 'https://4.bp.blogspot.com/_Bf48JKOl5HQ/TTRNfpBbXRI/AAAAAAAAB6U/nKKQZzThJEw/s1600/BlackBox.jpg'}fluid />

   </Col>

   <Col className="SecondGrid">
   <GraphItem pic={'https://4.bp.blogspot.com/_Bf48JKOl5HQ/TTRNfpBbXRI/AAAAAAAAB6U/nKKQZzThJEw/s1600/BlackBox.jpg'} />

   </Col>
  </Row>

 <Row>
 <Col className="thirdGrid"  >
 <GraphItem pic={'https://4.bp.blogspot.com/_Bf48JKOl5HQ/TTRNfpBbXRI/AAAAAAAAB6U/nKKQZzThJEw/s1600/BlackBox.jpg'} roundedCircle />
 </Col>
 <Col className="fourthGrid"  >
 <GraphItem pic={'https://4.bp.blogspot.com/_Bf48JKOl5HQ/TTRNfpBbXRI/AAAAAAAAB6U/nKKQZzThJEw/s1600/BlackBox.jpg'}rounded />
  </Col>
</Row>

</Container>











        );

    }
}
