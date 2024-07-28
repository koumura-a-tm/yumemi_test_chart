import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Select } from '.'

describe('Select', () => {
  test('[role="combobox"]', () => {
    render(<Select />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
})
