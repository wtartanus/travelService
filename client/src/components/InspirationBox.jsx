var React = require("react");
var PhotoBox = require('./PhotoBox.jsx');
var InspirationBox = React.createClass({
	getInitialState: function() {
       return({
       	 expandView: false,
       	 expandGallery: false,
       	 galleryStyle: {display: "none"}
       });
	},

	handleHeaderClick: function() {
		console.log("wojtek");
		this.setState({expandView: !this.state.expandView});
	},

	handleGalleryClick: function() {
       if(this.state.expandGallery) {
            this.setState({
            	expandGallery: !this.state.expandGallery, 
            	galleryStyle: {display: "initial"}
            });
       } else {
            this.setState({
            	expandGallery: !this.state.expandGallery, 
            	galleryStyle: {display: "none"}
            });
       }
  	},

	populateGallery: function() {
      var gallery = this.props.inspiration.photos.map(function(val, index) {
            return <PhotoBox link={val.link} alt={this.props.inspiration.city.city} height={200} width={200} key={index} />
      }.bind(this));

      return gallery;
	},
   
    render: function() {
   	if(this.state.expandView) {
   		var gallery = this.populateGallery();
   		return(
   			<div className="inspiration-container-mobile-expand">
   			  <h3 className="inspiration-header" title="Click to see whole overwiev" onClick={this.handleHeaderClick}>{this.props.inspiration.city.city}</h3>
   			  <h4 className="inspiration-gallery-header-mobile" onClick={this.handleGalleryClick}>Gallery</h4>
   			   <div className="inspiration-gallery-container-mobile" style={this.state.galleryStyle}>
   			   	 {gallery}
   			   </div>
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