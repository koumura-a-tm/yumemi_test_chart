import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MouseEvent } from 'react'

const usePrefToggleButton = () => {
  const searchParams = useSearchParams()
  const queryParams = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const pref = queryParams.get('pref')
  const prefCodes = pref ? pref.split(',') : []
  const handleToggleChange = (e: MouseEvent<HTMLButtonElement>) => {
    const pref = queryParams.get('pref')
    const prefCodes = pref ? pref.split(',') : []

    const selectedPrefCode = e.currentTarget.value
    if (e.currentTarget.ariaChecked === 'true') {
      e.currentTarget.ariaChecked = 'false'
      prefCodes.length == 1
        ? queryParams.delete('pref')
        : queryParams.set(
            'pref',
            prefCodes
              .filter((prefCode) => prefCode !== selectedPrefCode)
              .join(',')
          )
    } else {
      e.currentTarget.ariaChecked = 'true'
      prefCodes.length == 0
        ? queryParams.set('pref', selectedPrefCode)
        : queryParams.set('pref', prefCodes.join(',') + `,${selectedPrefCode}`)
    }
    replace(`${pathname}?${queryParams.toString()}`)
  }

  return { prefCodes, handleToggleChange }
}

export default usePrefToggleButton
