const initialState = {
    pokemons: [],
    types: [],
    allPokemons: [],
    currentPage: 1,
    errors: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return {...state};

        case "SETPAGE":
            return {
                ...state,
                currentPage: action.payload
            }

        case "SETALLPOKEMONS":
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload
            }

        case "FILTERPOKEMONSBYNAME":
            if (action.payload === "") return {
                ...state,
                pokemons: state.allPokemons
            }

            const filteredPokemons = state.allPokemons.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(action.payload.toLowerCase());
            })

            return {
                ...state,
                pokemons: filteredPokemons
            }
        
        case "FILTERPOKEMONSBYTYPE":
            if (action.payload === "All") return {
                ...state,
                pokemons: state.allPokemons
            }

            const typeFilter = state.pokemons.filter((pokemon) => {
                if (pokemon.types.length === 1) {
                    return pokemon.types[0].type.name === action.payload;
                } else if (pokemon.types.length === 2) {
                    return pokemon.types.some(type => type.type.name === action.payload);
                }
            });

            return {
                ...state,
                pokemons: typeFilter
            }

        case "FILTERPOKEMONSBYORIGIN":
            let filterPokemonsOrigin;
        
            if (action.payload === "All") {
                return {
                    ...state,
                    pokemons: state.allPokemons
                };
            }
        
            if (action.payload === "db") {
                filterPokemonsOrigin = state.allPokemons.filter((pokemon) => {
                    return pokemon.origin === true;
                });
            }
        
            if (action.payload === "api") {
                filterPokemonsOrigin = state.allPokemons.filter((pokemon) => {
                    return !pokemon.hasOwnProperty('origin')
                });
            }
        
            return {
                ...state,
                pokemons: filterPokemonsOrigin
            };
            
        case "ORDERPOKEMONS":
            const orderCopy = [...state.pokemons];
        
            orderCopy.sort((a, b) => {
                const nameA = (a.name);
                const nameB = (b.name);
                
                if (a.stats) {
                    var atkA = a.stats[1].base_stat.toString();
                } else {
                    var atkA = a.attack.toString()
                }
                if (b.stats) {
                    var atkB = b.stats[1].base_stat.toString();
                } else {
                    var atkB = b.attack.toString()
                }
            
                if (action.payload === "aNombre") return nameA.localeCompare(nameB);
                if (action.payload === "dNombre") return nameB.localeCompare(nameA);
                if (action.payload === "aAtaque") return atkA.localeCompare(atkB);
                if (action.payload === "dAtaque") return atkB.localeCompare(atkA);
            
                return 0;
            });
        
            return {
                ...state,
                pokemons: orderCopy
            };
    }
};

export default rootReducer;