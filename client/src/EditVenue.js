import { useState } from 'react';
import { useParams } from 'react-router-dom'
//import useDispatch here 
//you also have to import your edit venue action here




const EditVenue = ({venues, onEditVenue}) => {

  const [name, setName] = useState("")
    //const [venues, setVenues] = useState([]) -- moved to app.js
    const [review, setReview] = useState("")
    const [errors, setErrors]= useState([])
    
    const {id} = useParams()
    const venue = venues.find((venue) => venue.id ===parseInt(id))


  // moved to app.js
  //   useEffect(() => {
  //     fetch("/venues")
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(venues => {
          
  //         setVenues(venues);
          
          
          
  //     })
  // }, [])


    function handleSubmit(e){

        e.preventDefault();
        fetch(`/venues/${venue.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                review: review,
            }),
        })
            .then((r) => r.json())
            .then((updatedVenue) => onEditVenue(updatedVenue));


    }

    if (!venue) return <h2>Loading venue data...</h2>


    return ( 

    <div>
        <h2>Edit your venue</h2>
        <form onSubmit={handleSubmit}>
            <label>Update venue name:</label>
            <input type="text" id="name" value = {name} onChange={(e)=> setName(e.target.value)}></input>
            
            <label>Update your review here: </label>
            <input type="text" id="review" value = {review} onChange={(e)=> setReview(e.target.value)}/>
            <button type ="submit">Submit Update</button>
            {errors.map((error) => (
                <ul key={error}>{error}</ul>
            ))}
            
        </form>
    </div>    

    );
}
 
export default EditVenue;