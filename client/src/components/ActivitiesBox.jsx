var React = require("react");

var ActivitiesBox = React.createClass({
	getInitialState: function() {
      return({
      	activities: this.props.activities,
      	activityDisplay: {},
      	position: 0
      });
	},

	componentDidMount: function() {
       this.getFirstActivity();
	},

	getFirstActivity: function() {
       this.setState({activityDisplay: this.state.activities[this.state.position]});
	},

	handleMove: function(moveLeft) {
	  var position = this.state.position;
	  var display;
      if(moveLeft) {
        position--
        if(position < 0) {
          position = this.state.activities[this.state.activities.length - 1];
        }
      } else {
        position++
        if(position > this.state.activities.length - 1) {
          position = 0;
        } 
      } 
      display = this.state.activities[position];
      this.setState({activityDisplay: display, position: position});
	},

	render: function() {
		return(
			 <div style={this.props.visibilityStyle}>
			  <div className="inspirations-activities-mobile">
			   <h5>{this.state.activityDisplay.city}</h5>
			   <p>{this.state.activityDisplay.address}</p>
			   <div className="photo-description">
			     <img src={this.state.activityDisplay.photoLink} height="220" width="220" />
			     <p>{this.state.activityDisplay.description}</p>
			   </div>   
			   <div className="arrows-box-m clearfix">
			   	<i className="fa fa-arrow-circle-o-left left-arrow-m" aria-hidden="true" onClick={ () => this.handleMove(true)} ></i>
			   	<i className="fa fa-arrow-circle-o-right right-arrow-m" aria-hidden="true" onClick={ () => this.handleMove(false)} ></i>
			   </div>
			  </div>
			 </div>
			);
	}
});

module.exports = ActivitiesBox;