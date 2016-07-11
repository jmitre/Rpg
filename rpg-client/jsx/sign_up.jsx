var Sign_up = React.createClass({
  render: function(){
    return(
      <div>
        <field>
          <legend>
            <label>Username:</label>
            <br/>
            <input type='text' id='username_input'/>
            <br/>
            <label>Password:</label>
            <br/>
            <input type='text' id='password_input'/>
            <br/>
            <input type='submit' id='create_account_button'/>
          </legend>
        </field>
      </div>
    )
  }
});

ReactDOM.render(<Sign_up/>, document.getElementById('sign-up-field'))
