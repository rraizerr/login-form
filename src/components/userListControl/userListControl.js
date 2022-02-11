import { Button } from "react-bootstrap";

import "./userListControl.css"

function UserListControl() {

    return (
        <div className="buttons-container">
            <Button variant="warning">Block</Button>
            <Button variant="success">Unblock</Button>
            <Button variant="danger">Delete</Button>
        </div>
    );
}

export default UserListControl;