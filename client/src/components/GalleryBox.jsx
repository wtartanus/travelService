var React = require("react");
var PhotoBox = require("./PhotoBox.jsx");

var GalleryBox = React.createClass({
   getInitialState: function() {
   	    return({
          expandGallery: false,
       	  gallery: [],
       	  galleryDispaly: [],
       	  galleryDisplayPosition1: 0,
       	  galleryDisplayPosition2: 1
   	    });
   },

   componentDidMount: function() {
      this.populateGallery();
   },

   populateGallery: function() {
      var gallery = this.props.gallery.map(function(val, index) {
            return <PhotoBox link={val.link} alt={this.props.city} height={400} width={400} key={index} />
      }.bind(this));
      
      this.setState({gallery: gallery});

      var galleryDisplay = [];
      
      galleryDisplay.push(gallery[this.state.galleryDisplayPosition1]);
      galleryDisplay.push(gallery[this.state.galleryDisplayPosition2]);
      
      this.setState({galleryDisplay: galleryDisplay});
   },

   moveGallery: function(up) {
    var galleryDisplay = [];
    if(up) { 
        var position1 = this.state.galleryDisplayPosition1 + 2;
        var position2 = this.state.galleryDisplayPosition2 + 2;
        if(position2 > this.state.gallery.length - 1) {
            position1 = 0;
            position2 = 1;
        } 
      
      galleryDisplay.push(this.state.gallery[position1]);
      galleryDisplay.push(this.state.gallery[position2]);
         
      this.setState({galleryDisplay: galleryDisplay, galleryDisplayPosition1: position1, galleryDisplayPosition2: position2});

    } else {
        var position1 = this.state.galleryDisplayPosition1 -2;
        var position2 = this.state.galleryDisplayPosition2 -2;
        if(position1 < 0) {
           position1 = this.state.gallery.length - 2;
           position2 = this.state.gallery.length - 1;
        }

      galleryDisplay.push(this.state.gallery[position1]);
      galleryDisplay.push(this.state.gallery[position2]);
     
     this.setState({galleryDisplay: galleryDisplay, galleryDisplayPosition1: position1, galleryDisplayPosition2: position2});
    }
   },

   render: function() {
   	return(
   		<div className="inspiration-gallery-container-mobile" style={this.props.visibilityStyle}>
   		  <i className="fa fa-arrow-circle-up fa-5x arrow-gallery-mobile" aria-hidden="true" onClick={() => this.moveGallery(true)} ></i>
   			   {this.state.galleryDisplay}
   		   <i className="fa fa-arrow-circle-down fa-5x arrow-gallery-mobile" aria-hidden="true" onClick={() => this.moveGallery(false)} ></i>
   		</div>
   		);
   }
});

module.exports = GalleryBox;