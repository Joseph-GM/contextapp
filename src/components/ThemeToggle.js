import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function ThemeToggle() {
    const context = useContext(ThemeContext);
    const toggleFunction = context.toggleTheme;
    console.log('in ThemeToggle, context : ', toggleFunction);
    // const {toggleTheme} = context.;
    return (
        <button onClick={toggleFunction}>Toggle the tehem</button>
    )
}

export default ThemeToggle
