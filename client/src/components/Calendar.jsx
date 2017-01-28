var React = require("react");
var Moment = require("moment");
var TableRaw = require("./TableRaw.jsx");

var Calendar = React.createClass({
	getDays: function(firstDay) {
      var days = [];
		 days.push(firstDay);
		var run = true;
		var count = 0;
		while(run) {
          var day = days[count].value.clone().add(1,'day');
          var week = day.week();
          if(days[days.length -1 ].value.isSame(day,'month')) {
              days.push({value: day, display: day.format("DD"), week: week});
          } else {
          	run = false;
          }
         count++;
		}
	 return days;
	},

	renderMonth: function(days, today) {
      var months = days;
      var week = null;
      var list = [];
      for(var i = 0; i < months.length; i++) {
           if(week === null || week !== months[i].week) {
              week = months[i].week;
              var days = [];
              for (var j = 0; j < months.length; j++ ) {
                 if(months[j].week === week) {
                      days.push(months[j]);
                 }
              }
              list.push(<TableRaw week={week} days={days} setDate={this.props.setDate} today={today} update={0}/>);
           }
      }

      this.setState({table: list});
	},

	nextMonth: function() {
      var month = this.state.month.clone().add(1, "M");
      if(month.isAfter(this.state.today, "M")) {
        this.setState({leftArrowStyle: {dispaly: "initial"}});
      } else {
      	this.setState({leftArrowStyle: {dispaly: "none"}});
      }
      var dayOfTheMonth = month.date() - 1;
      var firstDay = {
            value: month.clone().subtract(dayOfTheMonth,"days"),
			dispaly: month.clone().subtract(dayOfTheMonth,"days").format("DD"),
			week: month.clone().subtract(dayOfTheMonth, "days").week()
      }

      var days = this.getDays(firstDay);
      this.renderMonth(days, this.state.today);
      this.setState({currentMonth: month.format("MMMM YYYY"), month: month});
	},

	previousMonth: function() {
      var month = this.state.month.clone().subtract(1, "M");
      if(month.isSame(this.state.today, "M")) {
        this.setState({leftArrowStyle: {display: "none"}});
      }
      
      var dayOfTheMonth = month.date() - 1;
      var firstDay = {
            value: month.clone().subtract(dayOfTheMonth,"days"),
			dispaly: month.clone().subtract(dayOfTheMonth,"days").format("DD"),
			week: month.clone().subtract(dayOfTheMonth, "days").week()
      }

      var days = this.getDays(firstDay);
      this.renderMonth(days, this.state.today);
      this.setState({currentMonth: month.format("MMMM YYYY"), month: month});
	},

	componentWillMount: function() {
		var today = Moment();
		var dayOfTheMonth = today.date() - 1;
		var firstDay = {
			value: today.clone().subtract(dayOfTheMonth,"days"),
			dispaly: today.clone().subtract(dayOfTheMonth,"days").format("DD"),
			week: today.clone().subtract(dayOfTheMonth, "days").week()
		}
		
		var days = this.getDays(firstDay);
		var currentMonth = today.format("MMMM YYYY");
		this.setState({currentMonth: currentMonth, month: days, today: today, month: today});
		this.renderMonth(days, today);
	},

	getInitialState: function() {
		return(
              {
              	visible: this.props.calendarVisible,
              	style: {display: "none"},
              	leftArrowStyle: {display: "none"}
              }
			)
	},

	render: function() {
		return(
			<div id="dates-container-datepicker" style={this.props.style}>
			   <i className="fa fa-arrow-circle-left datepicker-arrow" aria-hidden="true" style={this.state.leftArrowStyle} onClick={this.previousMonth}></i>
               <h5>{this.state.currentMonth}</h5>
               <i className="fa fa-arrow-circle-right datepicker-arrow" aria-hidden="true" onClick={this.nextMonth}></i>
               <i id="calendar-icon-close" className="fa fa-times" aria-hidden="true" onClick={this.props.closeCalendar}></i>
               <table>
                <thead>
                <tr>
                  <td style={{color: "red"}}>Sun</td>
                  <td>Mon</td>
                  <td>Tue</td>
                  <td>Wed</td>
                  <td>Thu</td>
                  <td>Fri</td>
                  <td style={{color: "red"}}>Sat</td>
                </tr>
                </thead>
                <tbody>
                 {this.state.table}
                </tbody>
               </table>
			</div>
			);
	}

});

module.exports = Calendar;