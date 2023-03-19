import { css } from '@emotion/react'

export const test = (argument: string) => css`
  color: ${argument || 'green'};
`
