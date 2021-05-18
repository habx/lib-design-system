import styled from 'styled-components'

import { ActionBarContainer } from '../ActionBar/ActionBar.style'
import { Layout } from '../Layout'
import { Text } from '../Text'
import { theme } from '../theme'

export const DatePickerPanelContainer = styled(Layout)`
  box-shadow: ${theme.shadow()};
  border-radius: 4px;

  --layout-left-padding: 24px;
  --layout-right-padding: 24px;
  --layout-top-padding: 24px;
  --layout-bottom-padding: 24px;

  & ${ActionBarContainer} {
    position: initial !important; // remove sticky position
  }
`

export const DatePickerPanelContent = styled.div`
  display: flex;
  align-items: center;
`

export const DatePickerMonthsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--date-picker-number-of-months), 1fr);
  grid-column-gap: 18px;
  grid-row-gap: 12px;
  padding: 0 12px;
`

export const MonthNavigationContainer = styled.div`
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`

export const MonthContainer = styled.div``

export const MonthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const MonthLabel = styled(Text).attrs(() => ({ variation: 'title' }))`
  text-transform: capitalize;

  &:first-child {
    margin-left: 8px;
  }
`

export const MonthTable = styled.div``

export const MonthTableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  margin-bottom: 6px;
`

export const MonthTableHeaderCell = styled.div`
  text-align: center;
  font-size: 14px;
  color: ${theme.textColor({ variation: 'title' })};
  font-family: ${theme.font()};
`

export const MonthTableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
`

export const DayContainer = styled.button`
  border: none;
  offset: none;
  height: 36px;
  width: 36px;
  letter-spacing: 0.1px;
  font-family: ${theme.font()};
  color: var(--day-color);
  background-color: var(--day-background-color);

  --day-color: ${theme.textColor()};
  --day-background-color: transparent;

  &[data-state='disabled'] {
    --day-background-color: transparent;
    --day-color: ${theme.neutralColor(300, {
      gradient: 'withIntensityFading',
    })};
  }

  &[data-state='within-hover-range'] {
    --day-color: ${theme.textColor()};
    --day-background-color: ${theme.neutralColor(200)};
  }

  &[data-state='selected'] {
    --day-color: ${theme.color('primary', {
      variation: 'contrastText',
    })};
    --day-background-color: ${theme.color('primary', { variation: 'calm' })};
  }

  &[data-state='selected-start'],
  &[data-state='selected-end'],
  &[data-state='selected-start-end'] {
    --day-color: ${theme.color('primary', {
      variation: 'contrastText',
    })};
    --day-background-color: ${theme.color('primary')};
  }

  &[data-state='selected-start'],
  &[data-state='selected-start-end'] {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  &[data-state='selected-end'],
  &[data-state='selected-start-end'] {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:focus {
    outline: none;
  }
`
