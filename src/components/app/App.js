import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";

import LoginForm from "../loginForm/loginForm";
import RegistrationForm from "../registrationForm/registrationForm";
import UserList from "../usersList/userList";
import './App.css';

class App extends Component {
    state = {
        data: [
            { name: "Mark", surname: "Otto", email: "otto.m@gmail.com", password: "1", regDate: "10.02.2022", lastSession: "15:03 10.02.2022", id: 1, blocked: false, isAuth: true, checked: false },
            { name: "Jacob", surname: "Thornton", email: "jac@gmail.com", password: "1", regDate: "09.02.2022", lastSession: "12:01 10.02.2022", id: 2, blocked: false, isAuth: false, checked: false },
            { name: "Larry", surname: "Bird", email: "bird12@gmail.com	", password: "1", regDate: "10.02.2022", lastSession: "18:12 10.02.2022", id: 3, blocked: false, isAuth: false, checked: false }
        ]
    }
    maxId = 4;

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

    // getDate = () => {
    //     const newDate = new Date();
    //     const hours = newDate.getHours();
    //     const minutes = newDate.getMinutes();
    //     const day = newDate.getDate();
    //     const month = newDate.getMonth() + 1;
    //     const year = newDate.getFullYear();
    //     let currentDate = `${hours}:${minutes} ${day}.${month}.${year}`
    //     return currentDate;
    // }

    addUser = (e, currentDate) => {
        e.preventDefault();
        console.log(currentDate);
        let target = e.target
        console.log(e.target.name.value);
        const newUser = {
            name: target.name.value,
            surname: target.surname.value,
            email: target.email.value,
            password: target.password.value,
            regDate: currentDate,
            lastSession: null,
            id: this.maxId++,
            blocked: false,
            isAuth: false,
            checked: false,
        }
        this.setState(({ data }) => {
            const newUsersData = [...data, newUser];
            return {
                data: newUsersData
            }
        })
    }

    onCheckboxChange = (e) => {
        const checkboxValue = e.target.id;
        this.setState(({ data }) => {
            if (checkboxValue === "all") {
                console.log(checkboxValue);
                data.map(item => {
                    return { ...item, checked: true }
                })
            } else {
                const dataChecked = data.map(item =>
                    +checkboxValue === item.id ? { ...item, checked: !item.checked } : item);
                return {
                    data: dataChecked
                }
            }
        })
        // console.log(this.state.data);
    }

    onToggleBlocked = (e) => {
        this.setState(({ data }) => {
            const onUnblockItem = data.map(item => {
                if (e.target.name === "block" && item.checked) {
                    item.blocked = true;
                } if (e.target.name === "unBlock" && item.checked) {
                    item.blocked = false;
                }
                return item;
            })
            return {
                data: onUnblockItem
            }
        })
    }

    onDelete = () => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.checked !== true)
            }

        })
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
                            <RegistrationForm
                                addUser={this.addUser} />
                        </Route>
                        <Route exact path="/userslist">
                            <UserList
                                createUsersList={data}
                                onCheckboxChange={this.onCheckboxChange}
                                onToggleBlocked={this.onToggleBlocked}
                                onDelete={this.onDelete} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
