import { render, fireEvent } from '@testing-library/react'
import * as React from 'react'

import { Checkbox } from './index'

const Component = ({ initialState = false }) => {
  const [value, setValue] = React.useState(initialState)

  return (
    <Checkbox
      label="Label"
      checked={value}
      onChange={(event: any) => setValue(event.target.checked)}
    />
  )
}

const setup = (initialState?: boolean) => {
  const component = render(<Component initialState={initialState} />)
  const checkbox = component.getByTestId('checkbox-input') as HTMLInputElement
  const label = component.getByTestId('checkbox-label')

  return { checkbox, component, label }
}

describe('Checkbox', () => {
  it('should update its state when clicked', () => {
    const { checkbox } = setup()

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
  })

  it('should update its state when its label is clicked', () => {
    const { checkbox, label } = setup()

    fireEvent.click(label)
    expect(checkbox.checked).toBe(true)
    fireEvent.click(label)
    expect(checkbox.checked).toBe(false)
  })
})
