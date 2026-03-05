import { SxProps } from '@mui/material'
import { colors } from '../../../../ui/theme/colors'
import { fontFamily } from '../../../../ui/theme/font-family'

export const section: SxProps = {
  width: '100%',
  background: `linear-gradient(180deg, ${colors.light.background} 0%, ${colors.light.muted} 100%)`,
  padding: 'clamp(40px, 6vw, 72px) 24px clamp(56px, 6vw, 88px)',
  scrollMarginTop: '96px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
}

export const heading: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 700,
  fontSize: { xs: '34px', sm: '42px', md: '48px' },
  lineHeight: 1.1,
  color: colors.light.primary,
  textAlign: 'center',
}

export const subheading: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: { xs: '18px', sm: '20px', md: '22px' },
  lineHeight: 1.35,
  color: colors.light.mutedForeground,
  textAlign: 'center',
}

export const grid: SxProps = {
  width: '100%',
  maxWidth: 1240,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '24px',
}

export const card: SxProps = {
  background: colors.light.card,
  borderRadius: '16px',
  boxShadow: '0 14px 32px rgba(0, 0, 0, 0.12)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 360,
}

export const image: SxProps = {
  width: '100%',
  height: 220,
  objectFit: 'cover',
}

export const cardBody: SxProps = {
  padding: '18px 18px 22px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

export const cardTitle: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 700,
  fontSize: '22px',
  lineHeight: 1.2,
  color: colors.light.secondary,
}

export const cardDescription: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: 1.45,
  color: colors.light.mutedForeground,
}
