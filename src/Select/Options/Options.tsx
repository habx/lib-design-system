import { ModalState } from '@delangle/use-modal'
import * as React from 'react'

import Menu from '../../Menu'
import Option from '../Option'
import SelectContext from '../Select.context'

import OptionsProps from './Options.interface'
import { SelectAllOption } from './Options.style'

const Options: React.FunctionComponent<OptionsProps> = ({
  options,
  open,
  focusedItem,
  allSelected,
  onSelect,
  onSelectAll,
  selectAllLabel,
  onClose,
  containerRef,
}) => {
  const { multi, canSelectAll } = React.useContext(SelectContext)

  return (
    <Menu
      data-testid="options-container"
      open={open}
      onClose={onClose}
      triggerRef={containerRef}
      fullScreenOnMobile
    >
      {(modal) =>
        modal.state !== ModalState.closed && (
          <React.Fragment>
            {multi && canSelectAll && (
              <SelectAllOption
                selected={allSelected}
                focused={false}
                onClick={() => onSelectAll(!allSelected)}
                label={selectAllLabel || 'Select all'}
              />
            )}
            {options.map((option) => (
              <Option
                key={option.value}
                selected={option.selected}
                onClick={() => onSelect(option)}
                focused={option === focusedItem}
                disabled={option.disabled}
                {...option}
              />
            ))}
          </React.Fragment>
        )
      }
    </Menu>
  )
}

export default Options
