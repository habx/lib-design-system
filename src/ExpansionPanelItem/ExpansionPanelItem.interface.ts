import { Modal } from '@delangle/use-modal'
import * as React from 'react'

export default interface ExpansionPanelItem
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  error?: boolean
  open?: boolean
  onToggle?: (e?: React.MouseEvent) => void
  children?: React.ReactNode | ((state: Modal) => JSX.Element)
  header?: React.ReactNode | ((state: Modal) => JSX.Element)
  disabled?: boolean
}
