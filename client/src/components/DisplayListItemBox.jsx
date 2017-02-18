var React = require("react");

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
				<div>
				</div>
			);
		   }
		   if(this.state.position === 2) {
            return(
				<div>
				</div>
			);
		   }
		   if(this.state.position === 3) {
            return(
				<div>
				</div>
			);
		   }
		}else {
			return <p>Loading</p>
		}
		
	}
});

module.exports = DisplayListItemBox;