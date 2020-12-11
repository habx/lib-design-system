import styled, { css } from 'styled-components'

import { applyOpacityToColor, stringifyColor } from '../color'
import { fontScale } from '../fontScale'
import { theme } from '../theme'

export const Placeholder = styled.div`
  flex: 1 1 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 150ms ease-in-out;
`

export const IconsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  color: ${theme.textColor({ useRootTheme: true })};

  span {
    font-size: 18px;
    margin-left: 6px;
  }
`

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 0 0 auto;
  font-family: ${theme.font()};
  font-size: ${fontScale.moon.size}px;
  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;
  height: var(--select-height);
  padding: 0 16px;
  box-shadow: inset 0 0 0 var(--select-border-width) var(--select-border-color);
  background-color: var(--select-background-color);

  --select-height: 48px;
  --select-background-color: ${theme.neutralColor(200, {
    gradient: 'withIntensityFading',
  })};
  --select-border-width: 0;
  --select-border-color: ${theme.neutralColor(200)};

  &[data-small='true'] {
    --select-height: 36px;
    padding: 0 12px;
  }

  &[data-tiny='true'] {
    --select-height: 24px;
    padding: 0 6px;
    font-size: ${fontScale.asteroid.size}px;
  }

  &:not([data-light='true']) {
    --select-border-width: 1.5px;

    &[data-background='true'] {
      --select-background-color: ${theme.neutralColor(100, {
        gradient: 'withIntensityFading',
      })};
      --select-border-color: ${theme.neutralColor(300)};
    }

    ${({ color }) =>
      color &&
      css`
        --select-background-color: ${stringifyColor(
          applyOpacityToColor(color, 0.15)
        )};
        --select-border-color: ${stringifyColor(
          applyOpacityToColor(color, 0.25)
        )};
      `};

    & ${Placeholder} {
      color: ${theme.textColor({ useRootTheme: true, valuePropName: 'color' })};

      &[data-empty='true'] {
        color: ${theme.textColor({
          useRootTheme: true,
          variation: 'lowContrast',
        })};
      }
    }
  }

  &[data-light='true'] {
    --select-background-color: ${theme.color('background')};
    font-size: ${fontScale.mars.size}px;
    padding: 0 12px;

    & ${Placeholder}:not([data-empty='true']) {
      color: ${theme.color('primary', { valuePropName: 'color' })};
    }
  }

  transition: all 150ms ease-in-out;

  &:disabled,
  &[data-disabled='true'] {
    color: ${theme.textColor()};
    pointer-events: none;

    &:not([data-light='true']) {
      &[data-background='true'] {
        --select-background-color: ${theme.neutralColor(200, {
          gradient: 'withIntensityFading',
        })};
      }
    }

    &::placeholder,
    ${Placeholder} {
      color: ${theme.textColor({
        variation: 'lowContrast',
        useRootTheme: true,
      })};
    }
  }

  &:hover,
  &:focus,
  &[data-open='true'] {
    --select-border-color: ${theme.neutralColor(300)};

    & ${IconsContainer} {
      color: ${theme.textColor({ useRootTheme: true })};
    }
  }

  &:focus,
  &[data-open='true'] {
    &[data-light='true'] {
      background-color: ${theme.neutralColor(200)};
    }

    &:not([data-light='true']) {
      background-color: ${theme.neutralColor(100)};
    }
  }

  &[data-open='true'] {
    transition: z-index ease-in 0s;
    z-index: 10;
  }
`

export const SearchInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  flex: 1 1 100%;

  border: none;
  padding: 0;
  background: none;
  font-size: inherit;
  align-self: stretch;
  min-width: 0;
  transition: color 150ms ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: none;

    &::placeholder {
      opacity: 0;
    }
  }
`

export const ElementLeftContainer = styled.div`
  margin-right: 8px;
  align-self: stretch;
`

export const ResetIconContainer = styled.div`
  transition: opacity 150ms ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;

  &:not([data-visible='true']) {
    opacity: 0;
    pointer-events: none;
  }
`

export const ElementRightContainer = styled.div`
  transition: opacity 150ms ease-in-out;

  &:not([data-visible='true']) {
    opacity: 0;
    pointer-events: none;
  }
`
