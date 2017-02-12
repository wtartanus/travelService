var React = require("react");
var Inspiration = require('./InspirationBox.jsx');

var Inspirations = React.createClass({

   getInitialState: function() {
     return ({ 
        inspirations: this.props.inspirations
     });
   },

   componentDidUpdate: function(prevProps, prevState) {

   },

   componentWillReceiveProps: function(nextProps) {
     this.setState({inspirations: nextProps.inspirations});
   },

   populateInspiration: function() {
     var inspirations = this.state.inspirations.map(function(val, index) {
     	  return <Inspiration inspiration={val} key={index} />
     });
     return inspirations;
   },
   
   render: function() {
      if(this.state.inspirations) {
      	var inspirations = this.populateInspiration();
        return (
	   	    <div id="inspirations-container" style={this.props.height}>
	          {inspirations}
	   		</div>
   		);
      } else {
      	return <p>Loading</p>
      }
   }
});

module.exports = Inspirations;