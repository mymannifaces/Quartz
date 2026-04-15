import React from 'react'

export default function PlayerLifeCard({ name , life , onIncrease , onDecrease }) {
    return (
      <div className='player-card'>
        <h2>{name}</h2>
        <div className='player-life'>
          <button className='life-btn' onClick={onDecrease}>-</button>
          <p>{life}</p>
          <button className='life-btn' onClick={onIncrease}>+</button>
        </div>
      </div>
    );
}
