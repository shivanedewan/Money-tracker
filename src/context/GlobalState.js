import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial state
const initialState={
    transactions: [
        ]
}

// create context
export const GlobalContext = createContext(initialState);


// creating a provider for the context created
export const GlobalProvider=({children})=>{
    // 
    const [state,dispatch]=useReducer(AppReducer,initialState);


    //function which trigger on certain actions
//remember to add them in provider
function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction

    })
}

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

