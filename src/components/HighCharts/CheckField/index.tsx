import { styles } from './style'

type Props = {
  prefectures:
    | {
        prefCode: number
        prefName: string
      }[]
  onChange: (name: string, prefName: number, check: boolean) => void
}

// 都道府県一覧のチェックボックス を 表示するコンポーネント
export const CheckField = ({ prefectures, onChange }: Props) => (
  <div css={styles.checkcardList}>
    {prefectures.map((prefecture) => (
      <div css={styles.checkcard} key={prefecture.prefName}>
        <input
          type="checkbox"
          name="Prefecture name"
          onChange={(event) =>
            onChange(
              prefecture.prefName,
              prefecture.prefCode,
              event.target.checked
            )
          }
          id={'checkbox' + prefecture.prefCode}
        />
        <label css={styles.text} htmlFor={'checkbox' + prefecture.prefCode}>
          {prefecture.prefName.length === 3
            ? '' + prefecture.prefName
            : prefecture.prefName}
        </label>
      </div>
    ))}
  </div>
)
