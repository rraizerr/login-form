import { Table } from "react-bootstrap";

import UserListControl from "../userListControl/userListControl"
import "./userList.css"

function UserList({ createUsersList, onCheckboxChange, onToggleBlocked, onDelete }) {

    const usersList = createUsersList.map(({ name, surname, email, regDate, lastSession, id, isAuth, blocked }) => {
        let classes = [];
        let status;
        isAuth ? status = "online" : status = "offline";

        if (blocked) {
            classes.push("blocked")
        }

        return (
            <tr key={id}
                className={classes.join(" ")}>
                <td>
                    <input type="checkbox" name="" id={id} onChange={(e) => onCheckboxChange(e)} />
                </td>
                <td>{id}</td>
                <td>{name} {surname}</td>
                <td>{email}</td>
                <td>{regDate}</td>
                <td>{lastSession}</td>
                <th>{status}</th>
                <th>{blocked.toString()}</th>
            </tr>
        )
    })
    return (
        <div className="main">
            <UserListControl
                onToggleBlocked={onToggleBlocked}
                onDelete={onDelete} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" name="" id="all" onChange={(e) => onCheckboxChange(e)} />
                        </th>
                        <th>#id</th>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Registration date</th>
                        <th>Last session</th>
                        <th>Status</th>
                        <th>Blocked</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.length ? <>{usersList}</> : <tr><td colSpan="8" className="text-center">Users list is empty</td></tr>}
                    {/* {usersList} */}
                </tbody>
            </Table>
        </div>
    );
}

export default UserList;