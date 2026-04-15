import React from 'react'
import { useNavigate } from 'react-router'

export default function PlayerCount() {
    const navigate = useNavigate();

    const handleNav = (number) => {
      navigate(`/play/${number}`)
    };

  return (
    <div>
        <h2>How Many Players?</h2>
        <div className='player-count-container'>
            <button className='btn' onClick={() => handleNav(2)}>2</button>
            <button className='btn' onClick={() => handleNav(4)}>4</button>
            <button className='btn' onClick={() => handleNav(6)}>6</button>
            <br />
            <div>
                <button className='btn' onClick={() => navigate('/')}>Restart?</button>
            </div>
        </div>
    </div>
  )
}
