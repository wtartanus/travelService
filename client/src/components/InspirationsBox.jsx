var React = require("react");
var Inspiration = require('./InspirationBox.jsx');
var InspirationMediumBox = require('./InspirationMediumBox.jsx');

var Inspirations = React.createClass({
  getInitialState: function() {
     return ({ 
        inspirations: null,
        displayCity: null,
        selectStyle: {color: "white", textShadow: "1px 1px 2px black"}
     });
  },

  componentWillReceiveProps: function(nextProps) {
     this.setState({
      inspirations: nextProps.inspirations, 
      displayCity: nextProps.inspirations[0]
     });
  },

  populateInspiration: function() {
     var inspirations = this.state.inspirations.map(function(val, index) {
     	  return <Inspiration inspiration={val} key={index} insertInspirationInSearch={this.props.insertInspirationInSearch}/>
     }.bind(this));
     return inspirations;
  },

   handleHeaderClick(e) {
    var position = parseInt(e.target.value);
    this.setState({
      displayCity: this.state.inspirations[position]
    });
   },

   populateHeader: function() {
    var heading = this.state.inspirations.map(function(value, index){
          if(value.city === this.state.displayCity.city) {
            return <li className="city-heading-medium" style={this.state.selectStyle} key={index} value={index} onClick={this.handleHeaderClick} >{value.city.city}</li>
          } else {
            return <li className="city-heading-medium" key={index} value={index} onClick={this.handleHeaderClick} >{value.city.city}</li>
          }
    }.bind(this));

    return heading;
   },
   
   render: function() {
      if(this.state.inspirations) {
        if(this.props.width >= 1000) {
          var header = this.populateHeader();
          return(
             <div className="headers-container-medium">
               <ul className="headers-list-medium">
                {header}
               </ul>
               <InspirationMediumBox inspiration={this.state.displayCity} />
             </div>
          );
        } else {
          var inspirations = this.populateInspiration();
          return (
            <div id="inspirations-container" style={this.props.height}>
              {inspirations}
            </div>
          ); 
        }
      } else {
      	return (
          <p>
            <i className="fa fa-spinner" aria-hidden="true"></i>
          </p>
        ); 
      }
   }
});

module.exports = Inspirations;