var React = require("react");

var ThingsToDoBox = React.createClass({
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
			 <div className="inspirations-thingstodo-mobile" style={this.props.visibilityStyle}>
			   <h5>{this.state.activityDisplay.city}</h5>
			   <img src={this.state.activityDisplay.photoLink} height="220" width="220" />
			   <p>{this.state.activityDisplay.address}</p>
			   <p>{this.state.activityDisplay.description}</p>
			   <div>
			   	<i className="fa fa-arrow-circle-o-left" aria-hidden="true" onClick={ () => this.handleMove(true)} ></i>
			   	<i className="fa fa-arrow-circle-o-right" aria-hidden="true" onClick={ () => this.handleMove(false)} ></i>
			   </div>
			 </div>
			);
	}
});

module.exports = ThingsToDoBox;