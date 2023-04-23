import React, { useState,useEffect } from 'react'
import './SearchBar.css'

const SearchBar = ({ todos, setTodos }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if(search){
    const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));
    setTodos(filteredTodos);
    }
  }, [search])
  const searchHandler = (e) => {
    setSearch(e.target.value);
    // const filteredTodos = todos.filter((todo)=>todo.title.toLowerCase().includes(search.toLowerCase()));
    // setTodos(filteredTodos);
  }
  return (
    <>
      <input type='text' placeholder='Search...' className="search" onChange={searchHandler} name="search" value={search} />
    </>
  )
}

export default SearchBar
