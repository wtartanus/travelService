var React = require("react");
var GalleryBox = require("./GalleryBox.jsx");
var DescriptionBox = require("./DescriptionBox.jsx");
var HistoryBox = require("./HistoryBox.jsx");
var ThingsToDoBox = require("./ThingsToDoBox.jsx");
var WeatherBox = require("./WeatherBox.jsx");

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
             
             <div className="a-h-mobile" >
   			  <h4 className="inspiration-description-header-mobile" onClick={this.handleDescriptionClick}><i className="fa fa-file-text-o icon-color-m-headers" aria-hidden="true"></i> Description</h4>
   			  <DescriptionBox visibilityStyle={this.state.descriptionStyle} description={this.props.inspiration.city.description} />
             </div>

             <div className="a-h-mobile" >
   			  <h4 className="inspiration-history-header-mobile" onClick={this.handleHistoryClick}><i className="fa fa-history icon-color-m-headers" aria-hidden="true"></i> History</h4>
   			  <HistoryBox  visibilityStyle={this.state.historyStyle} history={this.props.inspiration.city.history} />
             </div>

             <div className="a-h-mobile" >
   			  <h4 className="inspiration-gallery-header-mobile" onClick={this.handleGalleryClick}><i className="fa fa-picture-o icon-color-m-headers" aria-hidden="true"></i> Gallery</h4>
   			  <GalleryBox visibilityStyle={this.state.galleryStyle} gallery={this.props.inspiration.photos} city={this.props.inspiration.city.city} />
             </div>

             <div className="a-h-mobile" >
   			  <h4 className="inspiration-activities-header-mobile" onClick={this.handleThingsToDoClick} ><i className="fa fa-bicycle icon-color-m-headers" aria-hidden="true"></i> Activities</h4>
   			  <ThingsToDoBox visibilityStyle={this.state.thingsToDoStyle} activities={this.props.inspiration.activities} />
             </div>

             <div className="a-h-mobile">
   			  <h4 className="inspiration-weather-header-mobile"><i className="fa fa-thermometer-empty icon-color-m-headers" aria-hidden="true"></i> Average Temperature</h4>
   			  <WeatherBox weather={this.props.inspiration.weather} />
   			 </div>
   			</div>
   			);
   	} else {
        return(
         <div className="inspiration-container">
           <h3 className="inspiration-header" title="Click to see whole overwiev" onClick={this.handleHeaderClick}>{this.props.inspiration.city.city}</h3>
           <p className="inspiration-description-mobile">{this.props.inspiration.city.description}</p>
           <img className="city-photo-mobile" src={this.props.inspiration.photos[0].link} alt="Smiley face" />
         </div>
   		);
   	}
   }
});

module.exports = InspirationBox;