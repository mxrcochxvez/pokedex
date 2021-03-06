import React from 'react'

export default function Pokemon({ pokemon }) {
    return (
        <div className="pokemon">
            <div className="pokemon__name">
                {pokemon.name}
            </div>
            <div className="pokemon__meta">
                <span>HP: {pokemon.maxHP}</span>
                <span>CP: {pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.image} />
            </div>
            <div className="pokemon__attacks">
                {pokemon.attacks.special.slice(0, 3).map(attack => (
                    <span key={`${attack.name - attack.damage}`}>{attack.name}</span>
                ))}
            </div>
        </div>
    )
}
