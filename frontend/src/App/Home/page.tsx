import React from 'react'
import * as styles from './styles'
import Stack from '@mui/material/Stack'
import { Text } from '@ui'

const HomePage: React.FC = () => {
  return (
    <Stack sx={styles.container}>
      <Text sx={styles.title} variant="h1">
        Bem-vindo à Maris Doces!
      </Text>
      <Text sx={styles.description} variant="body1">
        Confeitaria artesanal com amor e sabor.
      </Text>
    </Stack>
  )
}

export default HomePage
