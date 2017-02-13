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

	populateTableData: function() {
      var keys = Object.keys(this.props.weather.temperatures.values);
      var data = keys.map(function(val, index) {
          return <td key={index}>{this.props.weather.temperatures.values[val]}&#8451;</td>
      }.bind(this));

     return data;
	},

	render: function() {
		var headings = this.populateTableHead();
        var data = this.populateTableData();
		return(
			<div>
				<table>
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