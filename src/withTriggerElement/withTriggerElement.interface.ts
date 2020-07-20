import * as React from 'react'

type TriggerElement = ((state: TriggerState) => JSX.Element) | JSX.Element

export interface TriggerReceivedProps<RefElement> {
  triggerElement?: TriggerElement
  onClose?: (e: React.SyntheticEvent<RefElement>) => void
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export interface TriggerInjectedProps {
  triggerRef?: React.RefObject<HTMLElement>
  open?: boolean
}

export type TriggerState = {
  open: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export type WithTriggerElement<BaseProps, RefElement> = Omit<
  BaseProps,
  'open' | 'onClose'
> &
  TriggerReceivedProps<RefElement> & {
    open?: boolean
  }

export interface TriggerElementConfig {
  fowardRef?: boolean
}
