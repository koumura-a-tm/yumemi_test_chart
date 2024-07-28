import { render, screen } from '@testing-library/react'
import { Accordion } from '.'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Accordion', () => {
  test("[role='button']", () => {
    render(<Accordion label="trigger">Contents</Accordion>)
    expect(screen.getByRole('button', { name: 'trigger' })).toBeInTheDocument()
  })

  test('デフォルトでOpenになっている場合、Contentsが表示されている', () => {
    render(
      <Accordion label="trigger" defaultIsOpen={true}>
        Contents
      </Accordion>
    )
    expect(screen.getByText('Contents')).toBeInTheDocument()
  })

  test('デフォルトでOpenになっていない場合、Contentsが表示されていない', () => {
    render(
      <Accordion label="trigger" defaultIsOpen={false}>
        Contents
      </Accordion>
    )
    expect(screen.queryByText('Contents')).not.toBeInTheDocument()
  })

  test('デフォルトでOpenになっている場合、トリガーをクリックするとContentsが消える', async () => {
    render(
      <Accordion label="trigger" defaultIsOpen={true}>
        Contents
      </Accordion>
    )
    const trigger = await screen.findByRole('button', { name: 'trigger' })
    const user = userEvent.setup()

    await user.click(trigger)

    expect(screen.queryByText('Contents')).not.toBeInTheDocument()
  })

  test('デフォルトでOpenになっていない場合、トリガーをクリックするとContentsが表示される', async () => {
    render(
      <Accordion label="trigger" defaultIsOpen={false}>
        Contents
      </Accordion>
    )
    const trigger = await screen.findByRole('button', { name: 'trigger' })
    const user = userEvent.setup()

    await user.click(trigger)

    expect(screen.getByText('Contents')).toBeInTheDocument()
  })
})
