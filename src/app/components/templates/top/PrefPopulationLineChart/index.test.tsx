import { render, screen } from '@testing-library/react'
import { PrefPopulationLineChart } from '.'
import { getPrefectures } from '@/services/prefectures/__mock__/fixture'
import {
  getPopulations,
  getPref1Population,
} from '@/services/population/__mock__/fixture'
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

describe('PrefPopulationLineChart', () => {
  test('Snapshot: データが空の場合', () => {
    const { container } = render(
      <PrefPopulationLineChart
        filteredPopulationDataList={[]}
        filteredPrefDataList={[]}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('Snapshot: 北海道のみの場合', () => {
    const { container } = render(
      <PrefPopulationLineChart
        filteredPopulationDataList={[getPref1Population]}
        filteredPrefDataList={getPrefectures.result.slice(0, 1)}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('Snapshot: 北海道＋青森県の場合', () => {
    const { container } = render(
      <PrefPopulationLineChart
        filteredPopulationDataList={getPopulations}
        filteredPrefDataList={getPrefectures.result.slice(0, 2)}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('Snapshot: pref:北海道, populationType:年少人口の場合', async () => {
    render(
      <PrefPopulationLineChart
        filteredPopulationDataList={[getPref1Population]}
        filteredPrefDataList={getPrefectures.result.slice(0, 1)}
      />
    )

    const select = screen.getByRole('combobox')
    await user.selectOptions(select, '年少人口')
    expect(select).toHaveDisplayValue('年少人口')

    expect(screen.getByRole('img')).toMatchSnapshot()
  })

  test('Snapshot: pref:北海道, populationType:生産年齢人口の場合', async () => {
    render(
      <PrefPopulationLineChart
        filteredPopulationDataList={[getPref1Population]}
        filteredPrefDataList={getPrefectures.result.slice(0, 1)}
      />
    )

    const select = screen.getByRole('combobox')
    await user.selectOptions(select, '生産年齢人口')
    expect(select).toHaveDisplayValue('生産年齢人口')

    expect(screen.getByRole('img')).toMatchSnapshot()
  })

  test('Snapshot: pref:北海道, populationType:老年人口の場合', async () => {
    render(
      <PrefPopulationLineChart
        filteredPopulationDataList={[getPref1Population]}
        filteredPrefDataList={getPrefectures.result.slice(0, 1)}
      />
    )

    const select = screen.getByRole('combobox')
    await user.selectOptions(select, '老年人口')
    expect(select).toHaveDisplayValue('老年人口')

    expect(screen.getByRole('img')).toMatchSnapshot()
  })
})
