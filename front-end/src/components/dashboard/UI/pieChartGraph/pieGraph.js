import React, { react, Component } from 'react';
import {PieChart, Pie, Sector, Cell } from 'recharts';
import Select from 'react-select'


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

export default class PieGraph extends Component {
constructor(props){
  super(props);
  this.state={
    data: props.serverData,
    pieData: props.serverData
  }
  
}
componentWillReceiveProps(nextProps){
  this.setState({
    data: nextProps.serverData,
    pieData: nextProps.serverData
  })
  
}

  render() {
    
    var hourCount = 0;
    var ticketCount = 0;
    var bla = 0;
    var pie = [this.state.data];
    var Hours = 0;
    var ticketName = '';
    var ticketDiff = 0;
    var sameTicketCount = 0;

    if(pie.length >= 0)
    {
      //console.log('this is pie');
      //console.log(pie);
      //console.log(pie[0]);
    }
    
    var pieArray = [];
    var projectNames = [];
    var ticketCounts = [];
    for (var i = 0; i < this.state.data.length; i++) 
    {
      pieArray.push(this.state.data[i])
    }

    for (var i = 0; i < pieArray.length - 1; i++) 
    {
      if (Object.keys(pieArray[i] == "Project_Name"))
        {
          //Object.values(pieArray[i].Project_Name);
          if(!projectNames.includes(pieArray[i].Project_Name))
          {
          projectNames.push(pieArray[i].Project_Name);
          }
          Hours += parseFloat(pieArray[i].Hours);
          // console.log(Hours); 
          //console.log(projectNames);

      if(pieArray[i].Project_Name == ticketName)
          {
          // console.log('continue');
          continue;
          }
      
      if(pieArray[i].Project_Name != ticketName)
        {
          console.log(pieArray[i].Project_Name); 
          ticketName = pieArray[i].Project_Name;
          ticketCount++;
        }
      }  
    }

    var flag;
    var holder;
    var counter = 0;
    for (var i = 0; i < projectNames.length - 1; i++) 
    {
      
      for(var jj = 0; jj < pieArray.length -1; jj++)
      {
        if(pieArray[jj].Project_Name==projectNames[i]){

          counter++;
        }

      }
      ticketCounts.push(counter);
      counter = 0;
    }
    console.log(ticketCounts);
    console.log(ticketCount);
    
    let pieData = [ 
      { id: 'Agency Portal' , value: ticketCounts[0] },
      { id: 'Agency Profile System', value: ticketCounts[1] },
      { id: 'Biling Center', value: ticketCounts[2] },
      { id: 'Agent Technical Support', value: ticketCounts[3] },
      { id: 'CIG Technical Support', value: ticketCounts[4] },
      { id: 'CIO', value: ticketCounts[5] },
      { id: 'CMS', value: ticketCounts[6] },
      { id: 'Change Requests', value: ticketCounts[7] },
      { id: 'DataHub / Info Center', value: ticketCounts[8] },
      { id: 'Internal', value: ticketCounts[9] },
      { id: 'Legacy Business Analysts', value: ticketCounts[10] },
      { id: 'Marketing', value: ticketCounts[11] },
      { id: 'Networks', value: ticketCounts[12] },
      { id: 'Operations and Support', value: ticketCounts[13] },
      { id: 'PolicyCenter', value: ticketCounts[14] },
      { id: 'Producer Engage', value: ticketCounts[15] },
      { id: 'Legacy', value: ticketCounts[16] },
      { id: 'Portfolio Management Office', value: ticketCounts[17] },
      { id: 'Refinement', value: ticketCounts[18] },
      { id: 'Security', value: ticketCounts[19] },
      { id: 'Systems and Database', value: ticketCounts[20] },
      { id: 'Tier 3', value: ticketCounts[21] },
      { id: 'Tactical Technology Innovation', value: ticketCounts[22] },
      { id: 'Wingspan Agent Gateway', value: ticketCounts[23] }];
      
      



    return (

      <div>
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
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
    
