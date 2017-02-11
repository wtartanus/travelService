var React = require("react");

var PhotoBox = React.createClass({
	render: function() {
       return(
          <div>
          	<img className="photo-mobile" src={this.props.link} alt={this.props.alt} height={this.props.height} width={this.props.width} />
          </div>
       	);
	}
});

module.exports = PhotoBox;