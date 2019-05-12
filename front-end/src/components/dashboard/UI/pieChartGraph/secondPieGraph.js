import React, { Component } from 'react';
import {PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Select from 'react-select'
import { Alert, UncontrolledAlert, Popover, PopoverHeader } from 'reactstrap';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    console.log(payload);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.id}`}</p>
      </div>
    );
  }

  return null;
};

export default class secondPieGraph extends Component {
constructor(props){
  super(props);
  this.toggle = this.toggle.bind(this);
  this.myRef = React.createRef();
  this.state={
    data: props.serverData,
    teamNames: props.teamNames,
    pieData: props.serverData,
    activeIndex: 0
  }
}

toggleSelected= (e) => {
  this.setState(state => ({ selectedUser: e.value}));
};

toggle() {
  this.setState({
    popoverOpen: !this.state.popoverOpen
  });
}

componentWillReceiveProps(nextProps){
  this.setState({
    data: nextProps.serverData,
    teamNames: nextProps.teamNames,
    pieData: nextProps.serverData,
    activeIndex: 0
  })
}

generateAlert2(e, totalHours){
  var Name = e.activePayload[0].payload.Name
  var Hours = e.activePayload[0].payload.Hours
  //console.log(e);
  //console.log(e.activePayload[0].payload.Hours);
  //console.log(totalHours)
  //console.log(e.activepayload.payload);
  alert("Project Name: " + Name + "\n" + "Hours: " + Hours + "\n");
  return
};
  
  render() {

    var Hours = 0;
    var ticketName = '';
    var pieArray = [];      // has the full payload
    var projectNames = [];  //has the projectnames
    var ticketCounts = [];  //Has the ticket count for each project Name

    var peopleHours = 0;
    var peopleCount = 0;
    var personName = '';  
    var peopleNames = []; //has the people's names
    var peopleHours = []; //Has the hours for each person

    var activtyCount = 0;
    var activityName = '';
    var activtyNames = [];


    //console.log(this.state.data)
    //Put data into array for manipulation.
    for (var i = 0; i < this.state.data.length; i++) 
    {
      pieArray.push(this.state.data[i])
    }

    //iterate through data, check for Project names, add new names to projectNames array
    //
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
          //console.log(pieArray[i].Project_Name); 
          ticketName = pieArray[i].Project_Name;
        }
      } 
      //console.log(pieArray); 
    }

    //////////////////////////////////////////////////////////////
    //      fill an array with the people's names
    //////////////////////////////////////////////////////////////
    ticketName = '';
    for (var i = 0; i < pieArray.length - 1; i++) 
    {
      if(Object.keys(pieArray[i] == "Full_Name"))
      {
        if(!peopleNames.includes(pieArray[i].Full_name))
        {
          peopleNames.push(pieArray[i].Full_name);
        }
        if(pieArray[i].Full_name == personName)
          {
          // console.log('continue');
          continue;
          }
      
      if(pieArray[i].Full_name != personName)
        {
          //console.log(pieArray[i].Project_Name); 
          personName = pieArray[i].Full_name;
        } 
      }
      peopleCount = peopleNames.length;
    }
     

    var counter = 0;
    for (var i = 0; i < projectNames.length; i++) 
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
    //console.log(ticketCounts);
    //console.log(ticketCount);
  
    let pieData = [];
    
    for(var i = 0; i< projectNames.length; i++)
    {
      pieData[i] = {
        Team: projectNames[i],
        Hours: ticketCounts[i],
      }
      //console.log(pieData[i]);
    }



    counter = 0;
    for (var i = 0; i < peopleNames.length; i++) 
    {
      
      for(var jj = 0; jj < pieArray.length -1; jj++)
      {
        if(peopleNames[i] === pieArray[jj].Full_name ){

          counter++;
        }

      }
      peopleHours.push(counter);
      counter = 0;
    }

    console.log(peopleHours);

    let lineData = [];

    for(var i = 0; i < peopleNames.length; i++)
    {
      lineData[i] = {
        Name: peopleNames[i],
        Hours: peopleHours[i]
      }
    }


    for(var i = 0; i < peopleNames.length;i++)
    {
      lineData[i] = {
        Hours: peopleHours[i],
        Name: peopleNames[i]
      }
    }
    console.log(lineData);
    //console.log(pieData);
    //console.log(Hours);
    //<Selector {...this.props} />  went on line 173

    return (
      <div>
        <div>
    
<LineChart 
        width={1400}
        height={550}
        data={lineData}
        onClick={ this.generateAlert2}
        margin={{
          top: 5, right: 350, left: 10, bottom: 200,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis  dataKey="Name" position ="right"interval={0} angle={90} dx={10} dy={150}/>
        <YAxis />
        <Tooltip dataKey="Hours"/>
        <Legend />
        <Line type="monotone" dataKey="Hours"  stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
<br></br>
    </div>
  </div>
    );
  }
}



