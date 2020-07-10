import React from 'react'
import CharacterItem from './characterItem.component'
import Spinner from '../spinner/spinner.component'

const CharactersGrid = ({ isLoading, items }) => {
    return isLoading ? <Spinner/> : 
    <section className="cards">
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
}

export default CharactersGrid
