import { SxProps } from '@mui/material'
import { colors } from '../../../../ui/theme/colors'

export const footer: SxProps = {
  width: '100%',
  background: colors.light.secondary,
  color: colors.light.primaryForeground,
  padding: '28px 16px 36px',
  boxSizing: 'border-box',
}

export const inner: SxProps = {
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  textAlign: 'center',
}

export const brand: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 700,
  fontSize: '18px',
  color: colors.light.primaryForeground,
}

export const text: SxProps = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: 1.4,
  color: colors.light.primaryForeground,
}
