import React,{Component,Fragment} from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

//The colors the bar chart can choose from. If it uses all of them, it loops
//back around to the start.
const color = [
  "#8884d8",  //purple-blue
  "#82ca9d",  //sea green
  "#ffc658",  //yellow-orange
  "#1ad1ff",  //light blue
  //"#e6e600",  //dark yellow
  "#990099",  //dark purple
  "#ff4da6",  //faded pink
  "#339966", //dark green
  "#ff471a",  //light red
]

export default class FirstBarGraph extends Component {
  constructor(props){
    super(props);
    this.state={
      data: props.serverData,
      headers: props.serverDataHeaders,
      data2: [],
      colInd: 0
    }

    this.makeBarArray = this.makeBarArray.bind(this);
    this.createBars = this.createBars.bind(this);
    this.colorPicker = this.colorPicker.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.serverData,
      headers: nextProps.serverDataHeaders,
      data2: [],
      colInd: 0
    })
  }

  makeBarArray(in_data, in_name){
    //This statement makes sure the in_data array is defined in some manner,
    //so it doesn't break if the data has yet to be input.
    if(typeof(in_data) != 'undefined') {
      //First we need to reset the overarching data array so we can fill it.

      //This line clears the data array so it can be repopulated with the data
      //that's read from the CSV.
      this.state.data2.length = 0;

      var inLen, i;
      inLen = in_data.length;

      //Going over each array in the array to find the three specific variables we need.
      for(i = 0; i < inLen; i++) {
        //We'll need the name, the activity name, and the hours repeatedly in
        //this loop, so we'll make variables for them here for ease of use.
        var na, act, hrs;

        na = in_data[i][in_name];

        //These two values are hardcoded, because the name of these properties
        //won't change.
        act = in_data[i]["Activity_Name"];
        hrs = parseFloat(in_data[i]["Hours"]);

        //Catching any odd cases where one of these is undefined.
        if(typeof(na) == 'undefined' || typeof(act) == 'undefined' || typeof(hrs) == 'undefined') {
          continue;
        }

        //Check to see if the name listed is in our data array first.
        if(!this.state.data2.some(d => d.name === na)) {
          //console.log("Made it into if for not-existing.");
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
          this.state.data2.push(tObj);
        } else {
          //If the name does exist in our array, we just need to update that
          //specific object.
          //First we need to know which object we're updating.
          var ind = this.state.data2.findIndex(d => d.name === na);

          //Next, we need to check if the name in our array already has a
          //property with the current activity.
          if(!this.state.data2[ind].act_types.includes(act)) {
            //If it doesn't have a property with the current activity's name,
            //add it to the list and as a property.
            this.state.data2[ind].act_types.push(act);
            this.state.data2[ind][act] = hrs;
          } else {
            //If a property with that activity's name already exists, we just
            //need to find it and add the number of hours.
            this.state.data2[ind][act] += hrs;
          }
        }
      }
    }
  }

  //Simply using a counter to pick colors for the bars.
  colorPicker() {
    if(this.state.colInd + 1 < color.length) {
      this.state.colInd++;
    } else {
      this.state.colInd = 0;
    }

    return color[this.state.colInd];
  }

  createBars(in_data){

    var j, k;
    var barInfo = [];

    //Iterate over the data and put them into objects we can use for mapping.
    for(j = 0; j < in_data.length; j++) {
      for(k = 0; k < in_data[j].act_types.length; k++) {
        var act = in_data[j].act_types[k];
        //Making an array that's simply a list of every activity, as it's
        //all we need for the <Bar /> code.
        if(!barInfo.includes(act)) {
          barInfo.push(act);
        }
      }
    }
    var bars = barInfo.map((bar, index) =>
      <Bar name={bar} key={index} dataKey={bar} stackId="a" fill={this.colorPicker()}/**fill="#8884d8"**/ isAnimationActive={false} />
    );

    return bars;
  }

  render() {
    //Changing the second argument in this method call will change what column
    //it uses as the dataKey.
    this.makeBarArray(this.state.data, "Full_name");
    return (
      <Fragment>
      <BarChart
        width={1000}
        height={500 /**1200**/}
        data={this.state.data2}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 20, right: 20}}
        /** Interval forces the graph to display every name. **/
        interval={0}
        /** angle turns the names so that they're displayed vertically, so
        they can fit next to each-other if they're all displayed. **/
        angle={-90}
        /** dy controls the distance the name is from the line marking the
        edge of the graph. **/
        dy={60}
        /** Thi label doesn't matter too much. **/
        /**label={{ value: "Names", position: "insideBottom"}}**/ />
        <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft"}}/>
        <Tooltip />
        {this.createBars(this.state.data2)}
      </BarChart>
      </Fragment>
    );
  }
}
