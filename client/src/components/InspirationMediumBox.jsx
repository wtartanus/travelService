var React = require("react");
var DisplayListItemBox = require("./DisplayListItemBox.jsx");

var InspirationMediumBox = React.createClass({
   getInitialState: function() {
     return({
     	inspiration: null,
     	list: [],
     	displayPosition: 0
     });

   },

   componentDidMount: function() {
       this.setState({
     	inspiration: this.props.inspiration,
     	list: [this.props.inspiration.city.description, this.props.inspiration.city.history, this.props.inspiration.photos, this.props.inspiration.activities],
     	displayPosition: 0
     });
   },

   componentWillReceiveProps: function(nextProps) {
     this.setState({
     	inspiration: nextProps.inspiration,
     	list: [nextProps.inspiration.city.description, nextProps.inspiration.city.history, nextProps.inspiration.photos, nextProps.inspiration.activities],
     	displayPosition: 0
     });
   },

   handleListClick: function(e) {
   	 var position = parseInt(e.target.value);
     this.setState({
        displayPosition: position
     });
   },

   render: function() {
   	return(
   		 <div>
   		   <ul className="inspiration-menu-container-medium clearfix">
   		   	 <li className="inspiration-menu-item-medium" value="0" onClick={this.handleListClick} >Description</li>
   		   	 <li className="inspiration-menu-item-medium" value="1" onClick={this.handleListClick} >History</li>
   		   	 <li className="inspiration-menu-item-medium" value="2" onClick={this.handleListClick} >Gallery</li>
   		   	 <li className="inspiration-menu-item-medium" value="3" onClick={this.handleListClick} >Activities</li>
   		   </ul>
   		   <DisplayListItemBox displayPosition={this.state.displayPosition} value={this.state.list[this.state.displayPosition]} />
   		 </div>
   		);
   }
});

module.exports = InspirationMediumBox;