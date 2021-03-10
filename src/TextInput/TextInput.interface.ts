import * as React from 'react'

import { styledAs } from '../_internal/types'
import { WithLabel } from '../withLabel'

export interface TextInputInnerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @ignore
   */
  as?: styledAs

  small?: boolean
  error?: boolean
  /**
   * @deprecated use bare instead
   */
  light?: boolean
  bare?: boolean
  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
  canReset?: boolean
  placeholder?: string
  containerRef?: React.RefObject<HTMLDivElement>
}

export interface TextInputProps extends WithLabel<TextInputInnerProps> {}
