var React = require("react");
var Moment = require("moment");
var Calendar = require("./Calendar.jsx");

var DatePicker = React.createClass({
	getInitialState: function() {
		return({
			label: this.props.label,
			calendarVisible: false,
			style: {display: "none"},
			value: ""
		});
	},

	toggleCalendar: function() {
        if(this.state.calendarVisible) {
       	  var show = !this.state.calendarVisible;
          this.setState({calendarVisible: show, style: {display: "none"}});
       } else {
          var show = !this.state.calendarVisible;
          this.setState({calendarVisible: show, style: {display: "block",position: "absolute"}});
       }
	},

	closeCalendar: function() {
       var show = false;
       this.setState({calendarVisible: show, style: {display: "none"}});
	},

	handleClick: function() {
		this.toggleCalendar();
	},

	setDate: function(target) {
      this.setState({value: target.value.format("DD / MMM / YYYY")});
      this.closeCalendar();
      this.props.onChange();
	},

	render: function() {
		return (
			<div id="datepicker-container">
			    <label htmlFor="picker">{this.state.label}</label><br />
				<input id="input-field-datepicker" readOnly onClick={this.handleClick} value={this.state.value}  name="picker" type="text"/><i id="calendar-icon-datepicker" className="fa fa-calendar" aria-hidden="true" onClick={this.handleClick} ></i>
				<Calendar style={this.state.style} setDate={this.setDate} closeCalendar={this.closeCalendar} nextMonth={this.nextMonth} />
			</div>
			);
	}
});

module.exports = DatePicker;