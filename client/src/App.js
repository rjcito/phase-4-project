import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import NewVenue from "./NewVenue"
import VenueList from "./VenueList"
import EditVenue from "./EditVenue"


function App() {
  const [user, setUser] = useState(null)
  const [venues, setVenues] = useState([])


  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });


  }, []);

  


  useEffect(() => {
    fetch("/venues")
      .then(res => {
        return res.json();
      })
      .then(venues => {
        
        setVenues(venues);
        
        
        
    })
}, [])

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

  if (!user) return <Login onLogin={setUser}/>;




  return (
    
    
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <div>
        <main>
          <Routes>
            <Route path="/venues/new" element={<NewVenue user={user} onAddVenue={handleAddVenue}/>}/>
            <Route path="/" element={<VenueList venues = {venues}/>}/>
            <Route path="venues/:id/edit" element={<EditVenue venues={venues} onEditVenue={handleUpdateVenue}/>}/>
              {/* <VenueList /> */}
            
          </Routes>
        </main>
      </div>
    </Router>
    
    
  );
  
}


export default App;
