import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { addVenue } from './actions/venues'
// you also need to import addVenue action which you did in the line above 



const NewVenue = ({  onAddVenue, user, locations }) => {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    //const [location_id, setLocationId] = useState("")
    const [selectedLocation, setSelectedLocation]=  useState("")
    const [errors, setErrors]= useState([])
    const dispatch = useDispatch();
    
   

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addVenue({name, review}))
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

