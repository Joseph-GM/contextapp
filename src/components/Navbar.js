import React, {useContext} from 'react'
import { AuthContext } from '../contexts/Authcontext';
import { ThemeContext } from '../contexts/ThemeContext'



function Navbar() {
    const context = useContext(ThemeContext);
    const auth = useContext(AuthContext);
    console.log(context);
    const { isLightTheme, light, dark} = context.themeState;
    const theme = isLightTheme ? light : dark;

    console.log('in navi authContext : ', auth, auth.authState);
    const isAuthenticated = auth.authState;
    const toggleLog = auth.toggleAuth;
    
    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleLog}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Context</li>
            </ul>
        </nav>
    )
}

export default Navbar
