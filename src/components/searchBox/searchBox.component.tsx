import React from 'react'

interface ISearchBoxProps {
    searchEvent(event: React.SyntheticEvent<HTMLInputElement>) : void
}

const SearchBox = ({ searchEvent } : ISearchBoxProps) => {

    return (
        <section className='search'>
            <form>
                <input 
                type='text' 
                className='form-control' 
                placeholder="Search Characters"
                onChange={searchEvent}/>
            </form>
            
        </section>
    )
}

export default SearchBox
