var React = require("react");
var Inspiration = require('./InspirationBox.jsx');

var Inspirations = React.createClass({

   getInitialState: function() {
     return ({ 
        inspirations: this.props.inspirations
     });
   },

   componentDidUpdate: function(prevProps, prevState) {
   	console.log(prevProps, prevState);
   },

   componentWillReceiveProps: function(nextProps) {
     console.log("hhhh", nextProps);
     this.setState({inspirations: nextProps.inspirations});
   },

   populateInspiration: function() {
   	console.log(this.state.inspirations);
     var inspirations = this.state.inspirations.map(function(val, index) {
     	  return <Inspiration inspiration="val" key={index} />
     });
     return inspirations;
   },
   
   render: function() {
   	console.log("we",this.state.inspirations)
      if(this.state.inspirations) {
      	var inspirations = this.populateInspiration();
        return (
	   	    <div id="inspirations-container" style={this.props.height}>
	          {inspirations}
	   		</div>
   		);
      } else {
      	return <p>Wojtek</p>
      }
   }
});

module.exports = Inspirations;