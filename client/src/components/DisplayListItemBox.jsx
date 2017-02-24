var React = require("react");
var ActivityBoxMedium = require("./ActivityBox.jsx");
var WeatherMediumBox = require("./WeatherMediumBox.jsx");
var Moment = require("moment");

var DisplayListItemBox = React.createClass({
   getInitialState: function() {
      return({
      	value: null,
      	postion: null,
      	weather: null,
      	data: null
      });
   },

   componentWillReceiveProps: function(nextProps) {
     this.setState({
     	value: nextProps.value,
     	position: nextProps.displayPosition,
     	weather: nextProps.weather
     });
     this.createChartData(nextProps);
   },

   createChartData: function(props) {
   	  console.log("DisplayListItemBox",props.weather.temperatures.values);
     var data = props.weather.temperatures.values.map(function(value, index) {
         return { month: Moment().month(index).format("MMM"), value: value}
     });
     this.setState({data: data});
     this.forceUpdate();
   },

	render: function() {
		if(this.state.value) {
		   if(this.state.position === 0) {
              return(
              	<div>
              	  <div className="description-medium">
					  {this.state.value}
				  </div>
              	 <WeatherMediumBox data={this.state.data}/>
              	</div>
              	);
		   }
		   if(this.state.position === 1) {
            return(
            	<div>
					<div className="history-medium">
					  {this.state.value}
					</div>
                  <i className="fa fa-university icon-activities-medium fa-5x" aria-hidden="true"></i>
				</div>
			);
		   }
		   if(this.state.position === 2) {
		   	var gallery = this.state.value.map(function(value, index) {
                             return <img className="gallery-medium-phot clearfix" src={value.link} key={index}></img>
		   		          });
            return(
				<div className="gallery-medium">
				  {gallery}
				</div>
			);
		   }
		   if(this.state.position === 3) {
		   	var activities = this.props.value.map(function(value, index) {
                    return <ActivityBoxMedium activity={value} key={index} />
		   	});
            return(
				<div className="activities-medium">
				  {activities}
				</div>
			);
		   }
		}else {
			return <p>Loading</p>
		}
		
	}
});

module.exports = DisplayListItemBox;