import styled from 'styled-components'

import zIndex from '../_internal/zIndex'
import animations from '../animations'
import theme from '../theme'

export const ANIMATION_DURATION = 150

export const MenuTriggerContainer = styled.span`
  position: relative;
  align-self: flex-start;
`

export const MenuContent = styled.div`
  background-color: ${theme.color('background', { useRootTheme: true })};
  padding: 12px 0;
  box-shadow: ${theme.shadow()};
`

export const MenuContainer = styled.ul`
  z-index: ${zIndex.dropDowns + 1};
  opacity: 1;
  border-radius: 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: fixed;

  &:not([data-state='opened']) {
    pointer-events: none;
    opacity: 0;
  }

  &[data-state='opening'] {
    animation: ${animations('emergeSlantFromBottom')};
  }

  &[data-state='closing'] {
    animation: ${animations('diveSlant')};
  }
`

export const MenuFullScreenContainer = styled.div`
  margin: 0 calc(0px - var(--layout-right-padding)) 0
    calc(0px - var(--layout-left-padding));
`
