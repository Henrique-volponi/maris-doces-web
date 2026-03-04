import { SxProps } from '@mui/material'
import { colors } from '../../../../ui/theme/colors'
import { fontFamily } from '../../../../ui/theme/font-family'

const buttonBase: SxProps = {
  padding: '14px 28px',
  borderRadius: 999,
  fontSize: '18px',
  fontWeight: 600,
  cursor: 'pointer',
  minWidth: 170,
  transition: 'all 0.2s ease',
}

const liftHover: SxProps = { transform: 'translateY(-2px)' }

export const container: SxProps = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  textAlign: 'center',
  padding: '48px 48px',
  background: `linear-gradient(180deg, ${colors.light.background} 0%, ${colors.light.muted} 100%)`,
}

export const iconWrapper: SxProps = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  background: colors.light.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 16px 32px rgba(0, 0, 0, 0.08)',
}

export const icon: SxProps = {
  width: 56,
  height: 56,
  color: colors.light.primaryForeground,
}

export const title: SxProps = {
  fontFamily: fontFamily.title,
  fontSize: '64px',
  color: colors.light.secondary,
}

export const description: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: '28px',
  lineHeight: 1.4,
  color: colors.light.mutedForeground,
  maxWidth: 940,
}

export const ctaRow: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  flexWrap: 'nowrap',
}

export const primaryButton: SxProps = {
  ...buttonBase,
  background: colors.light.primary,
  color: colors.light.primaryForeground,
  border: `1px solid ${colors.light.primary}`,
}

export const secondaryButton: SxProps = {
  ...buttonBase,
  background: 'transparent',
  color: colors.light.secondary,
  borderColor: colors.light.secondary,
}

export const primaryButtonHover: SxProps = {
  ...liftHover,
  boxShadow: '0 16px 28px rgba(210, 105, 30, 0.3)',
  background: colors.light.primary,
  borderColor: colors.light.primary,
}

export const secondaryButtonHover: SxProps = {
  ...liftHover,
  background: 'rgba(139, 69, 19, 0.08)',
  borderColor: colors.light.secondary,
  color: colors.light.secondary,
}
