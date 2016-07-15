var CurrentPlayers = React.createClass({
  toBattleList: function(){
    window.location.href = 'battleList.html'
  },
  render: function(){
    var outcome = document.cookie.split('#')[2];
    if(outcome === 'w') {
      outcome = 'won';
    }
    if(outcome ==='l') outcome='lost'
    return(
      <div>
        <h1 id='fightOutcome'>You {outcome}</h1>
        <h3>You:</h3>
        <label id='currentUser'>Name: {this.props.player.playerName}</label>
        <br/>
        <label id='currentUserClass'>Class: {this.props.player.clas}</label>
        <br/>
        <label id='currentUserLevel'>Level: {this.props.player.level}</label>
        <br/>
        <label id='currentUserXp'>XP: {this.props.player.xp}</label>
        <br/>
        <h3>Enemy:</h3>
        <label id='currentEnemey'>Name: {this.props.enemy.playerName}</label>
        <br/>
        <label id='currentEnemeyClass'>Class: {this.props.enemy.clas}</label>
        <br/>
        <label id='currentEnemeyLevel'>Level: {this.props.enemy.level}</label>
        <br/>
        <label id='currentEnemyXp'>XP: {this.props.enemy.xp}</label>
        <br/>
        <button id='toBattle' onClick={this.toBattleList}>Prepare for another battle</button>
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
  sendxp: function(){
    $.post('http://localhost:3000/users/xp/' + document.cookie.split('#')[0], {xp: 100}).then(function(res){
      console.log('...',res);
    });
  },
  componentDidMount: function(){
    var theThis = this;
    if(document.cookie.split('#')[2] === 'w') this.sendxp();

    var myId = document.cookie.split('#')[0]
    var opponentId = document.cookie.split('#')[1]
    $.get('http://localhost:3000/users/'+myId).then(function(res){
      // console.log("MY CHAR", res);
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
