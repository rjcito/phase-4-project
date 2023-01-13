// import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import VenueCard from "./VenueCard"


const VenueList = ({ venues, onDeleteVenue }) => {



    return ( 
        <div>
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