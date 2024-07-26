import { styles } from './style'

export const Header = () => (
  <header css={styles.header}>
    <div css={[styles.container, styles.headerLayout]}>
      <h1>RESAS Graph App</h1>
    </div>
  </header>
)
