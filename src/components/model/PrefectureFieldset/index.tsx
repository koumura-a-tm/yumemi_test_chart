import { ChangeEvent } from 'react'

import { styles } from './style'

import { CheckBox } from '@components/common/CheckBox'
import { Prefecture } from '@models/Prefecture'

type Props = {
  prefectures?: Prefecture[]
  handleCheck: (
    prefCode: number,
    prefName: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void
}

export const PrefectureFieldset = ({ prefectures, handleCheck }: Props) => (
  <fieldset css={styles.prefectureFieldset}>
    <legend css={styles.prefectureLegend}>都道府県</legend>

    <div css={styles.prefectureLayout}>
      {prefectures?.map((prefecture) => (
        <CheckBox
          key={prefecture.prefCode}
          label={prefecture.prefName}
          onChange={handleCheck(prefecture.prefCode, prefecture.prefName)}
        />
      ))}
    </div>
  </fieldset>
)
