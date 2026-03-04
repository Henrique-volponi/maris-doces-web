import React from 'react'
import Stack from '@mui/material/Stack'
import { Text } from '../../../../ui/components/Text'
import { Button } from '../../../../ui/components/Button'
import * as styles from './styles'

interface HeroProps {
  onViewProducts?: () => void
  onContact?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onViewProducts, onContact }) => {
  return (
    <Stack sx={styles.container}>
      <Stack sx={styles.iconWrapper}>
        <svg viewBox="0 0 64 64" aria-hidden style={styles.icon as React.CSSProperties}>
          <path
            fill="currentColor"
            d="M20 18a4 4 0 1 1 8 0h-2a2 2 0 1 0-4 0h-2Zm8 0a4 4 0 1 1 8 0h-2a2 2 0 1 0-4 0h-2Zm8 0a4 4 0 1 1 8 0h-2a2 2 0 1 0-4 0h-2ZM14 28c0-1.1.9-2 2-2h32a2 2 0 0 1 2 2v14c0 7.18-5.82 13-13 13H27C19.82 55 14 49.18 14 42V28Zm34 0H16v14c0 6.08 4.92 11 11 11h16c6.08 0 11-4.92 11-11V28Zm-25 8h2a3 3 0 0 1 3 3v4h-2v-4a1 1 0 0 0-1-1h-2v-2Zm12 0h2a3 3 0 0 1 3 3v4h-2v-4a1 1 0 0 0-1-1h-2v-2ZM20 32h24v2H20v-2Z"
          />
        </svg>
      </Stack>

      <Text sx={styles.title} variant="h1">
        Mari's Doces
      </Text>

      <Text sx={styles.description} variant="body1">
        Confeitaria caseira com muito amor e dedicação. Ovos de
        <br />
        Páscoa, bolos, docinhos e muito mais!
      </Text>

      <Stack sx={styles.ctaRow}>
        <Button
          sx={styles.primaryButton}
          hoverSx={styles.primaryButtonHover}
          onClick={onViewProducts}
        >
          Ver Produtos
        </Button>
        <Button
          sx={styles.secondaryButton}
          hoverSx={styles.secondaryButtonHover}
          variant="outlined"
          onClick={onContact}
        >
          Entrar em Contato
        </Button>
      </Stack>
    </Stack>
  )
}
