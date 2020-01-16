import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const TagContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border-radius: 14px;
  background-color: transparent;
  border: 1.5px solid ${palette.darkBlue[300]};
  font-family: ${theme.font()};
  line-height: 1;
  transition: background-color 50ms ease-in-out;

  padding: 0 12px;
  height: 28px;
  font-size: 12px;
  color: ${theme.color('secondary', {
    opacity: 0.72,
  })};

  &:not([data-active='true']) {
    &:not(:disabled) {
      &:hover,
      &:focus,
      &:active {
        background-color: ${palette.darkBlue[200]};
      }

      &:hover {
        border-color: ${palette.darkBlue[200]};
      }

      &:focus,
      &:active {
        border-color: ${palette.blue[300]};
      }

      &:focus {
        border-width: 3px;
        padding: 0 10.5px;
      }

      &[data-background='true'] {
        border-color: rgba(255, 255, 255, 0.3);
        color: ${theme.color('secondary')};

        &:hover:not(:focus):not(:active) {
          background-color: rgba(255, 255, 255, 0.7);
        }
      }
    }

    &:disabled {
      color: ${palette.darkBlue[300]};

      &[data-background='true'] {
        color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  &[data-active='true'] {
    border: none;
    color: ${theme.color('primary', { useRootTheme: true })};
    background-color: ${palette.blue[200]};
    padding: 0 13.5px;

    &[data-background='true'] {
      background-color: #fff;
    }
  }
`

export const SideElementContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;

  &[data-position='left'] {
    margin-right: 6px;
  }

  &[data-position='right'] {
    margin-left: 6px;
  }
`
