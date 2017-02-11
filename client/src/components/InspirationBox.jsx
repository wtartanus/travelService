var React = require("react");
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

	componentDidMount: function() {
        this.populateGallery();
	},

	handleHeaderClick: function() {
		var view = this.state.expandView;
		view = !view;
		this.setState({expandView: view});
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

	populateGallery: function() {
      var gallery = this.props.inspiration.photos.map(function(val, index) {
            return <PhotoBox link={val.link} alt={this.props.inspiration.city.city} height={400} width={400} key={index} />
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
      console.log(position1,position2);
      galleryDisplay.push(this.state.gallery[position1]);
      galleryDisplay.push(this.state.gallery[position2]);
     
     this.setState({galleryDisplay: galleryDisplay, galleryDisplayPosition1: position1, galleryDisplayPosition2: position2});
     }
	},
   
    render: function() {
   	if(this.state.expandView) {
   		return(
   			<div className="inspiration-container-mobile-expand">
   			  <h3 className="inspiration-header" title="Click to see whole overwiev" onClick={this.handleHeaderClick}>{this.props.inspiration.city.city}</h3>
   			  <h4 className="inspiration-gallery-header-mobile" onClick={this.handleGalleryClick}>Gallery</h4>
   			   <div className="inspiration-gallery-container-mobile" style={this.state.galleryStyle}>
   			     <i className="fa fa-arrow-circle-up fa-5x arrow-gallery-mobile" aria-hidden="true" onClick={() => this.moveGallery(true)} ></i>
   			   	 {this.state.galleryDisplay}
   			   	 <i className="fa fa-arrow-circle-down fa-5x arrow-gallery-mobile" aria-hidden="true" onClick={() => this.moveGallery(false)} ></i>
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