import styled, { css } from 'styled-components'

import { transition } from '../animations'
import { fontScale } from '../fontScale'
import { Icon } from '../Icon'
import { theme } from '../theme'

export const inputStyle = css`
  font-family: ${theme.font()};
  font-size: var(--input-font-size);
  outline: none;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 4px;
  background-color: var(--input-background-color);

  box-shadow: inset 0 0 0 var(--input-border-width) var(--input-border-color),
    0 0 0 var(--input-outline-width) var(--input-outline-color);

  color: var(--input-color);

  --input-border-width: 0;
  --input-font-size: ${fontScale.moon.size}px;
  --input-border-color: ${theme.neutralColor(300)};
  --input-outline-width: 0;
  --input-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --input-background-color: ${theme.color('background')};
  --input-color: ${theme.textColor()};
  --input-placeholder-color: ${theme.textColor({
    variation: 'lowContrast',
  })};

  transition: ${transition('all')};

  max-width: 100%;
  min-width: 0;
  width: 100%;

  &[data-small='true'] {
    --input-font-size: ${fontScale.pluto.size}px;
  }

  &[data-tiny='true'] {
    --input-font-size: ${fontScale.asteroid.size}px;
  }

  &:not([data-light='true']) {
    --input-background-color: ${theme.neutralColor(200, {
      gradient: 'withIntensityFading',
    })};

    &:disabled,
    &[data-disabled='true'] {
      --input-color: ${theme.neutralColor(500)};
      pointer-events: none;

      --input-placeholder-color: ${theme.neutralColor(300)};
    }

    &:hover {
      --input-color: ${theme.neutralColor(900)};
      --input-placeholder-color: ${theme.neutralColor(900)};
    }

    &:active {
      --input-border-width: 1px;
      --input-background-color: ${theme.color('background')};
    }

    &:focus-within,
    &[data-open='true'],
    &[data-focused='true'] {
      --input-border-width: 0;
      --input-outline-width: 4px;
      --input-background-color: ${theme.color('background')};
    }

    &[data-background='true'] {
      --input-background-color: ${theme.neutralColor(100, {
        gradient: 'withIntensityFading',
      })};
      --input-border-color: ${theme.neutralColor(300)};
    }

    &[data-error='true'] {
      --input-outline-color: ${theme.color('error', { opacity: 0.2 })};
      --input-outline-width: 4px;
      --input-border-color: ${theme.color('error')};
      --input-border-width: 1px;
    }
  }

  &[data-bare='true'] {
    --input-border-width: 1px;
    --input-border-color: ${theme.neutralColor(300)};
    --input-background-color: ${theme.color('background')};
  }

  &[data-light='true'] {
    --input-color: ${theme.color('primary')};
    font-size: 18px;
    padding-left: 12px;
    padding-right: 12px;

    &:hover:not(:focus-within) {
      --input-background-color: ${theme.neutralColor(200, {
        gradient: 'withIntensityFading',
      })};
    }

    &:focus-within {
      --input-border-width: 1px;
      --input-color: ${theme.textColor()};
    }
  }

  &[data-error='true'] {
    color: ${theme.color('error')};
  }

  &:disabled {
    pointer-events: none;
  }
`

export const FakeInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 12px;
  max-height: 48px;
  min-height: 48px;

  &[data-small='true'] {
    padding: 0 12px;
    min-height: 36px;
    max-height: 36px;
  }

  &[data-tiny='true'] {
    min-height: 24px;
    max-height: 24px;
    padding: 0 6px;
  }

  ${inputStyle};
`

export const FakeInputContent = styled.div`
  transition: ${transition('all')};
  flex: 1 1 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &[data-placeholder='true'] {
    color: var(--input-placeholder-color);
  }

  &:not([data-placeholder='true']) {
    color: var(--input-color);
  }
`

export const SideElementContainer = styled.div`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--input-placeholder-color);
  flex: 0 0 auto;

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
  }
`

export const IconButton = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`
