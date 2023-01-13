import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import NewVenue from "./NewVenue"
import VenueList from "./VenueList"
import EditVenue from "./EditVenue"
import VenueCard from "./VenueCard"


function App() {
  const [user, setUser] = useState({venues:[]})
  const [venues, setVenues] = useState([])


  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });


  }, []);

  


//   useEffect(() => {
//     fetch("/venues")
//       .then(res => {
//         return res.json();
//       })
//       .then(venues => {
        
//         setVenues(venues);
        
        
        
//     })
// }, [])



function handleAddVenue(newVenue){
  setVenues([...venues, newVenue])

}

function handleUpdateVenue(updatedVenue) {
  const updatedVenues = venues.map((venue) => {
    if (venue.id === updatedVenue.id){
      return updatedVenue;
    }else {
      return venue
    }
  })
  setVenues(updatedVenues)
}

function handleDeleteVenue(id){
  const updatedVenues = venues.filter((venue) => venue.id !==id);
  setVenues(updatedVenues)
}

  if (!user.id) return <Login onLogin={setUser}/>;




  return (
    
    
    <Router>
      <NavBar user={user} setVenues={setVenues} setUser={setUser}/>
      <div>
        <main>
          <Routes>
            <Route path="/venues/:id" element = {<VenueCard user={user}/>}></Route>
            <Route path="/venues/new" element={<NewVenue user={user} onAddVenue={handleAddVenue}/>}/>
            <Route path="/" element={<VenueList venues = {user.venues} onDeleteVenue={handleDeleteVenue}/>}/>
            <Route path="venues/:id/edit" element={<EditVenue venues={venues} onEditVenue={handleUpdateVenue}/>}/>
              {/* <VenueList /> */}
            
          </Routes>
        </main>
      </div>
    </Router>
    
    
  );
  
}


export default App;
