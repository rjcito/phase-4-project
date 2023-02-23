import React from "react";
import { NavLink } from "react-router-dom"




const NavBar = ({user, setUser, setVenues}) => {

    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if(r.ok){
                console.log("r is ok")
                setUser({venues:[]});
                setVenues([])
            }
        });
    }



    return ( 
        <div data-role="navbar" style= {{ backgroundColor: "gold",
        fontFamily: 'cursive'}}>
            <h1 >The Greatest Concert Venues</h1>
            {/* </div><nav style = {{backgroundColor: "gold", fontFamily: "cursive"}}> */}
                <ul>
                    <li><NavLink to= "/">Home </NavLink></li>
                    <li><NavLink to="/venues/new">
                        New Venue
                    </NavLink></li>
                    <li><NavLink to="/locations/new">
                        Create new Location
                    </NavLink></li>
                    <li><NavLink to="/locations">
                        View Your Locations

                    </NavLink></li>
                </ul>
                {/* <NavLink to="/locations">
                    View Locations You've Been To
                </NavLink> */}
                <button onClick={handleLogoutClick}>
                    Logout
                </button>
            {/* </nav> */}
        </div>

        
     );
}
 
export default NavBar;