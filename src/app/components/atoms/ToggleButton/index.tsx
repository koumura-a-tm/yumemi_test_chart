'use client'

import clsx from 'clsx'
import { MouseEvent, forwardRef, useState } from 'react'

type Props = {
  handleToggleChange?: (e: MouseEvent<HTMLButtonElement>) => void
  defaultIsChecked?: boolean
} & React.ComponentPropsWithoutRef<'button'>

export const ToggleButton = forwardRef<HTMLButtonElement, Props>(
  function ButtonBase(
    { handleToggleChange, defaultIsChecked, className, ...props },
    ref
  ) {
    const [isChecked, setIsChecked] = useState(defaultIsChecked)

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      setIsChecked(!isChecked)
      handleToggleChange ? handleToggleChange(e) : null
    }

    return (
      <button
        onClick={handleClick}
        {...props}
        ref={ref}
        className={clsx(className, isChecked && 'bg-[#2B2B2B] text-[#F5F5F5]')}
      />
    )
  }
)
