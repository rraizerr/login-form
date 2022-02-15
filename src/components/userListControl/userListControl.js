import { Button } from "react-bootstrap";

import "./userListControl.css"

function UserListControl({ onToggleBlocked, onDelete }) {

    return (
        <div className="buttons-container">
            <Button variant="warning" name="block" onClick={(e) => onToggleBlocked(e)}>Block</Button>
            <Button className="fa fa-unlock" variant="success" name="unBlock" onClick={(e) => onToggleBlocked(e)}></Button>
            <Button className="fa fa-trash" variant="danger" name="delete" onClick={() => onDelete()}></Button>
        </div>
    );
}

export default UserListControl;