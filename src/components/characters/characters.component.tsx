import React from 'react'
import CharacterItem from './characterItem.component'
import Spinner from '../spinner/spinner.component'
import { Characters } from '../../App'

const CharactersGrid = ({ isLoading,  items } : { isLoading : boolean, items: Characters[] }) => {
    return isLoading ? <Spinner/> : 
    <section className="cards">
        {items.map((item: Characters) => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
}

export default CharactersGrid
