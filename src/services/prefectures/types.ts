export type fetchPrefectureReturn = {
  prefCode: number
  prefName: string
}

export type fetchPrefecturesReturn = {
  message: string | null
  result: fetchPrefectureReturn[]
}
