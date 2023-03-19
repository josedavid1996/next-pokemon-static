import React, { useState } from 'react'
import { GetStaticPaths, NextPage, GetStaticProps } from 'next'

import { Button, Card, Container, Grid, Text } from '@nextui-org/react'

import confetti from 'canvas-confetti'

import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse } from '../../interface'
import localFavorites from '../../utils/localFavorites'
import { localFavorite } from '../../utils'
import Image from 'next/image'

import Layout from '../../components/layout/Layout'

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(
    localFavorite.existInFavorite(pokemon.id)
  )
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorite(!isInFavorite)

    if (isInFavorite) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }
  return (
    <>
      <Layout title={'pokemon.name'}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card hoverable css={{ padding: '30px' }}>
              <Card.Body>
                <Card.Image
                  src={
                    pokemon.sprites.other?.dream_world.front_default ||
                    'no-image-png'
                  }
                  alt={pokemon.name}
                  width="100%"
                  height={200}
                ></Card.Image>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header
                css={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text h1 transform="capitalize">
                  {pokemon.name}
                </Text>
                <Button
                  color="gradient"
                  ghost={!isInFavorite}
                  onClick={onToggleFavorite}
                >
                  {isInFavorite ? 'En favoritos' : 'Guardar en favoritos'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites</Text>
                <Container direction="row" display="flex">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  )
}

export default PokemonByNamePage

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const paths = data.results.map((item) => ({
    params: {
      name: item.name
    }
  }))

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const pokemon = ctx.params?.name
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemon}`)
  return {
    props: {
      pokemon: data
    }
  }
}
