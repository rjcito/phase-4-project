import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import NewVenue from "./NewVenue"
import VenueList from "./VenueList"
import EditVenue from "./EditVenue"
import VenueCard from "./VenueCard"
// import LocationCard from "./LocationCard";
import LocationForm from "./LocationForm";
import LocationList from "./LocationList";


function App() {
  const [user, setUser] = useState({venues:[]})
  const [venues, setVenues] = useState()
  const [locations, setLocations] = useState([])

  
  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });




  }, []);

  useEffect(() => {

    fetch("/locations").then((r) => {
      if (r.ok) {
        r.json().then((locations) => setLocations(locations));
      }
    });




  }, []);

  //ßconsole.log(user.venues)
  //console.log(locations)



// was adding it to the wrong state, thats why it wasnt showing up when you went home 
// do the same when you edit and delete 
// you first get an empty user object, then you want to 
function handleAddVenue(newVenue){
  setUser({
    ...user,
    venues:[...user.venues, newVenue]
  })

}


// function handleAddLocation(location){
  
  
// }

function handleUpdateVenue(updatedVenue) {
  const updatedVenues = user.venues.map((venue) => {
    if (venue.id === updatedVenue.id){
      return updatedVenue;
    }else {
      return venue
    }
  })
  setUser({
    ...user,
    venues: updatedVenues
  })
}

function handleDeleteVenue(id){
  const updatedVenues = user.venues.filter((venue) => venue.id !==id);
  setVenues(updatedVenues)
}
//filter gives back an array 
//you only want to delete the venue if the id matches 


  if (!user.id) return <Login onLogin={setUser}/>;






  return (
    
    
    <Router>
      <NavBar user={user} setVenues={setVenues} setUser={setUser}/>
      <div>
        <main>
          <Routes>
            <Route path="locations/new" element={<LocationForm />}></Route><Route/>
            <Route path="/locations" element={<LocationList user={user} />}></Route>
            <Route path="/venues/:id" element = {<VenueCard user={user}/>}></Route>
            <Route path="/venues/new" element={<NewVenue user={user} onAddVenue={handleAddVenue} locations={locations} />}/>
            <Route path="/" element={<VenueList venues = {user.venues} onDeleteVenue={handleDeleteVenue}/>}/>
            <Route path="venues/:id/edit" element={<EditVenue venues={user.venues} onEditVenue={handleUpdateVenue}/>}/>
          </Routes>
        </main>
      </div>
    </Router>
    
    
  );
  
}


export default App;
