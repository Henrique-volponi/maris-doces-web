import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Text } from '../../../../ui/components/Text'
import * as styles from './styles'
import { products } from './productsMock'

export const Products: React.FC = () => {
  return (
    <Stack sx={styles.section} id="products">
      <Text sx={styles.heading} variant="h2">
        Nossos Produtos
      </Text>
      <Text sx={styles.subheading} variant="body1">
        Feitos com carinho e ingredientes de qualidade
      </Text>

      <Box sx={styles.grid}>
        {products.map(product => (
          <Stack key={product.title} sx={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              style={styles.image as React.CSSProperties}
            />
            <Stack sx={styles.cardBody}>
              <Text sx={styles.cardTitle} variant="h3">
                {product.title}
              </Text>
              <Text sx={styles.cardDescription} variant="body1">
                {product.description}
              </Text>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Stack>
  )
}
