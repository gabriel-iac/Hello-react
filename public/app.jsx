var GreaterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
})

var GreaterForm = React.createClass({
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
        <input type="text" placeholder="enter name" ref="name"/>
        <input type="textarea" placeholder="enter message" ref="message"/>
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name: "React",
      message: "This is default message"
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleUpdates: function(updates){ 
    this.setState(updates)
  },

  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreaterMessage name={name} message={message}/>
        <GreaterForm onNewupdates={this.handleUpdates}/>        
      </div>
    )
  }
});

var firstName = "Gemma"

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);