import React, { useMemo, useReducer } from 'react';

const initialState = {
    users: [],
    search: '',
    page: 1,
    perPage: 5,
    sort: 'name',
    order: 'asc',
    total: 0,
};

function reducer(state, action) {
    switch(action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload.data,
                total: action.payload.total
            };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
                total: state.total + 1
            };
        case 'DELETE_USER':
            const nextUsers = [...state.users];
            let userIndex = nextUsers.findIndex(user => user.id === action.payload);

            if(userIndex < 0) {
                return state;
            }

            nextUsers.splice(userIndex, 1);

            return {
                ...state,
                users: nextUsers,
                total: state.total - 1
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
                perPage: action.payload,
                page: 1
            }
        case 'PREV_PAGE':
            if(state.page === 1) {
                return state;
            }
            return {
                ...state,
                page: state.page - 1
            }
        case 'NEXT_PAGE':
            const lastPage = Math.ceil(state.total/state.perPage);
            if(lastPage === state.page) {
                return state;
            }
            return {
                ...state,
                page: state.page + 1
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

    const lastPage = useMemo(() => Math.ceil(state.total/state.perPage), [state.total, state.perPage]) 

    return (
        <UsersContext.Provider value={{state, dispatch, lastPage}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContext;