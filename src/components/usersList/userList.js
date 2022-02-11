import { Table, Form } from "react-bootstrap";

import UserListControl from "../userListControl/userListControl"
import "./userList.css"

function UserList({ createUsersList }) {

    const usersList = createUsersList.map(({ name, surname, email, regDate, lastSession, id, isAuth, blocked }) => {
        let status;
        isAuth ? status = "online" : status = "offline";
        return (
            <tr key={id}>
                <td>
                    <Form.Check aria-label={id} />
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
            <UserListControl />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <Form.Check aria-label="option 0" />
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
                    {usersList}
                </tbody>
            </Table>
        </div>
    );
}

export default UserList;