'use client'

import React, { useRef } from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  options?: Highcharts.Options
} & HighchartsReact.Props

const TestLineChart = ({ options, ...props }: Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

  // テスト時に動的にIDが振られないようにする
  Highcharts.useSerialIds(true)

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  )
}

// https://github.com/highcharts/highcharts-react?tab=readme-ov-file#getting-started
export const LineChart = ({ options, ...props }: Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

  return (
    <>
      {process && process.env.NODE_ENV === 'test' ? (
        <TestLineChart options={options} {...props} />
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
          {...props}
        />
      )}
    </>
  )
}
