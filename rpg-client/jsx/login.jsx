var Sign_in = React.createClass({
  render: function(){
    return(
      <div>
        <field>
          <legend>
            <input type='text' id='username_input'/>
            <br/>
            <input type='text' id='password_input'/>
          </legend>
        </field>
      </div>
    )
  }
});

ReactDOM.render(<Sign_in/>, document.getElementById('sign-in-field'))
