'use client'

import { fetchPrefectureReturn } from '@/services/prefectures/types'
import { ToggleButton } from '@/app/components/atoms/ToggleButton'
import { MouseEvent } from 'react'

type Props = {
  prefData: fetchPrefectureReturn
  checked?: boolean
  handleToggleChange?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const PrefToggleButton = ({
  prefData,
  checked,
  handleToggleChange,
}: Props) => {
  return (
    <ToggleButton
      value={prefData.prefCode}
      aria-checked={checked}
      defaultIsChecked={checked}
      handleToggleChange={handleToggleChange}
    >
      {prefData.prefName}
    </ToggleButton>
  )
}
