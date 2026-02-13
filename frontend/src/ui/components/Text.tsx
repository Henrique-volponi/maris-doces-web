import React from 'react'
import { SxProps } from '@mui/material'

interface TextProps {
  children: React.ReactNode
  sx?: SxProps
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption'
}

export const Text: React.FC<TextProps> = ({ children, sx, variant = 'body1' }) => {
  // Aqui você pode adaptar para usar Typography ou estilização própria
  return (
    <span style={sx as React.CSSProperties} className={variant}>
      {children}
    </span>
  )
}
