var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {};
    if (name.length > 0){
      this.refs.name.value = "";
      updates.name = name;
    }
    if(message.length > 0 ){
      this.refs.message.value = "";
      updates.message = message
    }
    this.props.onNewupdates(updates);
  },
  render: function(){
    return(
      //onSubmit={this.onButtonCLick}
      <form onSubmit={this.onFormSubmit}>
      <div>
        <input type="text" placeholder="enter name" ref="name"/>
      </div>
      <div>
        <textarea placeholder="enter message" ref="message"/>
      </div>
      <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;