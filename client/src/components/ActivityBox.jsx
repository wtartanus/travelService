var React = require("react");

var ActivityMediumBox = React.createClass({
    render: function() {
    	return(
             <div>
               <h3>{this.props.activity.city}</h3>
               <h4>{this.props.activity.address}</h4>
               <div>
			     <img src={this.props.activity.photoLink} height="220" width="220" />
			     <p>{this.props.activity.description}</p>
			   </div>  
             </div>
    		);
    }
});

module.exports = ActivityMediumBox;