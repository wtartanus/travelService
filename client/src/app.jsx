var React = require('react');
var ReactDOM = require('react-dom');
var TravelBox = require('./components/TravelBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <TravelBox/>,
    document.getElementById('app')
  );
}
