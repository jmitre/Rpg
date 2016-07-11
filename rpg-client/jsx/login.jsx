var Sign_in = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Log In Page
        </h1>
        <field>
          <legend>
            <input type='text' id='username_input'>
            <input type='text' id='password_input'>
          </legend>
        </field>
      </div>
    )
  }
});

ReactDOM.render(<Sign_in/>, document.getElementById('sign-up-field'))
