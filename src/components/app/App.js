import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import LoginForm from "../loginForm/loginForm";
import RegistrationForm from "../registrationForm/registrationForm";
import UserList from "../usersList/userList";
import GetDate from "../getDate/getDate";
import './App.css';

class App extends Component {
    state = {
        data: [
            { name: "Mark", surname: "Otto", email: "otto.m@gmail.com", password: "1", regDate: "10.02.2022", lastSession: "15:03 10.02.2022", id: 1, blocked: false, isAuth: false, checked: false },
            { name: "Jacob", surname: "Thornton", email: "jac@gmail.com", password: "1", regDate: "09.02.2022", lastSession: "12:01 10.02.2022", id: 2, blocked: false, isAuth: false, checked: false },
            { name: "Larry", surname: "Bird", email: "bird12@gmail.com	", password: "1", regDate: "10.02.2022", lastSession: "18:12 10.02.2022", id: 3, blocked: false, isAuth: false, checked: false }
        ],
        allCheckBoxState: false
    }
    maxId = 4;

    checkLoginData = (e) => {
        e.preventDefault();
        const mail = e.target.email.value;
        const pass = e.target.password.value;
        console.log(mail);
        console.log(pass);

        this.state.data.forEach(item => {
            if (item.email === mail && item.password === pass && !item.blocked) {
                item.isAuth = true;
                item.lastSession = GetDate();

                this.setState(({ data }) => {
                    return {
                        data: data
                    }
                })
            }
        })
    }

    addUser = (e, currentDate) => {
        e.preventDefault();
        let target = e.target
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

    onCheckboxAllChange = (e) => {
        this.setState(({ data, allCheckBoxState }) => {
            const updatedData = data.map(item => {
                item.checked = !allCheckBoxState;
                return item;
            })
            return {
                data: updatedData,
                allCheckBoxState: !allCheckBoxState
            }
        })
    }

    onCheckboxChange = (e) => {
        const checkboxCheked = e.target.checked;
        const checkboxId = e.target.id;
        console.log(`чекбокс ${checkboxId} выбран - ${checkboxCheked}`);
        this.setState(({ data, allCheckBoxState }) => {
            const checkedData = data.map(item =>
                +checkboxId === item.id ? { ...item, checked: !item.checked } : item);

            console.log(checkedData);
            return {
                data: checkedData,
                allCheckBoxState
            }
        })
    }

    onToggleBlocked = (e) => {

        this.setState(({ data }) => {
            const onUnblockItem = data.map(item => {
                if (e.target.name === "block" && item.checked) {
                    item.blocked = true;
                } if (e.target.name === "unBlock" && item.checked) {
                    item.blocked = false;
                }
                item.checked = false;
                return item;
            })
            return {
                data: onUnblockItem,
                allCheckBoxState: false
            }
        })
    }

    onDelete = () => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.checked !== true),
                allCheckBoxState: false
            }

        })
    }

    render() {

        const { data } = this.state;
        let userStatus = false;

        data.forEach(item => {
            if (item.isAuth && !item.blocked) {
                userStatus = true;
            } else {
                item.isAuth = false;
            }
        })
        console.log(`Доступ к закрытой странице - ${userStatus}`);

        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/login">
                            {userStatus ? <Redirect to="/userslist" /> : <LoginForm checkLoginData={this.checkLoginData} />}
                        </Route>
                        <Route exact path="/register">
                            <RegistrationForm
                                addUser={this.addUser}
                                usersData={this.state.data} />
                        </Route>
                        {userStatus
                            ? <Route exact path="/userslist">
                                <UserList
                                    allCheckBoxState={this.state.allCheckBoxState}
                                    onCheckboxAllChange={this.onCheckboxAllChange}
                                    createUsersList={data}
                                    onCheckboxChange={this.onCheckboxChange}
                                    onToggleBlocked={this.onToggleBlocked}
                                    onDelete={this.onDelete} />
                            </Route>
                            : <Redirect to="/login" />
                        }
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;