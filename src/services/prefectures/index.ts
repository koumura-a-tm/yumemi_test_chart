// 既存のコード
import {
  Decoder,
  object,
  string,
  number,
  array,
  constant,
} from '@mojotech/json-type-validation'
import { fetchPrefectureReturn, fetchPrefecturesReturn } from './types'

const fetchPrefectureReturnDecoder: Decoder<fetchPrefectureReturn> = object({
  prefCode: number(),
  prefName: string(),
})

const fetchPrefectureReturnsDecoder: Decoder<fetchPrefecturesReturn> = object({
  message: constant(null),
  result: array(fetchPrefectureReturnDecoder),
})

export const fetchPrefectureNames =
  async (): Promise<fetchPrefecturesReturn> => {
    try {
      console.log('APP_URL:', process.env.APP_URL) // 環境変数の確認

      const res = await fetch(`${process.env.APP_URL}/api/prefectures`, {
        method: 'GET',
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const prefectures = await res
        .json()
        .then(fetchPrefectureReturnsDecoder.runPromise)
      return prefectures
    } catch (error) {
      console.error('Error details:', error) // エラー詳細の出力
      throw Error('Failed fetch Prefecture Names.')
    }
  }
