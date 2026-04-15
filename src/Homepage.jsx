import React from 'react'
import { useNavigate } from 'react-router'
import './App.css'
import './index.css'
import './App.jsx'

function Homepage() {
    const nav = useNavigate();

    const navigate = () => {
        nav('PlayerCount');
    }

  return (
    <>
      <div className='app'>
        <h2>Welcome to Quartz!</h2>
        <h3>A Lifecounter App for Kitchen Table Wizards!</h3>
        <div className='start-btn-wrapper'>
        <button
            onClick={navigate} 
            className="btn">Start Game
        </button>
        </div>
      </div>
    </>
  )
}

export default Homepage
