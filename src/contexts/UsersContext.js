import React, { useReducer } from 'react';

const initialState = {
    users: [],
    search: '',
    page: 1,
    perPage: 2,
    sort: 'name',
    order: 'asc'
};

function reducer(state, action) {
    switch(action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'SEARCH':
            return {
                ...state,
                search: action.payload,
                page: 1
            };
        case 'CHANGE_PAGE':
            return {
                ...state,
                page: action.payload
            }
        case 'CHANGE_PER_PAGE':
            return {
                ...state,
                perPage: action.payload
            }
        case 'SORT':
            const nextState = {...state};
            if(nextState.sort === action.payload) {
                nextState.order = nextState.order === 'desc' ? 'asc' : 'desc';
            } else {
                nextState.order = 'asc';
                nextState.sort = action.payload;
            }
            return nextState;
        default:
            return state;
    }
}

const UsersContext = React.createContext(initialState);

export function UsersContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UsersContext.Provider value={{state, dispatch}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContext;