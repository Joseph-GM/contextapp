import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext'

function BookList() {
    const context = useContext(ThemeContext);
    const {books} = useContext(BookContext);

    console.log('in BookList : ', books);
    const { isLightTheme, light, dark} = context.themeState;
    console.log('isLightTheme', isLightTheme);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui}}>{book.title}</li>
                    );
                })}
            </ul>
            
        </div>
    )
}

export default BookList
