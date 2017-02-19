var React = require("react");
var ActivityBoxMedium = require("./ActivityBox.jsx");

var DisplayListItemBox = React.createClass({
   getInitialState: function() {
      return({
      	value: null,
      	postion: null
      });
   },

   componentDidMount: function() {

   },

   componentWillReceiveProps: function(nextProps) {
     this.setState({
     	value: nextProps.value,
     	position: nextProps.displayPosition
     });
   },

	render: function() {
		if(this.state.value) {
			console.log(this.props.displayPosition);
		   if(this.state.position === 0) {
            return(
				<div className="description-medium" >
				 {this.state.value}
				</div>
			);
		   }
		   if(this.state.position === 1) {
            return(
				<div className="history-medium">
				  {this.state.value}
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