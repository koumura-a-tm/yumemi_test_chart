'use client'

import clsx from 'clsx'
import { MouseEvent, forwardRef, useState } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

type Props = {
  label: string
  children: React.ReactNode
  defaultIsOpen?: boolean
} & React.ComponentPropsWithoutRef<'button'>

export const Accordion = forwardRef<HTMLButtonElement, Props>(
  function ButtonBase(
    { label, children, defaultIsOpen, className, ...props },
    ref
  ) {
    const [isOpen, setIsOpen] = useState(defaultIsOpen)

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      setIsOpen(!isOpen)
    }

    return (
      <div className={clsx('accordion', className)}>
        <button
          onClick={handleClick}
          {...props}
          ref={ref}
          className="accordion-trigger"
        >
          <div className="accordion-trigger-contents">
            {label}
            {isOpen ? <SlArrowUp /> : <SlArrowDown />}
          </div>
        </button>
        <div className="separator" />
        {isOpen && children}
      </div>
    )
  }
)
