const initialState = {
    username: "Bob",
    loggedIn: true,
    venues: []
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default usersReducer;
