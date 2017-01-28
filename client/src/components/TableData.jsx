var React = require("react");

var TableData = React.createClass({

 getInitialState: function() {
   return({
      date: this.props.date
      }
   	);
 },

 handleClick: function() {
  this.props.setDate(this.props.date);
 },

  render: function() {
  	return(
         <td className={this.props.styleClass} title={this.props.title} onClick={this.handleClick}>
         	{this.props.day}
         </td>
  		)
  }
});

module.exports = TableData;