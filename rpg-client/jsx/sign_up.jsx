var Sign_up = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    var data = $( this ).serialize();
    console.log('#####DATA#####', data);
    $.post('http://localhost:3000/sign-up', data, function(){
      window.location.ref = '../html/create-character.html'
    });
  },

  render: function(){
    return(
      <div>
        <field>
          <legend>
            <label>Username:</label>
            <br/>
            <input type='text' name='name' id='username_input'/>
            <br/>
            <label>Password:</label>
            <br/>
            <input type='text' name='password' id='password_input'/>
            <br/>
            <input type='submit' onClick={this.handleClick} id='create_account_button'/>
          </legend>
        </field>
      </div>
    )
  }
});

ReactDOM.render(<Sign_up/>, document.getElementById('sign-up-field'))
