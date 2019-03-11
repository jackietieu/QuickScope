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
      this.props.router.push("/businesses/0");
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
    this.setState({ username: '', password: ''}, () => {
      let counter = 0,
      counter2 = 0;
      const form = this.props['signup'],
      date = new Date,
      currentTime = date.getTime(),
      guest = 'Guest'.concat(currentTime);

      const user = {
        username: `${guest}`,
        password: '123456'
      };

      let interval1 = setInterval(() => {
        if (counter === 5) {
          clearInterval(interval1);
        } else if (counter < 5) {
          this.setState({ username: this.state.username + 'guest'[counter]});
        }
        counter++;
      }, 100)

      setTimeout(
        () => {
          counter2 = 0;
          let interval2 = setInterval(() => {
            if (counter2 === 6) {
              clearInterval(interval2);
            } else if (counter2 < 6) {
              this.setState({ password: this.state.password + user.password[counter2]});
            }
            counter2++;
          }, 100)
        }
        , 700)

        setTimeout(() => form({user}), 1500);
    })
  }

  update(property){
    return e => { this.setState({[property]: e.currentTarget.value }); };
  }

  render(){
    return (
      <div className="session-form-container">
        <div className="guest-login-container">
          <button 
            className="guest-login-button waves-effect waves-light btn"
            type="submit"
            id="guestLogin"
            onClick={this.guestLogin.bind(this)}>GUEST LOGIN</button>
        </div>

        <form className="session-form">
          <label>
            <input 
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <label>
            <br />
            <input 
              type="text"
              placeholder="Password"
              value={this.state.password.split('').map(char => '*').join('')}
              onChange={this.update('password')} />
          </label>
        </form>

        <div className="login-signup-buttons">
          <button 
            className="login-button waves-effect waves-light btn"
            type="submit"
            id="login"
            onClick={this.handleClick}>LOGIN</button>
          <button 
            className="signup-button waves-effect waves-light btn"
            type="submit"
            id="signup"
            onClick={this.handleClick}>SIGNUP</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
