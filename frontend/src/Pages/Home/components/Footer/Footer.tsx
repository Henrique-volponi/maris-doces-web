import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Text } from '../../../../ui/components/Text'
import * as styles from './styles'

export const Footer: React.FC = () => {
  return (
    <Box sx={styles.footer}>
      <Stack sx={styles.inner}>
        <Stack sx={styles.brand}>
          <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
            <path d="M12 21c-5-4.5-8-7.76-8-11.28A5.72 5.72 0 0 1 9.68 4a5.42 5.42 0 0 1 2.32.53A5.42 5.42 0 0 1 14.32 4 5.72 5.72 0 0 1 20 9.72C20 13.24 17 16.5 12 21Z" />
          </svg>
          Mari's Doces
        </Stack>

        <Text sx={styles.text}>Feito com amor e dedicação desde 2020</Text>

        <Text sx={styles.text}>© 2026 Mari's Doces. Todos os direitos reservados.</Text>
      </Stack>
    </Box>
  )
}
