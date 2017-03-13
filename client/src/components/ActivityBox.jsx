var React = require("react");

var ActivityMediumBox = React.createClass({
    render: function() {
    	return(
             <div className="activity-container-medium">
               <h2>{this.props.activity.city}</h2>
               <h5>{this.props.activity.address}</h5>
               <div className="activity-description-container-muedium clearfix">
			           <img src={this.props.activity.photoLink} />
			           <p>{this.props.activity.description}</p>
			         </div>  
            </div>
    		);
    }
});

module.exports = ActivityMediumBox;