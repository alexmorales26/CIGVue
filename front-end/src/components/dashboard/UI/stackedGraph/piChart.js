import React, {Component} from 'react';
import { Button, Fade } from 'reactstrap';
import {Pie} from 'react-chartjs-2';
import PieChart from 'react-minimal-pie-chart';


export default class Graphs extends Component{
	render(){
			return (
				<div>

        <h2>Pie Example</h2>
        <PieChart
  				data={[
						{ title: 'One', value: 10, color: 'darkBlue' },
						{ title: 'Two', value: 15, color: 'lightBlue' },
						{ title: 'Three', value: 20, color: 'black' },

  			]} />




      </div>
    );
  }
};