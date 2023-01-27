import React, { useState } from "react"


const NewVenue = ({  onAddVenue, user }) => {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [location_id, setLocationId] = useState("")
    const [selectedLocation, setSelectedLocation]=  useState("")
    const [errors, setErrors]= useState([])
    //console.log(location_id)
   
    //console.log(selectedLocation)
    //plan: add const [user, setUser] = useState({venues:[]})
    //then below for onChange do setUser()

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/venues', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                review: review,
                location_id: selectedLocation,
                // user: selectedLocation,
            }),
        })
        
        .then((r) => r.json())
        .then((newVenue) => onAddVenue(newVenue))
    }

    // const dropDownList = locations.map((location) => console.log(location))




    return ( 
        <div>
            <h1>Create A New Venue, remember, you can only create a venue for cities you've been to. If you'd like to add more, click "create new location"</h1>
            <form onSubmit={handleSubmit}>
                <label>Venue Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>


                <label>Review</label>
                <input type="text" onChange={(e) => setReview(e.target.value)}></input>

                {/* <label>Location Id</label>
                <input type="text" onChange={(e) => setLocationId(e.target.value)}></input> */}


                <label>Select City</label>
                <select id="city" onChange = {e => setSelectedLocation(e.target.value)}>
                    {user.venues.map((venue) => (
                        <option key={venue.id} value={venue.location_id}>
                            {venue.location_city}
                        </option>
                    ))}
                    


                </select>
                <button type ="submit">Submit</button>
                {errors.map((error) => (
                <ul key={error}>{error}</ul>
            ))}                

            </form>
        </div>
    );
}
 
export default NewVenue;

