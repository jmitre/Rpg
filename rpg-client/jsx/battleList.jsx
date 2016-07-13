var Battle_list = React.createClass({
componentDidMount: function(e){
    $.get('http://localhost:3000/battle_list').then(function(result){
        // console.log('REEEEEEWSSSSSSSSUUUUUAAALLLLTTT',result);

    }, function(){
      console.log("FAILURE");
    });
  },
  render: function(){
    return(
      <div>
        <h1>COOKIE:  {document.cookie}</h1>
        <fieldset>
          <ul>
            <li>{this.props.result}</li>
          </ul>
        </fieldset>
      </div>
    )
  }
});

ReactDOM.render(<Battle_list/>, document.getElementById('list-of-opponents'))
