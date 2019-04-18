import React,{Component} from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400, act_types: ["uv", "pv", "amt"],
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210, act_types: ["uv", "pv", "amt"],
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290, act_types: ["uv", "pv", "amt"],
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000, act_types: ["uv", "pv", "amt"],
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181, act_types: ["uv", "pv", "amt"],
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500, act_types: ["uv", "pv", "amt"],
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100, act_types: ["uv", "pv", "amt"],
  },
];

// const Bars = ({data}) => {
//   // data //iterate
//   var j, k;
//   for(j = 0; j < data.length; j++) {
//     for(k = 0; k < data[j].act_types.length; k++) {
//       var act = data[j].act_types[k];
//       <Bar dataKey={data[j][act]} stackId={data[j].name} fill="#8884d8"/>
//     }
//   }
//   // map
//   return (
//     // for(j = 0; j < data.length; j++) {
//     //   for(k = 0; k < data[j].act_types.length; k++) {
//     //     var act = data[j].act_types[k];
//     //     <Bar dataKey={data[j][act]} stackId={data[j].name} fill="#8884d8"/>
//     //   }
//     // }
//   );
// }

// <Bars data{this.state.data}/>

export default class FirstBarGraph extends Component {
  constructor(props){
    super(props);
    this.state={
      data: props.serverData,
      headers: props.serverDataHeaders
    }

    this.makeBarArray = this.makeBarArray.bind(this);
    this.getIndOfArray = this.getIndOfArray.bind(this);
    this.createBars = this.createBars.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.serverData,
      headers: nextProps.serverDataHeaders
    })
  }

  getIndOfArray(name) {
    //Find the index of the header that we want to display on the x-axis.
    //This searches for the index of the input for name.
    var ind = this.state.headers.findIndex(h => h === name);
    return ind;
  }

  makeBarArray(in_data, in_name){
    var inLen, i;
    inLen = in_data.length;

    //Going over each array in the array to find the three specific variables we need.
    for(i = 0; i < inLen; i++) {
      //We'll need the name, the activity name, and the hours repeatedly in
      //this loop, so we'll make variables for them here for ease of use.
      var na, act, hrs;

      //This allows us to change what we want to use as the name value for
      //our bar graph. Since we don't have a way to select this outside of
      //altering this code yet, it's currently hardcoded to "Full_name" for
      //testing purposes.
      //var indName = this.getIndOfArray(in_name);
      var indName = this.getIndOfArray("Full_name");
      na = in_data[i][indName];

      //These two values are always the same in the format provided, so
      //they're hardcoded. This can be changed.
      act = in_data[i][12];
      hrs = in_data[i][2];

      //Check to see if the name listed is in our data array first.
      if(!data.some(d => d.name === na)) {
        //If this name doesn't exist in our array, then we need to enter
        //it into the array.
        var tObj = new Object;

        //Each object will store an array listing what the names of its own
        //properties are, since they're dynamic and need a dynamic access.
        var tArr = [act];
        tObj.name = na;
        tObj.act_types = tArr;

        //This stores the hours spent on an activity in a property of the
        //object that shares the activity's name.
        tObj[tArr[0]] = hrs;
        data.push(tObj);
      } else {
        //If the name does exist in our array, we just need to update that
        //specific object.
        //First we need to know which object we're updating.
        var ind = data.findIndex(d => d.name === na);

        //Next, we need to check if the name in our array already has a
        //property with the current activity.
        if(!data[ind].act_types.some(act)) {
          //If it doesn't have a property with the current activity's name,
          //add it to the list and as a property.
          data[ind].act_types.push(act);
          data[ind][act] = hrs;
        } else {
          //If a property with that activity's name already exists, we just
          //need to find it and add the number of hours.
          data[ind][act] += hrs;
        }
      }
    }

    return(
      this.createBars()
    );
  }

  // createBars(in_data){
  //   var j, k;
  //   var bars = [];
  //
  //   //Iterate over the data and create a Bar tag for each activity name.
  //   for(j = 0; j < in_data.length; j++) {
  //     for(k = 0; k < in_data[j].act_types.length; k++) {
  //       var act = in_data[j].act_types[k];
  //       bars.push("<Bar dataKey=" + in_data[j][act] + " stackId=" + in_data[j].name + " fill=\"#8884d8\"/>");
  //     }
  //   }
  //
  //   return bars;
  // }

  createBars(in_data){
    var j, k;
    var barInfo = [];

    //Iterate over the data and put them into objects we can use for mapping.
    for(j = 0; j < in_data.length; j++) {
      for(k = 0; k < in_data[j].act_types.length; k++) {
        var act = in_data[j].act_types[k];
        barInfo.push({
          act: act,
          name: in_data[j].name
        });
      }
    }

    // for(var q = 0; q < barInfo.length; q++) {
    //   console.log(barInfo[q]);
    // }

    var bars = barInfo.map((bar, index) =>
      <Bar name={bar.act} key={index} dataKey={bar.act} stackId={bar.name} fill="#8884d8" />
    );

    for(var q = 0; q < bars.length; q++) {
      console.log(bars[q]);
    }

    return bars;
  }

  render() {
    return (
      <BarChart
        width={this.props.width || 500}
        height={this.props.height || 300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {this.createBars(data)}
      </BarChart>
    );
  }
  //You can't have comments in the return for some reason, so these are out here.
  // <Bar dataKey="pv" stackId="a" fill="#8884d8" />
  // <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
  // <Bar dataKey="uv" fill="#ffc658" />
}
