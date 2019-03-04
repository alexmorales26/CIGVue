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




<Row>
   <Col xs={6} md={4}>
   <GraphItem pic={ 'https://images.vexels.com/media/users/3/131136/isolated/preview/4c711c7ec7a01da4a8adf53684a13209-increasing-multicolor-line-chart-by-vexels.png'} />

   </Col>
   <Col xs={4} md={2}>

   </Col>
   <Col xs={6} md={4}>
   <GraphItem pic={'https://images.vexels.com/media/users/3/131136/isolated/preview/4c711c7ec7a01da4a8adf53684a13209-increasing-multicolor-line-chart-by-vexels.png'} />

   </Col>
 </Row>



<Row>


<Col  xs={6} md={4}>
<GraphItem pic={'https://images.vexels.com/media/users/3/131136/isolated/preview/4c711c7ec7a01da4a8adf53684a13209-increasing-multicolor-line-chart-by-vexels.png'} rounded/>
</Col>
<Col xs={4} md={2}>

</Col>
<Col  xs={6} md={4}>
<GraphItem pic={'https://4.bp.blogspot.com/_Bf48JKOl5HQ/TTRNfpBbXRI/AAAAAAAAB6U/nKKQZzThJEw/s1600/BlackBox.jpg'}rounded />


  </Col>
</Row>

</Container>











        );

    }
}
