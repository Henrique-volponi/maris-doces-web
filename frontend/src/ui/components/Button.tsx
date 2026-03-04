import React from 'react'
import { SxProps } from '@mui/material'

interface ButtonProps {
  children: React.ReactNode
  sx?: SxProps
  hoverSx?: SxProps
  onClick?: () => void
  variant?: 'contained' | 'outlined' | 'text'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  sx,
  hoverSx,
  onClick,
  variant = 'contained',
}) => {
  const [isHover, setIsHover] = React.useState(false)
  const baseStyle = {
    ...(sx as React.CSSProperties),
    ...(isHover ? (hoverSx as React.CSSProperties) : {}),
  }

  return (
    <button
      style={baseStyle}
      className={variant}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </button>
  )
}
