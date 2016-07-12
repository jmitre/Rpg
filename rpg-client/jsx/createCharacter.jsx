var CreateCharacter = React.createClass({
  render: function(){
    return(
      <div>
        <h1>{document.cookie}</h1>
      </div>
    )
  }
});

ReactDOM.render(<CreateCharacter/>, document.getElementById('create-character-div'))
