import React from 'react'
import { useParams } from 'react-router'

export const DetailPokemon = () => {
    const { name }: any = useParams();
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}
