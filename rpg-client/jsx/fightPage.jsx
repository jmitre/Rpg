var Buttons = React.createClass({
  render: function(){
    return
  }
})
var FightPage = React.createClass({
  getInitialState: function(){
    return({
      name: '',
      clas: '',
      level: 0,
      xp: 0,
      health: 400,
      opponentName: '',
      opponentHealth: 250,
      opponentClass: '',
      opponentLevel: 0,
      energyBar: 20,
      opponentAttack: 10
    })
  },
  componentDidMount: function(){
    var theThis = this;

    var myId = document.cookie.split('#')[0]
    var opponentId = document.cookie.split('#')[1]
    $.get('http://localhost:3000/users/'+myId).then(function(res){
      theThis.setState({name: res.name, clas:res.character.clas, level:res.character.level, xp:res.character.xp})

    })
    $.get('http://localhost:3000/users/'+opponentId).then(function(res){
      theThis.setState({opponentName: res.name, opponentClass:res.character.clas, opponentLevel:res.character.level})
    })


  },
  checkIfDead: function(health){
    if(health <= 0){
      health = 0
      document.cookie = document.cookie.split('#')[0] + '#' + document.cookie.split('#')[1] + '#' + 'l'
      window.location.href = 'results_page.html';
      alert("You Lose! HAHA");
    }
  },
  checkIfWin: function(userHealth, opponentHealth){
    if(opponentHealth <= 0 && userHealth > 0){
      opponentHealth = 0
      document.cookie = document.cookie.split('#')[0] + '#' + document.cookie.split('#')[1] + '#' + 'w'
      window.location.href = 'results_page.html';
      alert("You Win! Congrats");
    }
  },

  low: function(){
    var attackAmount = this.state.level * 2
    this.state.opponentHealth -= attackAmount
    this.state.energyBar -= 10
    this.enemyAttack()
    this.state.energyBar += 20
    this.enemyAttack
    this.state.health -= this.state.opponentAttack
    this.checkIfDead(this.state.health)
    this.checkIfWin(this.state.health, this.state.opponentHealth)
    this.forceUpdate()
  },
  mid: function(){
    var attackAmount = this.state.level * 3
    this.state.opponentHealth -= attackAmount
    if(!(this.state.energyBar < 30)){
      this.state.energyBar -= 30
      this.enemyAttack()
      this.state.energyBar += 20
      this.enemyAttack
      this.state.health -= this.state.opponentAttack
      this.checkIfDead(this.state.health)
      this.checkIfWin(this.state.health, this.state.opponentHealth)
      this.forceUpdate()
    }else{
    alert("Not enough energy, at least 30 required")
  }
  },
  high: function(){
    var attackAmount = this.state.level * 4
    this.state.opponentHealth -= attackAmount
    if(!(this.state.energyBar < 50)){
      this.state.energyBar -= 50
      this.enemyAttack()
      this.state.energyBar += 20
      this.enemyAttack
      this.state.health -= this.state.opponentAttack
      this.checkIfDead(this.state.health)
      this.checkIfWin(this.state.health, this.state.opponentHealth)
      this.forceUpdate()
    }else{
    alert("Not enough energy, at least 50 required")
   }
  },

  enemyAttack: function(){
    this.state.opponentAttack = Math.floor(Math.random() * 10)
  },
  render: function(){
    // if(this.state.health)
    var percentage = (this.state.health / 16) + '%'
    var points = (this.state.energyBar / 10) + '%'
    if(this.state.clas === 'Ranger'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br>
      <div className="progress-bar progress-bar-striped active" style={{width : percentage}}>
        <span className="sr-only">45% Complete</span>
      </div><br></br><br></br>
      <label id='energy'>Energy Bar: {this.state.energyBar}</label><br></br>
        <div  id='energyBar'className="progress-bar progress-bar-striped active" style={{width : points}}>
          <span className="sr-only">45% Complete</span>
        </div><br></br><br></br>
      <label id="ten">Requires 10 Energy Points</label>
      <button id="shoot" type="button" onClick={this.low}>Shoot</button><br></br>
      <label id="ten">Requires 30 Energy Points</label>
      <button id="flameArrow" type="button" onClick={this.mid}>Flame Arrow</button><br></br>
      <label id="ten">Requires 50 Energy Points</label>
      <button id="iceArrow" type="button" onClick={this.high}>Ice Arrow</button><br></br><br></br>
      <h2>Opponent:</h2>
      <label id='opponentName'>Name: {this.state.opponentName}</label><br></br>
      <label id='opponentClass'>Class: {this.state.opponentClass}</label><br></br>
      <label id='opponentHealth'>Health: {this.state.opponentHealth}</label><br></br>
      <label id="opponentLevel">Level: {this.state.opponentLevel}</label>
      </div>)
    }
    else if(this.state.clas === 'Warrior'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br>
      <label id='energy'>Energy Bar: {this.state.energyBar}</label><br></br><br></br>
      <label id="ten">Requires 10 Energy Points</label>
      <button id="sword" type="button" onClick={this.low}>Sword Attack</button><br></br>
      <label id="ten">Requires 30 Energy Points</label>
      <button id="slice" type="button" onClick={this.mid}>Slice</button><br></br>
      <label id="ten">Requires 50 Energy Points</label>
      <button id="eviscerate" type="button" onClick={this.high}>Eviscerate</button><br></br><br></br>
      <h2>Opponent:</h2>
      <label id='opponentName'>Name: {this.state.opponentName}</label><br></br>
      <label id='opponentClass'>Class: {this.state.opponentClass}</label><br></br>
      <label id='opponentHealth'>Health: {this.state.opponentHealth}</label><br></br>
      <label id="opponentLevel">Level: {this.state.opponentLevel}</label>
      </div>)
    }
    if(this.state.clas === 'Mage'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br>
      <label id='energy'>Energy Bar: {this.state.energyBar}</label><br></br><br></br>
      <label id="ten">Requires 10 Energy Points</label>
      <button id="wounding" type="button" onClick={this.low}>Wounding Spell</button><br></br>
      <label id="ten">Requires 30 Energy Points</label>
      <button id="parry" type="button" onClick={this.mid}>Parry</button><br></br>
      <label id="ten">Requires 50 Energy Points</label>
      <button id="bash" type="button" onClick={this.high}>Bash Skull with Staff</button><br></br><br></br>
      <h2>Opponent:</h2>
      <label id='opponentName'>Name: {this.state.opponentName}</label><br></br>
      <label id='opponentClass'>Class: {this.state.opponentClass}</label><br></br>
      <label id='opponentHealth'>Health: {this.state.opponentHealth}</label><br></br>
      <label id="opponentLevel">Level: {this.state.opponentLevel}</label>
      </div>)
    }

    return(
    <div>
    <label id='username'>Name: {this.state.name}</label><br></br>
    <label>Class: {this.state.clas}</label><br></br>
    <label>Level: {this.state.level}</label><br></br>
    <label>XP: {this.state.xp}</label>
    </div>)
  }
});

ReactDOM.render(<FightPage/>, document.getElementById('fight-page-div'))
