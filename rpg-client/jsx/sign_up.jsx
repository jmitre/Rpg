var Sign_up = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    var name = $( 'input:text[name=name]' ).val();
    var pass = $( 'input:text[name=password]' ).val();
    var data = {
      name: name,
      password: pass
    };
    console.log('#####DATA#####', name, '--',pass, 'as', data);
    $.post('http://localhost:3000/sign-up', data).then(function(res){
      document.cookie = '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = res + '#';
      // console.log('My cookie', document.cookie);
      console.log('THE RESULT', res);
      if(res !== 'Not Created'){
        window.location.href = 'create-character.html';
      }
      else{
        alert('Enter a username and password')
      }
    }, function(){
      console.log("FAILURE");
    });
  },

  render: function(){
    return(
      <div>
        <form>
          <legend>
            <label>Username:</label>
            <input type='text' name='name' id='username_input'/>
            <br/>
            <label>Password:</label>
            <input type='text' name='password' id='password_input'/>
            <br/>
            <input type='submit' onClick={this.handleClick} id='create_account_button' />
          </legend>
        </form>
      </div>
    )
  }
});

ReactDOM.render(<Sign_up/>, document.getElementById('sign-up-field'))
