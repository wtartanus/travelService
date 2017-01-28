var React = require("react");
var TableData = require("./TableData.jsx");


var TableRaw = React.createClass({
getInitialState: function() {
   return({days: this.props.days, weekDays: [0,1,2,3,4,5,6], update: this.props.update});
},

componentDidMount: function() {
  this.populateTableData();
},

populateTableData: function() {
 var tableData = this.state.weekDays.map(function(weekDay,index) {
 	   var day;
 	   var title;
 	   var styleClass;
       for(var i = 0; i < this.props.days.length; i++) {
    
        if(weekDay === this.props.days[i].value.weekday()) {
        	if(this.props.days[i].value.isBefore(this.props.today, "day")) {
                 day = this.props.days[i].value.format("DD");
                 var date = this.props.days[i];
                 title = "This date isn't avalible to pick";
                 styleClass = "populated-table-data-before";
                 break;
        	} else {
        		 day = this.props.days[i].value.format("DD");
		         var date = this.props.days[i];
		         title = this.props.days[i].value.format("DD MMM YYYY");
		         styleClass = "populated-table-data";
		         break;
        	}
        } 
       }

       return <TableData title={title} date={date} day={day} styleClass={styleClass} setDate={this.props.setDate} />
 }.bind(this));

   // this.setState({display: tableData, update: 1});
   return tableData;

},

componentDidUpdate: function() {
 if(!this.state.update) {
   this.populateTableData();
 }
 
},

render: function() {
	var display = this.populateTableData();
  	return(
  		<tr>
  		 {display}
  		</tr>
  		);
  }
});

module.exports = TableRaw;