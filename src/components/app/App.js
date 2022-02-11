import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";

import LoginForm from "../loginForm/loginForm";
import RegistrationForm from "../registrationForm/registrationForm";
import UserList from "../usersList/userList";
import './App.css';

class App extends Component {
  state = {
    data: [
      { name: "Mark", surname: "Otto", email: "otto.m@gmail.com", password: "1", regDate: "10.02.2022", lastSession: "15:03 10.02.2022", id: 1, blocked: false, isAuth: true, redirectToUserslist: false },
      { name: "Jacob", surname: "Jacob", email: "jac@gmail.com", password: "1", regDate: "09.02.2022", lastSession: "12:01 10.02.2022", id: 2, blocked: false, isAuth: false, redirectToUserslist: false },
      { name: "Larry", surname: "Bird", email: "bird12@gmail.com	", password: "1", regDate: "10.02.2022", lastSession: "18:12 10.02.2022", id: 3, blocked: false, isAuth: false, redirectToUserslist: false }
    ]
  }

  checkLoginData = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    console.log(mail);
    console.log(pass);

    this.state.data.forEach(item => {
      if (item.email === mail && item.password === pass) {

        item.isAuth = true;
        return this.loggedIn()
      }
    })
    // return this.loggedIn()
    // console.log(this.state.data);
  }

  loggedIn = () => {

    return console.log("success");
    // (
    //   <Redirect to="/userslist" />
    // )
  }

  render() {

    // if (this.props.isAuth) return <Redirect to={"/userslist"} />

    const { data } = this.state;
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <LoginForm
                checkLoginData={this.checkLoginData} />
              {/* {isAuth ? <Redirect to="/userlist" /> : <LoginForm checkLoginData={this.checkLoginData} />} */}
            </Route>
            <Route exact path="/register">
              <RegistrationForm />
            </Route>
            <Route exact path="/userslist">
              <UserList createUsersList={data} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
