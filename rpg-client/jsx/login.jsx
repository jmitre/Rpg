var Sign_in = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    var name = $( 'input:text[name=name]' ).val();
    var pass = $( 'input:text[name=password]' ).val();
    var data = {
      name: name,
      password: pass
    };
    $.post('http://localhost:3000/login', data).then(function(result){
      console.log(result);
      if(result.LoggedIn !== false){
        document.cookie = '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = result.dataID;
        window.location.href = 'battleList.html';
      }
    }, function(){
      console.log("FAILURE");
    });
  },
  signUp: function(e){
    e.preventDefault();
    window.location.href = 'sign-up.html'
  },
  render: function(){
    return(
      <div className="text-center">
        <form>
          <legend>
            <label >Username:</label>
            <input type='text' name='name' id='username_input'/>
            <br/>
            <label>Password:</label>
            <input type='text' name='password' id='password_input'/>
          </legend>
            <input type='submit' className='login' value='Login' onClick={this.handleClick} id='submit'/>
            <input type='submit' className='login' value='SignUp' onClick={this.signUp} id='submit'/>
        </form>
      </div>
    )
  }
});

ReactDOM.render(<Sign_in/>, document.getElementById('sign-in-field'))
