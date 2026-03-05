import { SxProps } from '@mui/material'
import { colors } from '../../../../ui/theme/colors'
import { fontFamily } from '../../../../ui/theme/font-family'

const buttonBase: SxProps = {
  padding: '14px 28px',
  borderRadius: 999,
  fontSize: '18px',
  fontWeight: 600,
  cursor: 'pointer',
  minWidth: { xs: 140, sm: 170 },
  transition: 'all 0.2s ease',
}

const liftHover: SxProps = { transform: 'translateY(-2px)' }

export const container: SxProps = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: { xs: '24px', sm: '32px' },
  textAlign: 'center',
  padding: 'clamp(24px, 6vw, 64px)',
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
  fontSize: 'clamp(38px, 4.2vw + 12px, 76px)',
  lineHeight: 1.05,
  color: colors.light.secondary,
}

export const description: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: 'clamp(16px, 1.4vw + 9px, 22px)',
  lineHeight: 1.32,
  color: colors.light.mutedForeground,
  maxWidth: 940,
}

export const ctaRow: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: { xs: '12px', sm: '16px' },
  flexWrap: 'wrap',
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
