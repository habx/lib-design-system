import useModal, { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import { useWindowSize } from '../_internal/useWindowSize'
import { ANIMATION_DURATIONS } from '../animations'
import { breakpoints } from '../breakpoints'
import { Modal } from '../Modal'
import { withTriggerElement } from '../withTriggerElement'

import { InnerTogglePanelProps } from './TogglePanel.interface'
import { Container, Overlay } from './TogglePanel.style'

const Context = React.createContext<ModalType<HTMLDivElement> | null>(null)

const InnerTogglePanel = React.forwardRef<
  HTMLDivElement,
  InnerTogglePanelProps
>(
  (
    {
      children,
      fullScreenOnMobile = false,
      onClose,
      onOpen,
      open,
      setStyle,
      style,
      triggerRef,
      withOverlay = true,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState(style)

    const modal = useModal<HTMLDivElement>({
      ref,
      open,
      onClose,
      persistent: false,
      animated: true,
      animationDuration: ANIMATION_DURATIONS.l,
    })

    const updateStyle = React.useCallback(() => {
      const modalElement = modal.ref?.current
      const triggerElement = triggerRef?.current

      if (!setStyle || !triggerElement || !modalElement) {
        return setCustomStyle(style)
      }

      const modalBoundingBox = modalElement.getBoundingClientRect()
      const triggerBoundingBox = triggerElement.getBoundingClientRect()

      const dimensions = {
        bottom: modalBoundingBox.bottom,
        clientHeight: modalElement.clientHeight,
        clientWidth: modalElement.clientWidth,
        height: modalBoundingBox.height,
        left: modalBoundingBox.left,
        right: modalBoundingBox.right,
        top: modalBoundingBox.top,
        width: modalBoundingBox.width,
      }

      const triggerDimensions = {
        bottom: triggerBoundingBox.bottom,
        clientHeight: triggerElement.clientHeight,
        clientWidth: triggerElement.clientWidth,
        height: triggerBoundingBox.height,
        left: triggerBoundingBox.left,
        right: triggerBoundingBox.right,
        top: triggerBoundingBox.top,
        width: triggerBoundingBox.width,
      }

      setCustomStyle({ ...setStyle(dimensions, triggerDimensions), ...style })
    }, [modal.ref, setStyle, style, triggerRef])

    React.useEffect(() => {
      if (open) {
        updateStyle()
      }
    }, [open, updateStyle])

    React.useEffect(() => {
      if (open) {
        onOpen?.()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const size = useWindowSize()

    React.useEffect(updateStyle, [children, size]) // eslint-disable-line react-hooks/exhaustive-deps

    const parent = React.useContext(Context)

    if (!isClientSide) {
      return null
    }

    const content = isFunction(children) ? children(modal) : children

    if (fullScreenOnMobile && size.width < breakpoints.raw.phone) {
      return (
        <Context.Provider value={modal}>
          <Modal onClose={onClose} open={open}>
            {content}
          </Modal>
        </Context.Provider>
      )
    }

    return ReactDOM.createPortal(
      <Context.Provider value={modal}>
        {withOverlay && modal.state === 'opened' && <Overlay />}

        <Container
          data-state={modal.state}
          ref={modal.ref}
          style={customStyle}
          {...props}
        >
          {content}
        </Container>
      </Context.Provider>,
      parent?.ref.current ?? document.body
    )
  }
)

export const TogglePanel = withTriggerElement<HTMLDivElement>({
  forwardRef: true,
})(InnerTogglePanel)
