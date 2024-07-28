import {
  Decoder,
  object,
  string,
  number,
  array,
  constant,
  optional,
} from '@mojotech/json-type-validation'
import { fetchPopulationReturn } from './types'

const fetchPopulationReturnDecoder: Decoder<fetchPopulationReturn> = object({
  message: constant(null),
  result: object({
    boundaryYear: optional(number()),
    data: array(
      object({
        label: string(),
        data: array(
          object({
            year: number(),
            value: number(),
            rate: optional(number()),
          })
        ),
      })
    ),
  }),
})

export const fetchPopulationsByPrefCodes = async (
  prefCodes: string[] | number[]
): Promise<fetchPopulationReturn[]> => {
  try {
    const requests = prefCodes.map((prefCode) =>
      fetchPopulationByPrefCode(prefCode)
    )
    const populations = await Promise.all(requests)

    return populations
  } catch (error) {
    console.log(error)
    throw Error('Failed fetch Population Data.')
  }
}

export const fetchPopulationByPrefCode = async (
  prefCode: string | number
): Promise<fetchPopulationReturn> => {
  try {
    const res = await fetch(
      `${process.env.APP_URL}/api/population/${prefCode}`,
      {
        method: 'GET',
      }
    )

    const populations = res.json().then(fetchPopulationReturnDecoder.runPromise)
    return populations
  } catch (error) {
    console.log(error)
    throw Error('Failed fetch Population Data.')
  }
}
