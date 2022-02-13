import { Button } from "react-bootstrap";

import "./userListControl.css"

function UserListControl({ onToggleBlocked, onDelete }) {

    return (
        <div className="buttons-container">
            <Button variant="warning" name="block" onClick={(e) => onToggleBlocked(e)}>Block</Button>
            <Button variant="success" name="unBlock" onClick={(e) => onToggleBlocked(e)}>Unblock</Button>
            <Button variant="danger" name="delete" onClick={() => onDelete()}>Delete</Button>
        </div>
    );
}

export default UserListControl;