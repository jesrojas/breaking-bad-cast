import React, { useState, useEffect } from 'react';
import Header from './components/header/header.component'
import CharactersGrid from './components/characters/characters.component'
import SearchBox from './components/searchBox/searchBox.component'
import './App.css';

import axios from 'axios'

export interface Characters {
  char_id: number,
  img: string,
  name: string,
  portrayed: string,
  nickname: string,
  birthday: string,
  status: string
}

const  App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${query 
        ? 
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        :
        'https://www.breakingbadapi.com/api/characters'}`)
      setItems(result.data)
      setLoading(false)
    }

    fetchItems()
  }, [query])

  const onSearchEvent = (e : any) => {
    setQuery(e.currentTarget.value)
  }

  return (
    <div className="container">
      <Header/>
      <SearchBox searchEvent={onSearchEvent}/>
      <CharactersGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
