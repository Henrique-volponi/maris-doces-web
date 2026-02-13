import React from 'react'
import { SxProps } from '@mui/material'

interface SelectProps {
  options: Array<{ value: string; label: string }>
  sx?: SxProps
  value: string
  onChange: (value: string) => void
}

export const Select: React.FC<SelectProps> = ({ options, sx, value, onChange }) => {
  return (
    <select
      style={sx as React.CSSProperties}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
