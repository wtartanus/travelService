var React = require("react");

var DescriptionBox = React.createClass({
	render: function() {
		return(
			<div className="inspirations-description-mobile" style={this.props.visibilityStyle} >
			  <p>{this.props.description}</p>
			</div>
			);
	}
});

module.exports = DescriptionBox;