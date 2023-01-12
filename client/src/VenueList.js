import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const VenueList = () => {
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        fetch("/venues")
          .then(res => {
            return res.json();
          })
          .then(venues => {
            
            setVenues(venues);
            
            
            
        })
    }, [])



    return ( 
        <div>
            { venues.length > 0 ? (
                venues.map((venue)=> (
                <><h1>{venue.name}</h1><h2>
                        <em>Review: {venue.review}</em>

                        <cite>By {venue.user.username}</cite>
                    </h2></>



                ))
            ): (
                <>
                    <h2>No Venues Found</h2>
                    <button as={Link} to='/new'>
                        Create a New Venue
                    </button>
                </>
            
            )}
        </div>

    );
}



 
export default VenueList;