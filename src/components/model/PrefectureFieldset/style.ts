import { css } from '@emotion/react'

import { breakPoint } from '@styles/constants'

export const styles = {
  prefectureFieldset: css`
    padding-right: 0;
    padding-left: 0;
    border: none;
  `,
  prefectureLegend: css`
    font-size: 24px;
    text-align: center;
    @media (min-width: ${breakPoint.sm}px) {
      font-size: 32px;
    }
  `,
  prefectureLayout: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, 108px);
    gap: 8px;
    place-content: center;
    @media (min-width: ${breakPoint.sm}px) {
      grid-template-columns: repeat(auto-fit, 136px);
    }
  `,
}
