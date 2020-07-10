import React, { useState } from 'react'

const SearchBox = ({ setQuery }) => {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
        setQuery(text)
    }
    return (
        <section className='search'>
            <form>
                <input 
                type='text' 
                className='form-control' 
                placeholder="Search Characters"
                value={text}
                onChange={onChange}/>
            </form>
            
        </section>
    )
}

export default SearchBox
