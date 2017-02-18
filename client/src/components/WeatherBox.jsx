var React = require("react");
var Moment = require("moment");

var WeatherBox = React.createClass({
	getInitialState: function() {
       return({
       	months: []
       });
	},

	componentDidMount: function() {
      this.generateMonths();
	},

	generateMonths: function() {
      var keys = Object.keys(this.props.weather.temperatures.values);
      var months = keys.map(function(val, index) {
        return Moment().month(parseInt(val)).format("MMM");
      });
      this.setState({months: months});
	},

	populateTableHead: function() {
       var headings = this.state.months.map(function(val, index) {
               return <th key={index}>{val}</th>
		});
       
      return headings;
	},

	getColor: function(value) {
      if(parseInt(value) <= 0 ) {
      	return {color: "royalblue"};
      }
      if(parseInt(value) > 0 && parseInt(value) < 10) {
        return {color: "lightskyblue"};
      }
      if(parseInt(value) >= 10 && parseInt(value) < 17) {
        return {color: "forestgreen"};
      }
      if(parseInt(value) >= 17 && parseInt(value) < 22) {
        return {color: "gold"};
      }
      if(parseInt(value) >= 22 && parseInt(value) < 27) {
        return {color: "orange"};
      }
      if(parseInt(value) >= 27) {
        return {color: "red"};
      }
	},

	populateTableData: function() {
      var keys = Object.keys(this.props.weather.temperatures.values);
      var data = keys.map(function(val, index) {
          var color = this.getColor(this.props.weather.temperatures.values[val]);
          return <td style={color} key={index}>{this.props.weather.temperatures.values[val]}&#8451;</td>
      }.bind(this));

     return data;
	},

	render: function() {
		var headings = this.populateTableHead();
        var data = this.populateTableData();
		return(
			<div>
				<table className="weather-mobile" >
				  <thead>
				    <tr>
					    {headings}
					  </tr>
				  </thead>
				  <tbody>
				   <tr>
				     {data}
				   </tr>
				  </tbody>
				</table>
			</div>
			);
	}
});

module.exports = WeatherBox;