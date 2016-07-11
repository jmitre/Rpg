var Sign_up = React.createClass({
  render: function(){
    return(
      <div>
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

ReactDOM.render(<Sign_up/>, document.getElementById('sign-up-field'))
