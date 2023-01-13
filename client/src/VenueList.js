// import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";


const VenueList = ({ venues }) => {
    // const [venues, setVenues] = useState([]);

    // useEffect(() => {
    //     fetch("/venues")
    //       .then(res => {
    //         return res.json();
    //       })
    //       .then(venues => {
            
    //         setVenues(venues);
            
            
            
    //     })
    // }, [])



    return ( 
        <div>
            
            { venues.length > 0 ? (
                venues.map((venue)=> (
                <> <h1>{venue.name}</h1>
                    <h2>
                        <em>Review: {venue.review}</em>
                        <NavLink  to={`/venues/${venue.id}/edit`}>Edit Venue</NavLink >
                        <button>Delete Venue</button>


                        
                    </h2>
                </>



                ))
            ): (
                <>
                    <h2>No Venues Found</h2>
                    <NavLink  to='/new'>
                        Create a New Venue
                    </NavLink>
                    
                </>
            
            )}
        </div>

    );
}



 
export default VenueList;