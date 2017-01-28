var React = require("react");
var NavList = require("./NavList");

var Nav = React.createClass({

	     getInitialState: function() {
            return { 
            	navStatus: true                
            };
	     },

	     componentWillMount: function() {
	     	this.toggleNavBar();
	     },
         
         toggleNavBar: function() {
         	if(this.props.windowSize.width < 600) {
               	if(!this.state.navStatus) {
	               this.setState({navStatus: true, navUlStyle: {display: 'initial'}, navConatinerStyle: {width: '100%', backgroundColor: 'rgba(0,0,0,.9)'}, navToggleStyle: {color: 'white'}});
	         	}

	         	if(this.state.navStatus) {
	               this.setState({navStatus: false, navUlStyle: {display: 'none'}, navConatinerStyle: {width: '10%'}, navToggleStyle: {color: 'black'}});
	         	}
         	}

            if(this.props.windowSize.width >= 1000) {
               this.setState({navConatinerStyle: {
                  top: this.props.windowSize.heigth - 80 + "px"
               }});
            }   
         },

          render: function () {
               return (
                  <div id="nav-container" style={this.state.navConatinerStyle}>
                     <i id="nav-bar-toggle" onClick={this.toggleNavBar} style={this.state.navToggleStyle} className="fa fa-bars" aria-hidden="true"></i>
                     <NavList navStyle={ this.state.navUlStyle} />
                  </div>
               	)

         }
	});

module.exports = Nav;