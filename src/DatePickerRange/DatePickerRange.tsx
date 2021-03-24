import { ModalState } from '@delangle/use-modal'
import { format } from 'date-fns'
import * as React from 'react'

import { menuDefaultPositionSetter } from '../Menu'
import { TogglePanel, TogglePanelStyleSetter } from '../TogglePanel'
import { useHasColoredBackground } from '../useHasColoredBackground'
import { withLabel } from '../withLabel'

import { DatePickerPanel } from './DatePickerPanel'
import { DatePickerRangeInnerProps } from './DatePickerRange.interface'
import { DatePickerFakeInput } from './DatePickerRange.style'

const togglePanelStyleSetter: TogglePanelStyleSetter = (
  dimensions,
  triggerDimensions
) => {
  const menuHeight = dimensions.clientHeight
  const menuWidth = dimensions.clientWidth

  return menuDefaultPositionSetter({
    triggerDimensions,
    menuHeight,
    menuWidth,
    position: 'centered',
  })
}

const InnerDatePicker: React.VoidFunctionComponent<DatePickerRangeInnerProps> = ({
  value,
  onChange,
  exactMinBookingDays,
  onFocus,
  inputDateFormat = 'dd / MM / yyyy',
  small,
  disabled,
  error,
  placeholder,
  locale,
  numberOfMonths,
  ...props
}) => {
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = React.useState(false)
  const hasBackground = useHasColoredBackground()

  const handleTextInputFocus = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(e)
      setIsOpened(true)
    },
    [onFocus]
  )

  const inputValue = React.useMemo(() => {
    if (!value) {
      return placeholder ?? ''
    }

    if (exactMinBookingDays) {
      if (!value.start) {
        return ''
      }

      return format(value.start, inputDateFormat)
    }

    const startLabel = value.start ? format(value.start, inputDateFormat) : '?'
    const endLabel = value.end ? format(value.end, inputDateFormat) : '?'

    return `${startLabel}  – ${endLabel}`
  }, [exactMinBookingDays, inputDateFormat, placeholder, value])

  return (
    <React.Fragment>
      <TogglePanel
        triggerRef={triggerRef}
        open={isOpened}
        onClose={() => setIsOpened(false)}
        setStyle={togglePanelStyleSetter}
      >
        {(modal) =>
          modal.state !== ModalState.closed && (
            <DatePickerPanel
              value={value}
              onChange={(newValue) => {
                onChange(newValue)
                modal.close()
              }}
              onAbort={modal.close}
              exactMinBookingDays={exactMinBookingDays}
              locale={locale}
              numberOfMonths={numberOfMonths}
            />
          )
        }
      </TogglePanel>
      <DatePickerFakeInput
        ref={triggerRef}
        onFocus={handleTextInputFocus}
        tabIndex={0}
        data-error={error}
        data-small={small}
        data-background={hasBackground}
        data-disabled={disabled}
        data-focused={isOpened}
        {...props}
      >
        {inputValue}
      </DatePickerFakeInput>
    </React.Fragment>
  )
}

export const DatePickerRange = withLabel<HTMLDivElement>({
  orientation: 'vertical',
})<DatePickerRangeInnerProps>(InnerDatePicker)
