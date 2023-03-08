import type { NextPage, GetStaticProps } from 'next'

import { Grid } from '@nextui-org/react'

import { pokeApi } from '../api'
import Layout from '../components/layout/Layout'
import { PokemonListResponse, SmallPokemon } from '../interface'
import PokemonCard from '../components/pokemon/PokemonCard'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de paginas">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
