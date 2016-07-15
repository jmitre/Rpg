
var Users = React.createClass({
  render: function(){
    // console.log('PPPPPRRRRRROOOOOPPP', this.props.name)
      return (
        // <div className='list'>
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.charclass}</td>
            <td id='levels'>{this.props.level}</td>
            <td><button type='button' id={this.props.index} onClick={this.props.func}>Fight {this.props.name}</button></td>
        </tr>
        // </div>
      )
  }
});

var Battle_List_Table = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    var enemy = this.state.userList[e.target.id];
    document.cookie = document.cookie.split('#')[0] + '#' + enemy._id;
    window.location.href = 'fight-page.html';
  },
  getInitialState: function(){
    return {userList: []}
  },
  componentDidMount: function(){
    $.ajax({
      url: 'http://localhost:3000/battle_list',
      dataType: 'json',
      cache: false,
      type: 'GET',
      success: function(objectListOfUsers) {
        objectListOfUsers = objectListOfUsers.filter(function(user){
          if(user._id === document.cookie.split('#')[0]) return false
          return true;
        });
        this.setState({userList: objectListOfUsers});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  render: function(){
    var parentThis = this;
    var users = this.state.userList.map(function(user, indx){
      return(
        <Users key={indx} index={indx} name={user.name} charclass={user.character.clas} level={user.character.level} func={parentThis.handleClick}/>
      )
    })
    return(
      <table className='tabel table-striped' >
        <thead>
          <tr>
            <th className='Headers'>UserName</th>
            <th className='Headers'>Class</th>
            <th className='Headers' id='levels'>Level</th>
            <th className='Headers'>Fight</th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    );
  }
})

ReactDOM.render(<Battle_List_Table/>, document.getElementById('list-of-opponents'))
