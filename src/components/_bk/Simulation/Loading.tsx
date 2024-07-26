import styles from '@styles/chart.module.scss'

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingAnimation}></div>
    </div>
  )
}
