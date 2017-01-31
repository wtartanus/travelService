var React = require("React");

var NavItem = React.createClass({
  compenentWillMount: function() {

  },
  
  render: function() {
  	return(
  		 <li className="nav-item">{this.props.listItem}</li>
  		) 
  }
});

module.exports = NavItem;