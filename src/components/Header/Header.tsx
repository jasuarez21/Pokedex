import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Logo Pokemon" height="100"  />
            <Link to="/">All Pokemons</Link>
            <Link to="/YourPokemons">Your Pokemons</Link>
            <Link to="/detail/pikachu">Details</Link>
        </>
    )
}
