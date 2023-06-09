const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

export const loadVenues = () => {
    return (dispatch) =>{
        fetch("/me")
        .then(resp => resp.json())
        .then(data => dispatch({type: "LOAD_VENUES", payload: data}))
    }
}



export const addVenue = venue => {
    return (dispatch) =>{
        fetch('/me', {
            method: "POST",
            headers: headers,
            body: JSON.stringify({venue})
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: "ADD_VENUE", payload: data }))
    }
}
