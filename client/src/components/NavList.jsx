var React = require("React");
var NavItem = require("./NavItem");

var NavList = React.createClass({
	getInitialState: function() {
       return { navItems: ["Inspiration", "About", "Sign In", "Log In"] }
	},

	render: function() {
		var listItems = this.state.navItems.map(function(item,index) {
			return ( <NavItem listItem={item} key={index} /> );
		}); 

		return (
              <ul id="nav-bar" style={this.props.navStyle}>
               {listItems}
              </ul>
			);
	}
});

module.exports = NavList;

