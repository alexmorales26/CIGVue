import React, { Component } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import Selector from '../../../common/selector/selector.js'
const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class SecondPieGraph extends Component {
constructor(props){
  super(props);
  this.state={
    data: props.serverData,
    userNames: props.userNames
  }

}
componentWillReceiveProps(nextProps){
  this.setState({
    data: nextProps.serverData,
    userNames: nextProps.userNames
  })
}
  render() {

    return (
      <div>
      <Selector {...this.props} />
      <PieChart width={400} height={400}>
        <Pie
          data={data2}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >

          {
            data2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      </div>
    );
  }
}
