var FightPage = React.createClass({
  getInitialState: function(){
    return({
      name: '',
      clas: '',
      level: 0,
      xp: 0,
      health: 357.9937665
    })
  },
  componentDidMount: function(){
    var theThis = this;
    $.get('http://localhost:3000/users/'+document.cookie).then(function(res){
      theThis.setState({name: res.name, clas:res.character.clas, level:res.character.level, xp:res.character.xp})
    })

  },
  render: function(){
    if(this.state.clas === 'Ranger'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br><br></br>
      <button id="shoot" type="button">Shoot</button><br></br>
      <button id="flameArrow" type="button">Flame Arrow</button><br></br>
      <button id="iceArrow" type="button">Ice Arrow</button><br></br>
      </div>)
    }
    else if(this.state.clas === 'Warrior'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br><br></br>
      <button id="shoot" type="button">Sword Attack</button><br></br>
      <button id="flameArrow" type="button">Slice</button><br></br>
      <button id="iceArrow" type="button">Eviscerate</button><br></br>
      </div>)
    }
    if(this.state.clas === 'Mage'){
      return(
      <div>
      <label id='username'>Name: {this.state.name}</label><br></br>
      <label id='class'>Class: {this.state.clas}</label><br></br>
      <label id='level'>Level: {this.state.level}</label><br></br>
      <label id ='xp'>XP: {this.state.xp}</label><br></br>
      <label id='health'>Health: {this.state.health}</label><br></br><br></br>
      <button id="shoot" type="button">Wounding Spell</button><br></br>
      <button id="flameArrow" type="button">Parry</button><br></br>
      <button id="iceArrow" type="button">Bash Skull with Staff</button><br></br>
      </div>)
    }
    //console.log('my name', this.state.name);
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
