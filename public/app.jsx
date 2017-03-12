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

    if (name.length > 0 && message.length == 0){
      this.refs.name.value = "";
      this.props.onNewName(name);
    }else if(message.length > 0 && name.length == 0){
      this.refs.message.value = "";
      this.props.onNewMessage(message);
    }else{
      this.refs.name.value = "";
      this.refs.message.value = "";
      this.props.onNewName(name);
      this.props.onNewMessage(message);
    }
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
  handleNewName: function(name){ 
    this.setState({
      name:name
    })
  },
  handleNewMessage: function(message){ 
    this.setState({
      message:message
    })
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreaterMessage name={name} message={message}/>
        <GreaterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>        
      </div>
    )
  }
});

var firstName = "Gemma"

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);