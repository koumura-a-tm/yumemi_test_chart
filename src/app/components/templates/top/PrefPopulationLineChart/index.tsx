'use client'

import React, { useState } from 'react'
import { LineChart } from '@/app/components/organisms/LineChart'
import { getHighChartsOptions } from './utils'
import { fetchPrefectureReturn } from '@/services/prefectures/types'
import { fetchPopulationReturn } from '@/services/population/types'
import { SelectFilterOption } from '@/app/components/molecules/SelectFilterOption'
import { options } from './constants'

type Props = {
  filteredPrefDataList: fetchPrefectureReturn[]
  filteredPopulationDataList: fetchPopulationReturn[]
}

export const PrefPopulationLineChart = ({
  filteredPrefDataList,
  filteredPopulationDataList,
}: Props) => {
  const [populationType, setPopulationType] = useState('総人口')

  const highChartsOptions = getHighChartsOptions(
    filteredPrefDataList,
    filteredPopulationDataList,
    populationType
  )

  return (
    <section className="chart">
      <SelectFilterOption
        selectProps={{
          onChange: (e) => setPopulationType(e.currentTarget.value),
        }}
        options={options}
        className="select-filter-option"
      />
      <LineChart options={highChartsOptions} />
    </section>
  )
}
