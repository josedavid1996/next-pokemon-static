import { Grid } from '@nextui-org/react'
import React from 'react'
import FavoriteCardPokemon from './FavoriteCardPokemon'

const FavoritePokemons = ({
  favoritePokemons
}: {
  favoritePokemons: number[]
}) => {
  return (
    <>
      <Grid.Container gap={2} direction="row" justify="flex-start">
        {favoritePokemons.map((id) => (
          <FavoriteCardPokemon id={id} key={id} />
        ))}
      </Grid.Container>
    </>
  )
}

export default FavoritePokemons
