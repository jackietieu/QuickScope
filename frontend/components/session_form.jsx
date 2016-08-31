import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(){
    setTimeout(() => {this.redirectIfLoggedIn();}, 0);
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      this.props.router.push("/businesses");
    }
  }

  handleClick(e){
    e.preventDefault();
    const user = this.state;
    const action = e.target.id;
    const form = this.props[action];

    form({user});
  }

  guestLogin(e){
    e.preventDefault();
    let guest = "Guest";
    const form = this.props['signup'];
    const date = new Date;
    const currentTime = date.getTime();
    guest = guest.concat(currentTime);

    const user = {
      username: `${guest}`,
      password: "123456"
    };

    form({user});
  }

  update(property){
    return e => { this.setState({[property]: e.currentTarget.value }); };
  }

  render(){
    return (
      <div className="session-form-container">
        <div className="guest-login-container">
          <button className="guest-login-button"
            type="submit"
            id="guestLogin"
            onClick={this.guestLogin.bind(this)}>Guest Login</button>
        </div>

        <form className="session-form">
          <label>
            Username:
            <input type="text"
                   value={this.state.username}
                   onChange={this.update('username')} />
          </label>
          <br />
          <label>
            Password:
            <input type="text"
                   value={this.state.password}
                   onChange={this.update('password')} />
          </label>
        </form>

        <div className="login-signup-buttons">
          <button className="login-button"
                  type="submit"
                  id="login"
                  onClick={this.handleClick}>Login</button>
          <button className="signup-button"
                  type="submit"
                  id="signup"
                  onClick={this.handleClick}>Signup</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
