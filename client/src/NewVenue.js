import React, { useState } from "react"


const NewVenue = ({  onAddVenue, user, locations }) => {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    //const [location_id, setLocationId] = useState("")
    const [selectedLocation, setSelectedLocation]=  useState("")
    const [errors, setErrors]= useState([])
   

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
        
        .then((r) =>  {
            if (r.ok){ 
                r.json().then((newVenue) => onAddVenue(newVenue))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        }
        )
    }
   





    return ( 
        <div style = {{backgroundColor: "gold", fontFamily: "cursive"}}>
            <h1>Create A New Venue</h1>
            <form onSubmit={handleSubmit}>
                <label>Venue Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>


                <label>Review</label>
                <input type="text" onChange={(e) => setReview(e.target.value)}></input>

                {/* <label>Location Id</label>
                <input type="text" onChange={(e) => setLocationId(e.target.value)}></input> */}


                <label>Select City</label>
                <select id="city" onChange = {e => setSelectedLocation(e.target.value)}>
                    {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                            {location.city}
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

