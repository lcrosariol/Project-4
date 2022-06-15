import './App.css';
import {useState} from "react";
import VirtualGarden from "../VirtualGarden/VirtualGarden";
import AuthPage from "../AuthPage/AuthPage";
import {Route, Switch, Redirect} from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import GardenPlan from "../GardenPlan/GardenPlan";
import NavBar from "../../components/NavBar/NavBar";
import NewGarden from "../NewGarden/NewGarden";



export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
            {user ? <>
                <NavBar user={user} setUser={setUser}/>
                <Switch>
                    <Route path="/gardens/virtual">
                        <VirtualGarden/>
                    </Route>
                    <Route path="/gardens/new">
                        <NewGarden/>
                    </Route>
                    <Route path="/gardens">
                        <GardenPlan/>
                    </Route>
                    <Redirect to="/gardens/new"/>
                </Switch>
            </> : <AuthPage setUser={setUser}/>}
        </main>);
}