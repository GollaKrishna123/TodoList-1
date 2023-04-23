import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import youtubeLogo from '../../assets/images/youtubelogo.jpg'
const Navbar = ({todos,setTodos}) => {
  return (
    <nav className="navbar">
      {/* <img src={youtubeLogo} width = "40" height="40" style={{borderRadius:"50%"}}/> */}
      <h1>Our Application</h1>
      <SearchBar todos={todos} setTodos={setTodos}/>
      <ul className="menu-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
