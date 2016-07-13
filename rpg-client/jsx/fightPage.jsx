var FightPage = React.createClass({
  getInitialState: function(){
    return({name: ''})
  },
  componentDidMount: function(){
    var theThis = this;
    $.get('http://localhost:3000/users/'+document.cookie).then(function(res){
      theThis.setState({name: res.name})
    })

  },
  render: function(){
    console.log('my name', this.state.name);
    return(
    <div>
    <label id='username'>{this.state.name}</label>
    </div>)
  }
});

ReactDOM.render(<FightPage/>, document.getElementById('fight-page-div'))
