var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage.jsx');
var GreeterForm = require('./components/GreeterForm.jsx');
var Greeter = require('./components/Greeter.jsx');

var firstName = "Gemma"

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);