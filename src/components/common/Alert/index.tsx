import { styles } from './style'

type Props = {
  type: 'info' | 'error'
  children: React.ReactNode
}

export const Alert = ({ type = 'info', children }: Props) => {
  return (
    <div
      css={[
        styles.alert,
        styles.alertLayout,
        type === 'info' && styles.alertInfo,
        type === 'error' && styles.alertError,
      ]}
    >
      <div
        css={[
          styles.alertType,
          type === 'info' && styles.alertInfoType,
          type === 'error' && styles.alertErrorType,
        ]}
      >
        {type}
      </div>

      {children}
    </div>
  )
}
