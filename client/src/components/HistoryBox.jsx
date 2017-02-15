var React = require("react");

var HistoryBox = React.createClass({
   render: function() {
   	 return(
   	 	  <div className="inspirations-history-mobile" style={this.props.visibilityStyle} >
   	 	  	<p className="history-paragrapf-m">{this.props.history}</p>
   	 	  </div>
   	 	);
   }
});

module.exports = HistoryBox;