var React = require("react");
var DisplayListItemBox = require("./DisplayListItemBox.jsx");

var InspirationMediumBox = React.createClass({
   getInitialState: function() {
     return({
     	inspiration: null,
     	list: [],
     	displayPosition: 0,
     	weather: []
     });
   },

   componentDidMount: function() {
    this.setState({
     	inspiration: this.props.inspiration,
     	list: [this.props.inspiration.city.description, this.props.inspiration.city.history, this.props.inspiration.photos, this.props.inspiration.activities],
     	displayPosition: 0,
     	weather: this.props.inspiration.weather
    });
   },

   componentWillReceiveProps: function(nextProps) {
    this.setState({
     	inspiration: nextProps.inspiration,
     	list: [nextProps.inspiration.city.description, nextProps.inspiration.city.history, nextProps.inspiration.photos, nextProps.inspiration.activities],
     	displayPosition: 0,
     	weather: nextProps.inspiration.weather
    });
    
    this.changeSelection(0);
   },

   changeSelection: function(position) {
     var ul = document.getElementById("inspiration-menu-container-medium");
     var selected = document.getElementsByClassName("inspiration-menu-item-medium-select");
     selected[0].classList.remove("inspiration-menu-item-medium-select");

     ul.childNodes[position].classList.add("inspiration-menu-item-medium-select");
   },

   handleListClick: function(e) {
   	 var position = parseInt(e.target.value);
     this.setState({
        displayPosition: position
     });
     this.changeSelection(position);
   },

   render: function() {
   	return(
   		 <div className="clearfix">
   		   <ul id="inspiration-menu-container-medium" className="clearfix">
   		   	 <li className="inspiration-menu-item-medium inspiration-menu-item-medium-select" value="0" onClick={this.handleListClick} >Description</li>
   		   	 <li className="inspiration-menu-item-medium" value="1" onClick={this.handleListClick} >History</li>
   		   	 <li className="inspiration-menu-item-medium" value="2" onClick={this.handleListClick} >Gallery</li>
   		   	 <li className="inspiration-menu-item-medium" value="3" onClick={this.handleListClick} >Activities</li>
   		   </ul>
   		   <DisplayListItemBox displayPosition={this.state.displayPosition} value={this.state.list[this.state.displayPosition]} weather={this.state.weather} />
   		 </div>
   		);
   }
});

module.exports = InspirationMediumBox;