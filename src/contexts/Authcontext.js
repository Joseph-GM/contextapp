import React, {createContext, useState} from 'react'

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState(false);
    const toggleAuth = () => {
        setAuthState(!authState);
    }
    return (
        <AuthContext.Provider value={{authState, toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
