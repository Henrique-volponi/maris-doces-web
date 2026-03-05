import { SxProps } from '@mui/material'
import { colors } from '../../../../ui/theme/colors'
import { fontFamily } from '../../../../ui/theme/font-family'

export const section: SxProps = {
  width: '100%',
  background: colors.light.background,
  padding: 'clamp(44px, 6vw, 72px) 24px',
  scrollMarginTop: '96px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
}

export const heading: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 700,
  fontSize: { xs: '32px', sm: '38px', md: '42px' },
  lineHeight: 1.1,
  color: colors.light.primary,
  textAlign: 'center',
}

export const subheading: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: { xs: '17px', sm: '19px', md: '20px' },
  lineHeight: 1.4,
  color: colors.light.mutedForeground,
  textAlign: 'center',
}

export const cards: SxProps = {
  width: '100%',
  maxWidth: 1240,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '16px',
}

export const card: SxProps = {
  background: colors.light.card,
  borderRadius: '14px',
  border: `1px solid ${colors.light.border}`,
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
  padding: '22px 18px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  textAlign: 'center',
}

export const iconBadge: SxProps = {
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: colors.light.muted,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.light.primary,
}

export const cardTitle: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: 1.2,
  color: colors.light.secondary,
}

export const cardText: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: 1.35,
  color: colors.light.mutedForeground,
}

export const scheduleCard: SxProps = {
  width: '100%',
  maxWidth: 1200,
  background: colors.light.card,
  borderRadius: '14px',
  border: `1px solid ${colors.light.border}`,
  boxShadow: '0 14px 28px rgba(0, 0, 0, 0.08)',
  padding: '24px 22px',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
}

export const scheduleHeader: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontFamily: fontFamily.title,
  fontWeight: 700,
  fontSize: '20px',
  color: colors.light.primary,
}

export const scheduleText: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: 1.45,
  color: colors.light.mutedForeground,
  display: 'block',
}

export const scheduleList: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

export const note: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 600,
  fontSize: '14px',
  color: colors.light.secondary,
}

export const noteText: SxProps = {
  fontFamily: fontFamily.title,
  fontWeight: 500,
  fontSize: '14px',
  color: colors.light.mutedForeground,
  lineHeight: 1.4,
}

export const scheduleDivider: SxProps = {
  borderTop: '1px solid rgba(192, 99, 29, 0.2)',
  paddingTop: '10px',
}
