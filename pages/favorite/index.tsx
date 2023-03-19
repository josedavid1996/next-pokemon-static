import { Card, Grid } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import FavoritePokemons from '../../components/pokemon/FavoritePokemons'
import NoFavorites from '../../components/ui/NoFavorites'
import localFavorites from '../../utils/localFavorites'

const Favorite = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  return (
    <>
      <Layout title="Pokémon - Favorites">
        {favoritePokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritePokemons favoritePokemons={favoritePokemons} />
        )}
      </Layout>
    </>
  )
}

export default Favorite
