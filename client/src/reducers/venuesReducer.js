const initialState = {venues:[]}

const venuesReducer = (state=initialState, action) => {
   switch(action.type) {
    case "ADD_VENUE":
      return {
        ...state,
        venues: [...state.venues, action.payload]// action.payload is the venue object that we are sending in from our form
      }
    case "LOAD_VENUES":
      return {
        ...state,
        
        venues: action.payload
      }

    default:
      return initialState;
   }
}

export default venuesReducer;

