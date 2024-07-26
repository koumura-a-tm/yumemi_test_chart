import axios from 'axios'
import { CSSProperties, useEffect, useState } from 'react'

import { CheckField } from '../CheckField'
import { Graph } from '../Graph'

export const Main = () => {
  const [prefectures, setPreFectures] = useState<{
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
        headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY },
      })
      .then((results) => {
        setPreFectures(results.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // チェックボックス をクリックした際の処理
  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    const c_prefPopulation = prefPopulation.slice()

    // チェック をつけた際の 処理
    if (check) {
      if (
        c_prefPopulation.findIndex((value) => value.prefName === prefName) !==
        -1
      )
        return

      axios
        .get(
          'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
            String(prefCode),
          {
            headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY },
          }
        )
        .then((results) => {
          c_prefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[0].data,
          })

          setPrefPopulation(c_prefPopulation)
        })
        .catch((error) => {
          return
        })
    }
    // チェック を外した際の 処理
    else {
      const deleteIndex = c_prefPopulation.findIndex(
        (value) => value.prefName === prefName
      )
      if (deleteIndex === -1) return
      c_prefPopulation.splice(deleteIndex, 1)
      setPrefPopulation(c_prefPopulation)
    }
  }

  return (
    <main>
      <h2 style={Styles.label}>都道府県！</h2>
      {prefectures && (
        <CheckField
          prefectures={prefectures.result}
          onChange={handleClickCheck}
        />
      )}

      <h2 style={Styles.label}>人口推移グラフ</h2>
      <Graph populationdata={prefPopulation} />
    </main>
  )
}

const Styles: { [key: string]: CSSProperties } = {
  label: {
    fontSize: '20px',
    padding: '0.5rem 2rem',
    borderLeft: '4px solid #000',
    marginLeft: '10pt',
  },
}
