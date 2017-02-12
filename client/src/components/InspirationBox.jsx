var React = require("react");
var GalleryBox = require("./GalleryBox.jsx");
var PhotoBox = require('./PhotoBox.jsx');

var InspirationBox = React.createClass({
	getInitialState: function() {
       return({
       	 expandView: false,
       	 expandGallery: false,
       	 galleryStyle: {display: "none"},
       	 gallery: [],
       	 galleryDispaly: [],
       	 galleryDisplayPosition1: 0,
       	 galleryDisplayPosition2: 1
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
   
    render: function() {
   	if(this.state.expandView) {
   		return(
   			<div className="inspiration-container-mobile-expand">
   			  <h3 className="inspiration-header" title="Click to see whole overwiev" onClick={this.handleHeaderClick}>{this.props.inspiration.city.city}</h3>
   			  <h4 className="inspiration-gallery-header-mobile" onClick={this.handleGalleryClick}>Gallery</h4>
   			  <GalleryBox visibilityStyle={this.state.galleryStyle} gallery={this.props.inspiration.photos} city={this.props.inspiration.city.city} />
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