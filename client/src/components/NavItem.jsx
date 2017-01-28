var React = require("React");

var NavItem = React.createClass({
  render: function() {
  	return(
  		 <li className="nav-item">{this.props.listItem}</li>
  		) 
  }
});

module.exports = NavItem;