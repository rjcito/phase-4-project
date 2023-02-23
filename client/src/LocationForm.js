import React, { useState } from "react";

const LocationForm = () => {
    const [city, setCity] = useState("")
    const [state, setState]= useState("")
    const [locations, setLocations]= useState("")
    const [errors, setErrors]= useState([])


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
            
            

        }).then((r)=> {
            if (r.ok){
                r.json().then((newLocation)=> handleAddLocation(newLocation))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }




    //console.log(errors)

    function handleAddLocation(newLocation) {
        setLocations([...locations, newLocation])


    }




    return ( 
        <form onSubmit = {handleSubmit} style={{backgroundColor: "gold", fontFamily: 'cursive'}}>
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
            {errors.length > 0 && (
    <ul style={{ color: "red" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )}

            <button type ="submit">Submit</button>


        </form>
     );

}
 
export default LocationForm;