import { Top } from './components/templates/top'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    pref?: string
  }
}) {
  return <Top pref={searchParams?.pref} />
}
