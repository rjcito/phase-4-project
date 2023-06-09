// import {useEffect, useState} from "react";
// import { NavLink } from "react-router-dom";
import VenueCard from "./VenueCard"
import { useSelector } from 'react-redux'


const VenueList = ({ venues, onDeleteVenue }) => {
    //this is us getting state 
    const venues2  = useSelector(store => store.venuesReducer )
    console.log(venues2.venues.venues)
    
    




    return ( 
        <div style= {{ backgroundColor: "gold", fontFamily: 'cursive'}}>
            <h1>Displaying Venues</h1>
            <ul>
            
                {venues.map((venue)=> (
                    <VenueCard
                        key={venue.id}
                        venue={venue}
                        
                        onDeleteVenue={onDeleteVenue}
                    
                        
                    />


                        
                    
                



                

            
            ))}
            </ul>
        </div>

    );
}



 
export default VenueList;