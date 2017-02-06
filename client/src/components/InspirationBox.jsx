var React = require("react");

var InspirationBox = React.createClass({
   
   render: function() {
   	return(
         <div className="inspiration-container">
         	{this.props.inspiration.city.city}
         </div>
   		);
   }
});

module.exports = InspirationBox;