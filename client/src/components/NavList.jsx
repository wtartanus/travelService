var React = require("React");
//var NavItem = require("./NavItem");

var NavList = React.createClass({

	render: function() {
	
		return (
              <ul id="nav-bar" style={this.props.navStyle}>
                <li className="nav-item"><a href="#inspirations-container">Inspiration</a></li>
                <li className="nav-item"><a href="">About</a></li>
                <li className="nav-item"><a href="">Sign Int</a></li>
                <li className="nav-item"><a href="">Log In</a></li>
              </ul>
			);
	}
});

module.exports = NavList;

