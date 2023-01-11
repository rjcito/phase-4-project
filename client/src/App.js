import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import NewVenue from "./NewVenue"
import VenueList from "./VenueList"


function App() {
  const [user, setUser] = useState(null)


  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });


  }, []);

  if (!user) return <Login onLogin={setUser}/>;



  return (
    <>
    <NavBar user={user} setUser={setUser}/>
      <div>
        <main>
          <Routes>
            <Route path="/new">
              <NewVenue user={user}/>
            </Route>
            <Route path="/">
              <VenueList />
            </Route>
          </Routes>
        </main>
      </div>
    </>
    
  );
}

export default App;
