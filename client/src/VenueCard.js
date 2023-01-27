import React from 'react'
import EditVenue from './EditVenue';
import { NavLink } from "react-router-dom";

const VenueCard = ({ venue, onDeleteVenue, onEditVenue, user }) => {
    // console.log(venue)
    const [isEditing, setIsEditing] = ("false")

    function handleDeleteClick() {
        fetch(`/venues/${venue.id}`,{
            method: "DELETE",
        })
        //.then((r) => r.json())
        onDeleteVenue(venue.id);
    }


    return (
        <li>
            {isEditing? (
                <div key ={venue.id}>
                    <h1>Venue Name: {venue.name}</h1>
                    <h2>Review: {venue.review}</h2>
                    <h3>City:{venue.location_city}</h3>
                    <h3>Created by: {venue.user_name}</h3>
                    <button onClick={handleDeleteClick}>Delete Venue</button>
                    <NavLink to ={`/venues/${venue.id}/edit`}>Edit Venue</NavLink>
                    

                    

                
                </div>
                    ): (
            
            <EditVenue /> )}
        </li>

     );
}
 
export default VenueCard;