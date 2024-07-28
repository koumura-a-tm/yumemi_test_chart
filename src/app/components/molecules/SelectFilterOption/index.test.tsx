import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SelectFilterOption } from './'

const user = userEvent.setup()

function setup() {
  const options = [
    { label: '総人口', value: '0' },
    { label: '年少人口', value: '1' },
    { label: '生産年齢人口', value: '2' },
    { label: '老年人口', value: '3' },
  ]
  render(
    <SelectFilterOption selectProps={{ name: '総人口' }} options={options} />
  )
  const select = screen.getByRole('combobox')
  const selectByUser = (index: number) =>
    user.selectOptions(select, options[index].label)
  return { options, select, selectByUser }
}

describe('SelectFilterOption', () => {
  test('要素を変更すると値が変わる', async () => {
    const { options, select, selectByUser } = setup()
    expect(select).toHaveDisplayValue(options[0].label)
    await selectByUser(1)
    expect(select).toHaveDisplayValue(options[1].label)
  })
})
