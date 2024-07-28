import React from 'react'
import { fetchPrefectureNames } from '@/services/prefectures'
import { PrefToggleButtonList } from '../../PrefToggleButtonList'

export const PrefToggleListContainer = async () => {
  const rowPrefData = await fetchPrefectureNames()

  return <PrefToggleButtonList prefDataList={rowPrefData.result} />
}
