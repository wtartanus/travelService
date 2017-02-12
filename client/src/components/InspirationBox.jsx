var React = require("react");
var GalleryBox = require("./GalleryBox.jsx");
var DescriptionBox = require("./DescriptionBox.jsx");
var HistoryBox = require("./HistoryBox.jsx");
var ThingsToDoBox = require("./ThingsToDoBox.jsx");

var InspirationBox = React.createClass({
	getInitialState: function() {
       return({
       	 expandView: false,
       	 expandDescription: false,
       	 descriptionStyle: {display: "none"},
       	 expandHistory: false,
       	 historyStyle: {display: "none"},
       	 expandGallery: false,
       	 galleryStyle: {display: "none"},
       	 expandThingsToDo: false,
       	 thingsToDoStyle: {display: "none"}
       });
	},

	handleHeaderClick: function() {
		this.setState({expandView: !this.state.expandView});
	},

	handleGalleryClick: function() {
       if(this.state.expandGallery) {
            this.setState({
            	expandGallery: !this.state.expandGallery, 
            	galleryStyle: {display: "none"}
            });
       } else {
            this.setState({
            	expandGallery: !this.state.expandGallery, 
            	galleryStyle: {display: "initial"}
            });
       }
  	},

  	handleDescriptionClick: function() {
       if(this.state.expandDescription) {
            this.setState({
            	expandDescription: !this.state.expandDescription, 
            	descriptionStyle: {display: "none"}
            });
       } else {
            this.setState({
            	expandDescription: !this.state.expandDescription, 
            	descriptionStyle: {display: "initial"}
            });
       }
  	},

  	handleHistoryClick: function() {
       if(this.state.expandHistory) {
            this.setState({
            	expandHistory: !this.state.expandHistory, 
            	historyStyle: {display: "none"}
            });
       } else {
            this.setState({
            	expandHistory: !this.state.expandHistory, 
            	historyStyle: {display: "initial"}
            });
       }
  	},

  	handleThingsToDoClick: function() {
  		console.log("!!!");
       if(this.state.expandThingsToDo) {
            this.setState({
            	expandThingsToDo: !this.state.expandThingsToDo, 
            	thingsToDoStyle: {display: "none"}
            });
       } else {
            this.setState({
            	expandThingsToDo: !this.state.expandThingsToDo, 
            	thingsToDoStyle: {display: "initial"}
            });
       }
  	},
   
    render: function() {
   	if(this.state.expandView) {
   		return(
   			<div className="inspiration-container-mobile-expand">
   			  <h3 className="inspiration-header" title="Click to see whole overwiev" onClick={this.handleHeaderClick}>{this.props.inspiration.city.city}</h3>

   			  <h4 className="inspiration-gallery-header-mobile" onClick={this.handleDescriptionClick}>Description</h4>
   			  <DescriptionBox visibilityStyle={this.state.descriptionStyle} description={this.props.inspiration.city.description} />

   			  <h4 className="inspiration-gallery-header-mobile" onClick={this.handleHistoryClick}>History</h4>
   			  <HistoryBox  visibilityStyle={this.state.historyStyle} history={this.props.inspiration.city.history} />

   			  <h4 className="inspiration-gallery-header-mobile" onClick={this.handleGalleryClick}>Gallery</h4>
   			  <GalleryBox visibilityStyle={this.state.galleryStyle} gallery={this.props.inspiration.photos} city={this.props.inspiration.city.city} />

   			  <h4 className="inspiration-thingstodo-header-mobile" onClick={this.handleThingsToDoClick} >Things To Do</h4>
   			  <ThingsToDoBox visibilityStyle={this.state.thingsToDoStyle} activities={this.props.inspiration.activities} />
   			</div>
   			);
   	} else {
        return(
         <div className="inspiration-container">
           <h3 className="inspiration-header" title="Click to see whole overwiev" onClick={this.handleHeaderClick}>{this.props.inspiration.city.city}</h3>
           <p className="inspiration-description-mobile">{this.props.inspiration.city.description}</p>
           <img src={this.props.inspiration.photos[0].link} alt="Smiley face" height="220" width="220" />
         </div>
   		);
   	}
   }
});

module.exports = InspirationBox;