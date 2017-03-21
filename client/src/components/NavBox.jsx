var React = require("react");
var NavList = require("./NavList");

var NavBox = React.createClass({
  getInitialState: function() {
      return { 
      	navStatus: true,
         navUlStyle: {display: 'none'}               
      };
  },

  componentWillMount: function() {
  	this.toggleNavBar();
  },
   
  toggleNavBar: function() {
   	if(this.props.windowSize.width < 600) {
         if(!this.state.navStatus) {
            this.setState({
               navStatus: true,
               navUlStyle: {display: 'initial'}, 
               navConatinerStyle: {width: '100%', 
                                   backgroundColor: 'rgba(0,0,0,.9)'}, 
              navToggleStyle: {color: 'white'}
                                  
            });
      	}

      	if(this.state.navStatus) {
            this.setState({
               navStatus: false, 
               navUlStyle: {display: 'none'}, 
               navConatinerStyle: {width: '10%'}, 
               navToggleStyle: {color: 'black'}
            });
      	}
   	}

    if(this.props.windowSize.width >= 600 && this.props.windowSize.width < 1000) {
      this.setState({
        navUlStyle: {display: 'inherit'}
      });
    }

    if(this.props.windowSize.width >= 1000) {
         this.setState({
          navConatinerStyle: {
            top: this.props.windowSize.heigth - 80 + "px"
          },
          navUlStyle: {
            display: 'flex'
          },
          navToggleStyle: {
            display: 'none'
          }
       });
    }   
   },

    render: function () {
      return (
         <div id="nav-container" style={this.state.navConatinerStyle}>
            <i id="nav-bar-toggle" onClick={this.toggleNavBar} style={this.state.navToggleStyle} className="fa fa-bars" aria-hidden="true"></i>
            <NavList navStyle={ this.state.navUlStyle} windowSize={this.props.windowSize}/>
         </div>
      )
   }
});

module.exports = NavBox;