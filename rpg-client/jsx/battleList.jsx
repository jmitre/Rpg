
var Users = React.createClass({
  render: function(){
    console.log('PPPPPRRRRRROOOOOPPP', this.props.name)
      return (
        <div>
          <li>{this.props.name}</li>
        </div>
      )
  }
});

var Battle_List_Table = React.createClass({
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
        this.setState({userList: objectListOfUsers});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  render: function(){
    var users = this.state.userList.map(function(user, indx){
      console.log('INN MAPPPP', user);
      return(
        <Users key={indx} name={user.name}/>
      )
    })
    console.log('STTTTAAAAATTTE', this.state.userList);
    return(
      <div>
        {users}
      </div>
    );
  }
})

ReactDOM.render(<Battle_List_Table/>, document.getElementById('list-of-opponents'))
