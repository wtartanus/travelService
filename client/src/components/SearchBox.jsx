var React = require('react');
var moment = require('moment');
var DatePicker = require("./DatePicker.jsx");



var Search = React.createClass({

  getInitialState: function() {
    return (
        {
          today: moment().format("YYYY-MM-DD"),
          end: moment().add(7,"d").format("YYYY-MM-DD"),
          searchEnable: false,
          buttonStyle: {},
          buttonTittle: "Destination must be set."
        }
      );
    
  },

  isValid: function() {
     var form = document.getElementById("search-form");
     var destination = form.childNodes[0].childNodes[5].value;
     var dateFromValue = form.childNodes[2].childNodes[0].childNodes[2].value;
     var dateFrom = dateFromValue ? moment(dateFromValue) : null;
     var dateToValue = form.childNodes[3].childNodes[0].childNodes[2].value;
     var dateTo = dateToValue ? moment(dateToValue) : null;
     if(dateFrom !== null && dateTo !== null && dateFrom.isAfter(dateTo)) {
        this.disableSearchButton();
        var title = "From date can't be after until date."
        this.setState({buttonTittle: title});
        return;
     } else if(destination === "") {
         this.disableSearchButton();
         var title = "Destination must be set.";
         this.setState({buttonTittle: title});
         return;
     } else  {
        var title = "Click to search."
        this.enableSearchButton();
     }
  },

  disableSearchButton() {
    var style = {cursor: "not-allowed"}
    
    this.setState({buttonStyle: style, searchEnable: false});
  },

  enableSearchButton() {
   if(!this.state.searchEnable) {
      var style = {cursor: "pointer",backgroundColor: "blue"}
      var title = ""

      this.setState({buttonStyle: style, buttonTittle: title, searchEnable: true});
   }
  },

  checkSearchType: function(search) {
     if(search.destination !== "" && search.startCity == !"" && (search.dateFrom === "" || search.dateTo === "") ) {
       search.type = 1
       return search;
     }

     if(search.destination !== "" && search.startCity === "" && (search.dateFrom !== "" && search.dateTo !== "")) {
       search.type = 2
       return search;
     }

     if(search.destination !== "" && search.startCity === "" && (search.dateFrom === "" || search.dateTo === "")) {
       search.type = 3
       return search;
     }

     return search;
  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log(event.target.childNodes[4]);
    var search = {
      destination: event.target.childNodes[0].childNodes[5].value.toLowerCase(),
      startCity: event.target.childNodes[1].childNodes[2].value.toLowerCase(),
      dateFrom: event.target.childNodes[2].childNodes[0].childNodes[2].value,
      dateTo: event.target.childNodes[3].childNodes[0].childNodes[2].value,
      target: event.target[4].value.toLowerCase(),
      type: 0
    };

    var search = this.checkSearchType(search);
    this.props.setSearch(search);
  },

  render: function() {
    return (
      <div id="travel-search">
        <form id="search-form" onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="to">Destination</label> <br/>
            <input name="to" type="text" onChange={this.isValid} />
          </div>

          <div className="form-input">
            <label htmlFor="start">Start</label><br/>
            <input name="start" type="text"/>
          </div>

          <div className="form-input"> 
            <DatePicker label="From" onChange={this.isValid} />
          </div>
          
          <div className="form-input"> 
            <DatePicker label="Until" onChange={this.isValid} />
          </div>
  
            <button title={this.state.buttonTittle} style={this.state.buttonStyle}>Search</button>
        </form>
      </div>
      )
  }
});

module.exports = Search;