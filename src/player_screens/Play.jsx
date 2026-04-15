import React, { useState } from 'react'
import PlayerLifeCard from '../components/PlayerLifeCard'
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

function Play() {
    const params = useParams();
    const playerCount = params.playerCount;

    function makePlayerArray(number) {
        let count = 0
        const playerRosterArray = []
        while (count < number) {
            playerRosterArray.push(
                {
                    id: count+1,
                    name: 'Player ' + (count+1),
                    life: 20
                }
            )
            count = count +1
        }
        return playerRosterArray
    }

    const initialPlayers = makePlayerArray(playerCount)

    const [ players , setPlayers ] = useState(initialPlayers);

    const navigate = useNavigate();

    const updateLife = (id, amount) => {
        setPlayers(players.map(p => p.id === id ? {...p, life: p.life + amount} : p));
    };

  return (
    <>
        <div>
            {players.map(player => (
                <PlayerLifeCard key={player.id} name={player.name} life={player.life}
                onIncrease={() => updateLife(player.id, 1)}
                onDecrease={() => updateLife(player.id, -1)}
                />
            ))}
        </div>
        <br />
        <div className='start-btn-wrapper'>
            <button className='btn' onClick={() => navigate('/PlayerCount')}>Back</button>
        </div>
    </>
  )
}

export default Play