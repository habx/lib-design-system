import * as React from 'react'

import MenuSectionContext from './MenuSection.context'
import MenuSectionProps from './MenuSection.interface'
import {
  MenuSectionContainer,
  MenuSectionLabelContainer,
  MenuSectionLabel,
  IconContainer,
} from './MenuSection.style'

const MenuSection: React.FunctionComponent<MenuSectionProps> = ({
  title,
  titleIconLeft,
  titleIconRight,
  children,
  ...props
}) => {
  const parentContext = React.useContext(MenuSectionContext)

  const context = React.useMemo(
    () => ({ ...parentContext, depth: parentContext.depth + 1 }),
    [parentContext]
  )

  return (
    <MenuSectionContainer {...props}>
      <MenuSectionLabelContainer>
        {titleIconLeft && (
          <IconContainer data-position="left">{titleIconLeft}</IconContainer>
        )}
        {title && (
          <MenuSectionLabel type="regular" opacity={1}>
            {title}
          </MenuSectionLabel>
        )}
        {titleIconRight && (
          <IconContainer data-position="left">{titleIconRight}</IconContainer>
        )}
      </MenuSectionLabelContainer>
      <MenuSectionContext.Provider value={context}>
        {children}
      </MenuSectionContext.Provider>
    </MenuSectionContainer>
  )
}

export default MenuSection
