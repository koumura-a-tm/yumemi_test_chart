import { css } from '@emotion/react'

import { colors } from '@styles/constants'

export const styles = {
  alert: css`
    padding: 12px;
    border-radius: 12px;
  `,
  alertLayout: css`
    display: flex;
  `,
  alertType: css`
    margin-right: 16px;
    font-weight: bold;
    text-transform: capitalize;
  `,
  alertInfo: css`
    background-color: ${colors.alertInfoBgColor};
    border: 1px solid ${colors.alertInfoColor};
  `,
  alertInfoType: css`
    color: ${colors.alertInfoColor};
  `,
  alertError: css`
    background-color: ${colors.alertErrorBgColor};
    border: 1px solid ${colors.alertErrorColor};
  `,
  alertErrorType: css`
    color: ${colors.alertErrorColor};
  `,
}
