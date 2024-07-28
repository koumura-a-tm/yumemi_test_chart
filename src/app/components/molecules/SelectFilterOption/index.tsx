import clsx from 'clsx'
import { ComponentProps, useId } from 'react'
import { Select } from '../Select'

type Props = {
  selectProps: Omit<ComponentProps<typeof Select>, 'id' | 'className'>
  options: { value: string; label: string }[]
  className?: string
}

export const SelectFilterOption = ({
  selectProps,
  options,
  className,
}: Props) => {
  const selectId = useId()
  return (
    <Select id={selectId} {...selectProps} className={clsx(className)}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  )
}
