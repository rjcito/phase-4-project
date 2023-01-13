import React, {useState} from "react"


const NewVenue = ({onAddVenue}) => {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [errors, setErrors]= useState([])

    const handleSubmit = (e) => {
        e.preventDefailt();
        fetch('/venues', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                review: review,
            }),
        })
        
        .then((r) => r.json())
        .then((newVenue) => onAddVenue=(newVenue))
    }





    return ( 
        <div>
            <h1>Create A New Venue</h1>
            <form onSubmit={handleSubmit}>
                <label>Venue Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
                <label>Review</label>
                <input type="text" onChange={(e) => setReview(e.target.value)}></input>
                <button type ="submit">Submit</button>
                {errors.map((error) => (
                <ul key={error}>{error}</ul>
            ))}                

            </form>
        </div>
    );
}
 
export default NewVenue;

