import { css } from '@emotion/react'

import { breakPoint, zIndex } from '@styles/constants'

export const styles = {
  toast: css`
    position: fixed;
    right: 8px;
    bottom: 8px;
    left: 8px;
    z-index: ${zIndex.toast};
    display: flex;
    visibility: hidden;

    @media (min-width: ${breakPoint.sm}px) {
      right: auto;
      bottom: 24px;
      left: 24px;
    }
  `,
  toastOpen: css`
    visibility: visible;
  `,
}
