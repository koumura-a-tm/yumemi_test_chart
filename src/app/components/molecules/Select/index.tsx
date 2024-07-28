'use client'

import clsx from 'clsx'
import { forwardRef } from 'react'

type Props = React.ComponentPropsWithoutRef<'select'>

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { className, ...props },
  ref
) {
  return <select className={clsx(className)} {...props} ref={ref} />
})
