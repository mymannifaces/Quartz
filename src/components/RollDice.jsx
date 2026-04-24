import React from 'react'

function RollDice(sidesInput) {
    // const sides = sidesInput || 20;
    const randomNumber = Math.floor(Math.random() * sidesInput) + 1;

    return (
        alert(randomNumber)
    );
}

export default RollDice