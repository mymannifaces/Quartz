import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import RollDice from './RollDice'

function NavBar() {
  const [ menuOpen, setMenuOpen ] = useState(false)

  return (
    <nav>
        <Link to='/'>Quartz</Link>
        <div className='menu' onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <button className='btn' onClick={() => RollDice(20)}>Roll Dice</button>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar