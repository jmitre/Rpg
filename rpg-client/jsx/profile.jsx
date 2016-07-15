var CurrentPlayers = React.createClass({
  toBattleList: function(){
    window.location.href = 'battleList.html'
  },
  render: function(){
    console.log('YOUR LEVEL', this.props.player.level);
  return(
    <div style={{marginLeft: '2.5vw'}}>
      <h3>Your character:</h3>
      <label id='currentUser'>Name: {this.props.player.playerName}</label>
      <br/>
      <label id='currentUserClass'>Class: {this.props.player.clas}</label>
      <br/>
      <label id='currentUserLevel'>Level: {this.props.player.level}</label>
      <br/>
      <label id='currentUserXp'>XP: {this.props.player.xp}/{(this.props.player.level- 0)*100}</label>
    </div>
  )
  }
});

var Profile_page = React.createClass({
  getInitialState: function(){
    return {
      player:{}
    }
  },
  componentDidMount: function(){
    var theThis = this;

    var myId = document.cookie.split('#')[0]
    $.get('http://localhost:3000/users/'+myId).then(function(res){
      console.log("MY CHAR", res);
      theThis.setState({player:{playerName: res.name, clas:res.character.clas, level:res.character.level, xp:res.character.xp}})
    })
  },
  render: function(){
    return(
      <div>
        <CurrentPlayers player={this.state.player} />
      </div>
    )
  }
});

ReactDOM.render(<Profile_page/>, document.getElementById('profile-div'))
