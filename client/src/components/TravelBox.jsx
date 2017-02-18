var React = require('react');
var SearchBox = require('./SearchBox.jsx');
var NavBox = require('./NavBox.jsx');
var Inspirations = require('./InspirationsBox.jsx');


var Travel = React.createClass({

  getInitialState: function() {
    return { searchItem: {}, windowSize: {} }
  },

  componentWillMount: function() {
    this.getWindowSize();
    this.getData(this.props.url);
  },

  getWindowSize: function() {
    var windowW = window.innerWidth;
    var windowH = window.innerHeight;
    var size = {width: windowW, heigth: windowH };
    var heightStyle = {height: windowH.toString() + "px"};
    this.setState({windowSize: size, heightStyle: heightStyle});
  },

  setSearchItem: function(value) {
    var wojtek = value.destination;
    this.setState({searchItem: value}, function() {
      
    });
    
  },

  getData: function(url) {
   var request = new XMLHttpRequest();
   request.open("GET", url + "travel-guide/data/inspirations");
   request.onload = function() {
     if(request.status === 200 ) {
       var result = JSON.parse(request.responseText);
       this.setState({inspirations: result });
       console.log(this.state.inspirations);
     } 
   }.bind(this);

   request.send(null);
  },


  render: function() {
    if(this.state.windowSize.width >= 1650) {
      return (
        <div>  
          <div id="landing-container" style={this.state.heightStyle}>
            <div id="photo-1" className="images"><span className="name">Bali, Indonesia</span><i className="fa fa-heart heart" aria-hidden="true"></i><i className="fa fa-star star star" aria-hidden="true"></i><i className="fa fa-star star star-1" aria-hidden="true"></i><i className="fa fa-star star star-2" aria-hidden="true"></i><i className="fa fa-star star star-3" aria-hidden="true"></i></div>
            <div id="photo-2" className="images"><span className="name">Barcelona, Spain</span><i className="fa fa-heart heart" aria-hidden="true"></i><i className="fa fa-star star star" aria-hidden="true"></i><i className="fa fa-star star star-1" aria-hidden="true"></i><i className="fa fa-star star star-2" aria-hidden="true"></i><i className="fa fa-star star star-3" aria-hidden="true"></i></div>
            <div id="photo-3" className="images"><span className="name">Cracow, Poland</span><i className="fa fa-heart heart" aria-hidden="true"></i><i className="fa fa-star star star" aria-hidden="true"></i><i className="fa fa-star star star-1" aria-hidden="true"></i><i className="fa fa-star star star-2" aria-hidden="true"></i><i className="fa fa-star star star-3" aria-hidden="true"></i></div>
            <div id="photo-4" className="images"><span className="name">Protaras, Cyprus</span><i className="fa fa-heart heart" aria-hidden="true"></i><i className="fa fa-star star star" aria-hidden="true"></i><i className="fa fa-star star star-1" aria-hidden="true"></i><i className="fa fa-star star star-2" aria-hidden="true"></i><i className="fa fa-star star star-3" aria-hidden="true"></i></div>
            <div id="photo-5" className="images"><span className="name">New York, US</span><i className="fa fa-heart heart" aria-hidden="true"></i><i className="fa fa-star star star" aria-hidden="true"></i><i className="fa fa-star star star-1" aria-hidden="true"></i><i className="fa fa-star star star-2" aria-hidden="true"></i><i className="fa fa-star star star-3" aria-hidden="true"></i></div>
            <SearchBox setState={this.setState} setSearch={this.setSearchItem}/>
            <div id="logo"><span id="travel-word">Travel</span> <span id="guide-word">Guide</span></div>
            <p id="slogan">Everything you looking for in 1 place.</p>
            <NavBox windowSize={this.state.windowSize} />
          </div>
          <Inspirations height={this.state.heightStyle} inspirations={this.state.inspirations} />
        </div>
        );
    } else if(this.state.windowSize.width >= 1000) {
      return(
         <div>  
          <div id="landing-container" style={this.state.heightStyle}>
            <h1 id="logo"><span id="travel-word">Travel</span> <span id="guide-word">Guide</span></h1>
            <p id="slogan">Everything you looking for in 1 place.</p>
            <SearchBox setState={this.setState} setSearch={this.setSearchItem}/>
            <NavBox windowSize={0}/>
          </div>
          <Inspirations height={this.state.heightStyle} inspirations={this.state.inspirations} width={this.state.windowSize.width} />
        </div>
      );
    } else {
         return (
         <div>
          <div id="landing-container">
            <NavBox windowSize={this.state.windowSize}/>
            <h1 id="logo"><span id="travel-word">Travel</span> <span id="guide-word">Guide</span></h1>
            <p id="slogan">Everything you looking for in 1 place.</p>
          </div>
          <SearchBox setState={this.setState} setSearch={this.setSearchItem}/>
          <Inspirations height={this.state.heightStyle} inspirations={this.state.inspirations} />
        </div>
      );
    }
  }
});

module.exports = Travel;