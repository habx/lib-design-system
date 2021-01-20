import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface ModalInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
  title?: string
  persistent?: boolean
  animated?: boolean
  alwaysRenderChildren?: boolean
  width?: 'small' | 'regular' | 'large'
  value?: any
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export interface ModalProps
  extends WithTriggerElement<ModalInnerProps, HTMLDivElement> {}
