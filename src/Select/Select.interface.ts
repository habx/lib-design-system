import * as React from 'react'

import { formValue } from '../_internal/types'
import WithLabel from '../withLabel/withLabel.interface'

export interface SelectContextValue {
  multi: boolean
  small: boolean
  tiny: boolean
  canSelectAll: boolean
}

export interface SelectInnerProps
  extends Omit<
    React.InputHTMLAttributes<HTMLDivElement>,
    'onChange' | 'value'
  > {
  // Visual
  small?: boolean
  tiny?: boolean
  light?: boolean

  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
  selectAllLabel?: string

  // Behavior
  canSelectAll?: boolean
  canReset?: boolean
  filterable?: boolean

  // Data
  options: any[]
  valueFormat?: 'full' | 'simple'
  multi?: boolean
  onChange?: (value: formValue | formValue[] | null) => void
  value?: formValue | formValue[]
}

export default interface SelectProps extends WithLabel<SelectInnerProps> {}

export interface SelectState {
  isOpened: boolean
  query: string
  focusedItem: any
  wrapperRect: ClientRect
  hoverReset: boolean
}

export enum ActionType {
  UpdateQuery = 'UPDATE_QUERY',
  ToggleVisibility = 'TOGGLE_VISIBILITY',
  RemoveFocusItem = 'REMOVE_FOCUS_ITEM',
  AddFocusItem = 'ADD_FOCUS_ITEM',
  Resize = 'RESIZE',
  HoverReset = 'HOVER_RESET',
}

export type SelectAction =
  | { type: ActionType.ToggleVisibility }
  | { type: ActionType.RemoveFocusItem }
  | { type: ActionType.Resize }
  | { type: ActionType.UpdateQuery; value: string }
  | { type: ActionType.AddFocusItem; value: any }
  | { type: ActionType.HoverReset; value: boolean }
