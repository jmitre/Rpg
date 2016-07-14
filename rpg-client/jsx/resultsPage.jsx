var CurrentPlayers = React.createClass({
  render: function(){
    return(
      <div>
        <h3>You:</h3>
        <label id='currentUser'>Name: {this.props.player.playerName}</label>
        <br/>
        <label id='currentUserClass'>Class: {this.props.player.clas}</label>
        <br/>
        <label id='currentUserLevel'>Level: {this.props.player.level}</label>
        <br/>
        <h3>Enemy:</h3>
        <label id='currentEnemey'>Name: {this.props.enemy.playerName}</label>
        <br/>
        <label id='currentEnemeyClass'>Class: {this.props.player.clas}</label>
        <br/>
        <label id='currentEnemeyLevel'>Level: {this.props.player.level}</label>
      </div>
    )
  }
});

var Results_page = React.createClass({
  getInitialState: function(){
    return {
      player:{},
      enemy: {}
    }
  },
  componentDidMount: function(){
    var theThis = this;

    var myId = document.cookie.split('#')[0]
    var opponentId = document.cookie.split('#')[1]
    $.get('http://localhost:3000/users/'+myId).then(function(res){
      theThis.setState({player:{playerName: res.name, clas:res.character.clas, level:res.character.level, xp:res.character.xp}})

    })
    $.get('http://localhost:3000/users/'+opponentId).then(function(res){
      theThis.setState({enemy: {playerName: res.name, clas:res.character.clas, level:res.character.level, xp:res.character.xp}})
    })
  },
  render: function(){
    return(
      <div>
        <CurrentPlayers player={this.state.player} enemy={this.state.enemy}/>
      </div>
    )
  }
});

ReactDOM.render(<Results_page/>, document.getElementById('results-div'))
