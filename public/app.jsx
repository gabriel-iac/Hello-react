var GreaterMessage = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Some h1</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
})

var GreaterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
  },
  render: function(){
    return(
      //onSubmit={this.onButtonCLick}
      <form onSubmit={this.onFormSubmit()}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name: "React",
      message: "This is from the component"
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name
    }
  },
  onButtonCLick: function(e){
    e.preventDefault();

    var nameRef = this.refs.name

    var name = nameRef.value;

    nameRef.value = '';

    if (typeof name == 'string' && name.length > 0 ){
      this.setState({
        name: name
      })
    }
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <GreaterMessage/>
        <GreaterForm/>        
      </div>
    )
  }
});

var firstName = "Gemma"

ReactDOM.render(
  <Greeter name={firstName} message="message from props" />,
  document.getElementById('app')
);