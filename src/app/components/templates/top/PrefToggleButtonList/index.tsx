'use client'

import { fetchPrefectureReturn } from '@/services/prefectures/types'
import useCheckBox from '../hooks/usePrefToggleButton'
import { PrefToggleButton } from '../PrefToggleButton'
import React from 'react'
import { Accordion } from '@/app/components/atoms/Accordion'

type Props = {
  prefDataList: fetchPrefectureReturn[]
}

const _PrefToggleButtonList = ({ prefDataList }: Props) => {
  const { prefCodes, handleToggleChange } = useCheckBox()

  return (
    <Accordion label="都道府県" defaultIsOpen={true}>
      <div className="toggle-button-list">
        {prefDataList.map((prefData) => {
          return (
            <PrefToggleButton
              key={prefData.prefName}
              prefData={prefData}
              handleToggleChange={handleToggleChange}
              checked={prefCodes.includes(prefData.prefCode.toString())}
            />
          )
        })}
      </div>
    </Accordion>
  )
}

export const PrefToggleButtonList = React.memo(_PrefToggleButtonList)
