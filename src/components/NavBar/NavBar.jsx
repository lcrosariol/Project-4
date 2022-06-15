import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (<nav>
        <Link to="/gardens">Garden History</Link>
        &nbsp; | &nbsp;
        <Link to="/gardens/virtual">Virtual Garden Plan</Link>
        &nbsp; | &nbsp;
        <Link to="/gardens/new">New Garden Plan</Link>
        &nbsp; | &nbsp;
        <span>Welcome {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Logout</Link>
    </nav>);
}