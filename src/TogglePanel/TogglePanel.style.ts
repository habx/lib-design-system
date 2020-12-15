import styled from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { animations } from '../animations'
import { Background } from '../Background'

export const Container = styled(Background)`
  position: fixed;
  opacity: 1;
  z-index: ${zIndex.dropDowns};
  border-radius: 4px;

  &:not([data-state='opened']) {
    pointer-events: none;

    opacity: 0;
  }

  &[data-state='opening'] {
    animation: ${animations('emerge')};
  }

  &[data-state='closing'] {
    animation: ${animations('diveSlant')};
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.dropDowns};
`
