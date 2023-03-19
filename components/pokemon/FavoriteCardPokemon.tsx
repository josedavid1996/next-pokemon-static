import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

const FavoriteCardPokemon = ({ id }: { id: number }) => {
  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <>
      <Grid xs={6} sm={3} md={1} key={id} onClick={onFavoriteClicked}>
        <Card hoverable clickable css={{ padding: 10 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={'100%'}
            height={140}
          />
        </Card>
      </Grid>
    </>
  )
}

export default FavoriteCardPokemon
