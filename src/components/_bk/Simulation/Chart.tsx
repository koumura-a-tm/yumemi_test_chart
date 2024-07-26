import axios from 'axios'
import { FC, useEffect, useState } from 'react'
// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts'

// import studyDataList from './studyData'

// import { CheckField } from '@components/HighCharts/CheckField'
import { Graph } from '@components/HighCharts/Graph'
// import styles from '@styles/chart.module.scss'

// prefectureType
// type prefecturesProps = {
//   message: null
//   result: {
//     prefCode: number
//     prefName: string
//   }[]
// } | null

// // prefPopulationType
// type prefPopulationProps = {
//   prefName: string
//   data: {
//     year: number
//     value: number
//   }[]
// }[]

export const Chart: FC = () => {
  // const [prefectures, setPrefectures] = useState<prefecturesProps>(null)
  // const [prefPopulation, setPrefPopulation] = useState<prefPopulationProps>([])
  const [prefectures, setPrefectures] = useState<{
    message: null
    result: {
      prefCode: number
      prefName: string
    }[]
  } | null>(null)

  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([])

  // 都道府県一覧 を取得する
  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_REACT_APP_API_KEY },
      })
      .then((results) => {
        setPrefectures(results.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // チェックボックス をクリックした際の処理
  // const handleClickCheck = (
  //   prefName: string,
  //   prefCode: number,
  //   check: boolean
  // ) => {
  //   const c_prefPopulation = prefPopulation.slice()
  //   // チェックをつけた処理
  //   if (check) {
  //     if (
  //       c_prefPopulation.findIndex((value) => value.prefName === prefName) !==
  //       -1
  //     )
  //       return

  //     axios
  //       .get(
  //         'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
  //           String(prefCode),
  //         {
  //           headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY },
  //         }
  //       )
  //       .then((results) => {
  //         c_prefPopulation.push({
  //           prefName: prefName,
  //           data: results.data.result.data[0].data,
  //         })

  //         setPrefPopulation(c_prefPopulation)
  //       })
  //       .catch((error) => {
  //         return
  //       })
  //   }
  //   // チェックを外した処理
  //   else {
  //     const deleteIndex = c_prefPopulation.findIndex(
  //       (value) => value.prefName === prefName
  //     )
  //     if (deleteIndex === -1) return
  //     c_prefPopulation.splice(deleteIndex, 1)
  //     setPrefPopulation(c_prefPopulation)
  //   }
  // }

  return (
    <>
      {/* 都道府県チェックボックス */}
      {/* <h2 className={styles.h1}>都道府県</h2>
      {prefectures && (
        <CheckField
          prefectures={prefectures.result}
          onChange={handleClickCheck}
        />
      )} */}

      {/* 人口推移グラフ */}
      <h2 style={Styles.label}>人口推移グラフ</h2>
      <Graph populationdata={prefPopulation} />

      {/* <div className={styles.chart}>
        <ResponsiveContainer>
          <LineChart
            width={700}
            height={300}
            data={studyDataList}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="年度"
              interval={0}
              angle={-30}
              dx={-10}
              dy={5}
              tick={{
                fontSize: 10,
                fill: '#000',
              }}
            />
            <YAxis dataKey="問題数" tickCount={8} />

            <Line type="monotone" dataKey="問題数" stroke="#8054d8" unit="問" />
            <Line type="monotone" dataKey="正解数" stroke="#3ba2f6" unit="問" />
            <Line
              type="monotone"
              dataKey="正解率"
              stroke="#ff0092"
              strokeWidth={2}
              unit="%"
            />
            <Legend
              verticalAlign="top"
              height={30}
              iconSize={20}
              iconType="plainline"
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div> */}
    </>
  )
}

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: '10px',
  },
  label: {
    fontSize: '20px',
    padding: '0.5rem 2rem',
    borderLeft: '4px solid #000',
    marginLeft: '10pt',
  },
}
