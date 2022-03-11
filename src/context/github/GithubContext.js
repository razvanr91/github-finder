import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvicer = ({ children }) => {
    const initialState = {
        users: [],
        repos: [],
        user: {},
        isLoading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    return (<GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>)
};

export default GithubContext;