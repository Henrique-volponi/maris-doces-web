import React from 'react'
import { SxProps } from '@mui/material'

interface ButtonProps {
  children: React.ReactNode
  sx?: SxProps
  onClick?: () => void
  variant?: 'contained' | 'outlined' | 'text'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  sx,
  onClick,
  variant = 'contained',
}) => {
  return (
    <button style={sx as React.CSSProperties} className={variant} onClick={onClick}>
      {children}
    </button>
  )
}
