import styled from 'styled-components'

import Text from '../Text'

export const IconContainer = styled.div`
  height: 32px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`

export const NavBarItemContainer = styled.li`
  position: relative;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 20px;
  outline: none;
  display: flex;
  align-items: center;
  transition: background-color 150ms ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &[data-bottom='true'] {
    margin-top: auto;
  }

  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
  }

  &[data-active='true'],
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.4;
  }
`

export const TextContainer = styled.div`
  overflow: hidden;
`

export const TitleContainer = styled(Text).attrs(() => ({ opacity: 1 }))`
  margin-left: 18px;
  flex: 1 1 100%;
`

export const DescriptionContainer = styled(Text).attrs(() => ({
  opacity: 0.6,
  type: 'caption',
}))`
  margin-left: 18px;
  flex: 1 1 100%;
`
