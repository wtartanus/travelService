var React = require("react");
var BarChart = require("recharts").BarChart;
var Bar = require("recharts").Bar;
var ReferenceLine = require("recharts").ReferenceLine;
var XAxis = require("recharts").XAxis;
var YAxis = require("recharts").YAxis;
var CartesianGrid = require("recharts").CartesianGrid;
var Tooltip = require("recharts").Tooltip;
var Cell = require("recharts").Cell;
var Area = require("recharts").Area;


const SimpleBarChart = React.createClass({
  getInitialState: function() {
     return({
      data: []
     });
  },

   getColor: function(value) {
      if(parseInt(value) <= 0 ) {
        return "#4169E1";
      }
      if(parseInt(value) > 0 && parseInt(value) < 10) {
        return "#87cefa";
      }
      if(parseInt(value) >= 10 && parseInt(value) < 17) {
        return "#228B22";
      }
      if(parseInt(value) >= 17 && parseInt(value) < 22) {
        return "#FFD700";
      }
      if(parseInt(value) >= 22 && parseInt(value) < 27) {
        return "#FFA500";
      }
      if(parseInt(value) >= 27) {
        return "#FF0000";
      }
  },

  componentWillReceiveProps: function(nextProps) {
     this.setState(
      {
        data: nextProps.data
      });
  },

  render () {
    if(this.props.data && this.props.data.length) {
       return (
        <div className="weather-chart-medium">
          <BarChart width={600} height={300} data={this.props.data}>
             <XAxis dataKey="month" label="months"/>
             <YAxis label="&#8451;" />
             <Tooltip/>
             <CartesianGrid strokeDasharray="3 3"/>
             <ReferenceLine y={0} stroke='#000'/>
             <Area type='monotone' dataKey='month' fill='#8884d8' stroke='#8884d8'/>
             <Bar dataKey="value" fill="#8884d8" >
                {
                  this.props.data.map((entry, index) => (
                     <Cell fill={this.getColor(this.props.data[index].value)} key={index} />      
                  ))
                }
             </Bar>
         </BarChart>
        </div>
    );
    } else {
      return (
        <div>
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </div>
      );
    }
   
  }
});

module.exports = SimpleBarChart;


