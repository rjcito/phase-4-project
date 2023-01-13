import React, {useState} from "react"


const NewVenue = () => {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")

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
        <h1>New Venue Form Here</h1>
     );
}
 
export default NewVenue;

