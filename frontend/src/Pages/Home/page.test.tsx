import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('HomePage', () => {
  it('exibe hero, produtos e contato', () => {
    render(<HomePage />)

    expect(screen.getAllByText(/mari's doces/i)[0]).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ver produtos/i })).toBeInTheDocument()
    expect(screen.getByText(/nossos produtos/i)).toBeInTheDocument()
    expect(screen.getByText(/entre em contato/i)).toBeInTheDocument()
  })
})
