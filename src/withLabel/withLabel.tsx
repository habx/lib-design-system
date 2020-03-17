import * as React from 'react'
import styled from 'styled-components'

import palette from '../palette'
import Text from '../Text'
import { TextTypes } from '../Text/Text.interface'

import WithLabel from './withLabel.interface'

const LabelContainer = styled(Text)`
  user-select: none;

  margin: auto 0;

  &[data-disabled='true'] {
    color: ${palette.darkBlue[400]};
  }
`

const FieldWithLabelContainer = styled.div`
  display: flex;

  &[data-orientation='vertical'] {
    flex-direction: column;

    & > ${LabelContainer} {
      padding-bottom: 8px;
    }
  }

  &[data-orientation='horizontal'] {
    flex-direction: row;
    justify-content: space-between;

    & > ${LabelContainer} {
      padding-right: 8px;
    }
  }

  &[data-orientation='horizontal-reverse'] {
    flex-direction: row-reverse;
    justify-content: flex-end;

    & > ${LabelContainer} {
      padding-left: 8px;
    }
  }
`

type LabelReceivedProps = {
  label?: string
  labelType?: TextTypes
  error?: boolean
  disabled?: boolean
}

type Options = {
  padding?: 'small' | 'regular' | 'large'
  orientation?: 'vertical' | 'horizontal' | 'horizontal-reverse'
}

const withLabel = <RefElement extends HTMLElement>({
  padding = 'small',
  orientation = 'vertical',
}: Options = {}) => <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Field = React.forwardRef<RefElement, WithLabel<Props>>((props, ref) => {
    const { label, labelType, ...rest } = props as LabelReceivedProps

    if (label) {
      return (
        <FieldWithLabelContainer
          className="label-line"
          data-orientation={orientation}
          data-padding={padding}
        >
          <LabelContainer
            type={labelType}
            opacity={1}
            warning={rest.error}
            data-disabled={rest.disabled}
            markdown
          >
            {label}
          </LabelContainer>
          <WrappedComponent {...(rest as Props)} ref={ref} />
        </FieldWithLabelContainer>
      )
    }

    return <WrappedComponent {...(rest as Props)} ref={ref} />
  })

  return Field
}

export default withLabel
