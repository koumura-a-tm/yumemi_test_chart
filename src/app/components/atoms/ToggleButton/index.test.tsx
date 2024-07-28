import { render, screen } from '@testing-library/react'
import { ToggleButton } from '.'
import '@testing-library/jest-dom'

describe('ToggleButton', () => {
  test("[role='button']", () => {
    render(<ToggleButton>test</ToggleButton>)
    expect(screen.getByRole('button', { name: 'test' })).toBeInTheDocument()
  })
})
