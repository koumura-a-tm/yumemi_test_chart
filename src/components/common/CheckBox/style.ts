import { css } from '@emotion/react'

import { breakPoint } from '@styles/constants'

export const styles = {
  checkBoxControl: css`
    display: flex;
    align-items: center;
  `,
  checkBox: css`
    width: 18px;
    height: 18px;

    @media (min-width: ${breakPoint.sm}px) {
      width: 24px;
      height: 24px;
    }
  `,
  labelText: css`
    margin-left: 8px;
    font-size: 18px;

    @media (min-width: ${breakPoint.sm}px) {
      margin-left: 8px;
      font-size: 24px;
    }
  `,
}
