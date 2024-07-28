import { render } from '@testing-library/react'
import { LineChart } from '.'
import { options, optionsEmpty } from './constants'

describe('LineChart', () => {
  test('Snapshot: データが空の場合', () => {
    const { container } = render(<LineChart options={optionsEmpty} />)
    expect(container).toMatchSnapshot()
  })

  test('Snapshot: データが存在する場合', () => {
    const { container } = render(<LineChart options={options} />)
    expect(container).toMatchSnapshot()
  })
})
