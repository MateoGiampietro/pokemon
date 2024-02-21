const initialState = {
    pokemons: [],
    types: [],
    allPokemons: [],
    currentPage: 1,
    driversPerPage: 9,
    errors: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return {...state};

        case "SETALLPOKEMONS":
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload
            }
    }
};

export default rootReducer;