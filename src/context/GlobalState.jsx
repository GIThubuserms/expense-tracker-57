import React, { useReducer, createContext, useContext } from "react";
// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: +300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: +150 }
    ]
};


//Reducer
const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD-TRANS":
            console.log('State before ADD-TRANS:', state);
            console.log('Action:', action);
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case "DEL-TRANS":
            console.log('State before DEL-TRANS:', state);
            console.log('Action:', action);
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        default:
            return state;
    }
};

// Create context
export const GlobalContext = createContext(
    {
        transactions: [],
        addTransaction: () => { },
        delTransaction: () => { }
    });
// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    // Actions
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD-TRANS",
            payload: transaction
        });
    };
    const delTransaction = (id) => {
        dispatch({
            type: "DEL-TRANS",
            payload: id
        });
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            delTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
// Custom hook to use the global context
export const useGlobalContext = () => useContext(GlobalContext);
