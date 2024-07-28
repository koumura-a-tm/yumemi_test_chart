export type fetchPopulationReturn = {
  message: string | null
  result: {
    boundaryYear?: number
    data: {
      label: string
      data: {
        year: number
        value: number
        rate?: number
      }[]
    }[]
  }
}
