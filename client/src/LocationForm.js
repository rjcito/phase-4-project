import React, { useState } from "react";

const LocationForm = () => {
    const [city, setCity] = useState("")
    const [state, setState]= useState("")
    const [locations, setLocations]= useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/locations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                city: city,
                state: state,

            }),
            
            

        })
        .then((r)=> r.json())
        .then((newLocation)=> handleAddLocation(newLocation))

    
    }

    function handleAddLocation(newLocation) {
        setLocations([...locations, newLocation])


    }




    return ( 
        <form onSubmit = {handleSubmit}>
            <label>
                City:
            </label>
            <input type="text" id="city" autoComplete="off" value={city} onChange={(e) => setCity(e.target.value)}>
            </input>


            <label>
                State:
            </label>
            <input type="text" id="state" autoComplete="off" value={state} onChange={(e) => setState(e.target.value)}>

            </input>
            <button type ="submit">Submit</button>


        </form>
     );
}
 
export default LocationForm;