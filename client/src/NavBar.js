import React from "react";
import { NavLink } from "react-router-dom"




const NavBar = ({user, setUser}) => {

    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if(r.ok){
                setUser(null);
            }
        });
    }



    return ( 
        <div>
            <h1>Concert Venues in America</h1>
            <nav>
                <NavLink to= "/">Home</NavLink>
                <NavLink to="/venues/new">
                    New Venue
                </NavLink>
                <button onClick={handleLogoutClick}>
                    Logout
                </button>
            </nav>
        </div>

        
     );
}
 
export default NavBar;