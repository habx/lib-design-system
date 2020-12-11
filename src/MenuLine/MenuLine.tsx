import * as React from 'react'

import { Text } from '../Text'
import { useParentTogglePanel } from '../TogglePanel'

import { MenuLineProps } from './MenuLine.interface'
import { MenuLineContainer, SideElementContainer } from './MenuLine.style'

export const MenuLine = React.forwardRef<HTMLLIElement, MenuLineProps>(
  (props, ref) => {
    const {
      children,
      active,
      elementLeft,
      warning,
      primary,
      elementRight,
      onClick,
      disabled,
      ...rest
    } = props
    const togglePanel = useParentTogglePanel()

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        togglePanel.close()
        if (onClick) {
          onClick(e)
        }
      },
      [onClick, togglePanel]
    )
    return (
      <MenuLineContainer
        ref={ref}
        {...rest}
        onClick={handleClick}
        data-disabled={disabled}
        data-active={active}
      >
        {elementLeft && (
          <SideElementContainer
            primary={primary}
            warning={warning}
            data-position="left"
          >
            {elementLeft}
          </SideElementContainer>
        )}
        <Text primary={primary} warning={warning} variation="title">
          {children}
        </Text>
        {elementRight && (
          <SideElementContainer
            primary={primary}
            warning={warning}
            data-position="right"
          >
            {elementRight}
          </SideElementContainer>
        )}
      </MenuLineContainer>
    )
  }
)
