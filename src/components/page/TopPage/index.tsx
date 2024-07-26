import { styles } from './style'

import { Alert } from '@components/common/Alert'
import { Header } from '@components/common/Header'
import { Toast } from '@components/common/Toast'
import { PopulationGraph } from '@components/model/PopulationGraph'
import { PrefectureFieldset } from '@components/model/PrefectureFieldset'
import usePopulation from '@hooks/usePopulation'
import usePrefecture from '@hooks/usePrefecture'

export const TopPage = () => {
  const {
    prefectures,
    isLoading,
    errorMessage: prefectureErrMsg,
  } = usePrefecture()

  const {
    populations,
    errorMessage: populationErrMsg,
    handlePrefectureCheck,
    handleResetError,
  } = usePopulation()

  return (
    <>
      <Header />

      <main css={styles.main}>
        {isLoading ? (
          // 都道府県API  - 読み込み中の UI
          <div css={[styles.container, styles.mainLoadingLayout]}>
            <p css={styles.mainLoadingText}>Loading...</p>
          </div>
        ) : prefectureErrMsg ? (
          // 都道府県API  - エラー時の UI
          <div css={styles.container}>
            <Alert type="error">{prefectureErrMsg}</Alert>
          </div>
        ) : (
          // 都道府県API - データ取得成功時の UI
          prefectures && (
            <div css={[styles.container, styles.mainLayout]}>
              <PrefectureFieldset
                prefectures={prefectures?.result}
                handleCheck={handlePrefectureCheck}
              />
              <PopulationGraph data={populations} />
            </div>
          )
        )}
      </main>

      <Toast isOpen={!!populationErrMsg} onClose={handleResetError}>
        <Alert type="error">{populationErrMsg}</Alert>
      </Toast>
    </>
  )
}
