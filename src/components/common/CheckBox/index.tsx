import { ChangeEventHandler } from 'react'

import { styles } from './style'

type Props = {
  label: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const CheckBox = ({ label, onChange }: Props) => (
  <label css={styles.checkBoxControl}>
    <input css={styles.checkBox} type="checkbox" onChange={onChange} />
    <span css={styles.labelText}>{label}</span>
  </label>
)
