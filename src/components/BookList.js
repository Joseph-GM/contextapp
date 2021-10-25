import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function BookList() {
    const context = useContext(ThemeContext);
    console.log(context);
    const { isLightTheme, light, dark} = context.themeState;
    console.log('isLightTheme', isLightTheme);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                <li style={{ background: theme.ui}}>the way of kings</li>
                <li style={{ background: theme.ui}}>the name of the wind</li>
                <li style={{ background: theme.ui}}>the final empire</li>
            </ul>
            
        </div>
    )
}

export default BookList
