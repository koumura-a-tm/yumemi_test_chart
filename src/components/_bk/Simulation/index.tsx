import dynamic from 'next/dynamic'
import { FC } from 'react'

// import { Loading } from './Loading'

const DynamicChart = dynamic<Record<string, unknown>>(
  () => import('./Chart').then((module) => module.Chart),
  { ssr: false }

  // {
  //   loading: Loading,
  // }
)

export const Simulation: FC = () => <DynamicChart />
