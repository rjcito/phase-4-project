import React from "react";
import { Link } from "react-router-dom"




const NavBar = ({user, setUser}) => {

    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if(r.ok){
                setUser(null);
            }
        });
    }



    return ( 
        <>
            
        <Link to="/">Greatest Venues in America</Link>
            
        
        <nav>
            <button to="/new">
                New Venue
            </button>
        </nav>

        </>
     );
}
 
export default NavBar;