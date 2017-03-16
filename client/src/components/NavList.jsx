var React = require("React");

var NavList = React.createClass({
  getInitialState: function() {
     return({
       searchOpen: false
     });
  },

  toggleSearchModal: function() {
    if(this.props.windowSize.width >= 1000) {
      var search = document.getElementById("search-form");
      if(this.state.searchOpen) {
         search.style.display = "none";
        this.setState({searchOpen: !this.state.searchOpen});
      } else {
        search.style.display = "initial";
        this.setState({searchOpen: !this.state.searchOpen});
      }
    }
  
  },

	render: function() {
		return (
      <ul id="nav-bar" style={this.props.navStyle}>
        <li className="nav-item"><a href="#inspirations-container">Inspiration</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Sign In</a></li>
        <li className="nav-item"><a href="#">Log In</a></li>
        <li className="nav-item" onClick={this.toggleSearchModal}><a href="#">Search</a></li>
      </ul>
		);
	}
});

module.exports = NavList;

