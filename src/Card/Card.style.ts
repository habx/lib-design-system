import styled from 'styled-components'

import { ANIMATION_DURATIONS, ANIMATION_TIMING_FUNCTION } from '../animations'
import { breakpoints } from '../breakpoints'
import { Layout } from '../Layout'
import { theme } from '../theme'

export const CardContainer = styled(Layout)`
  border-radius: 6px;
  position: relative;
  transition-property: box-shadow, transform;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};
  overflow: hidden;
  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  &:not([data-flat='true']):not([data-outline='true']) {
    box-shadow: ${theme.shadow('regular')};
  }

  &[data-outline='true'] {
    border: 1px solid ${theme.neutralColor(300)};
  }

  &[data-animated='true'] {
    &:hover {
      cursor: pointer;

      &:not([data-flat='true']):not([data-outline='true']) {
        box-shadow: ${theme.shadow('regular', { hover: true })};
      }
    }
  }

  &[data-spacing='regular'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;

    @media (${breakpoints.below.smallTablet}) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='regular-horizontal-only'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;

    @media (${breakpoints.below.smallTablet}) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='narrow'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
    --layout-top-padding: 12px;
    --layout-bottom-padding: 12px;
  }

  &[data-spacing='narrow-horizontal-only'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
  }
`
