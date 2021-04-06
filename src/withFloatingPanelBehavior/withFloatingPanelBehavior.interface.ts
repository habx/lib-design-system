import { Modal } from '@delangle/use-modal'
import * as React from 'react'

export interface FloatingPanelReceivedProps {
  onClose: () => void
  open: boolean

  persistent?: boolean
  animated?: boolean
  animationDuration?: number

  /**
   * Value cached from the last time the modal was opening / opened
   * Can be useful if you want to keep Modal UI consistent during `closing` phase while resetting your application state.
   * For instance :
   * ```tsx
   * const MyComponent = () => {
   *   const [selectedRow, setSelectedRow] = React.useState(null)
   *
   *   return (
   *     <React.Fragment>
   *       <MyTable onSelectRow={setSelectedRow} />
   *       <Modal
   *         open={!!selectedRow}
   *         value={selectedRow}
   *       >
   *         {modal => modal.state !== ModalState.closed && <EditRow value={modal.value} />}
   *       </Modal>
   *     </React.Fragment>
   *   )
   *
   * }
   * ```
   */
  value?: any
}

export interface FloatingPanelInjectedProps {
  modal: Modal
  parentFloatingPanelRef: React.RefObject<HTMLElement> | null
}

export type WithFloatingPanelBehavior<BaseProps> = Omit<
  BaseProps,
  keyof FloatingPanelInjectedProps
> &
  FloatingPanelReceivedProps
