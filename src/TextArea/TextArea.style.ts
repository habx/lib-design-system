import styled from 'styled-components'

import { inputStyle } from '../TextInput/TextInput.style'

export const Input = styled.textarea`
  flex: 1;
  margin: 0;
  padding: 12px;
  max-width: 100%;
  min-width: 0;
  height: 14rem;
  resize: vertical;
  width: 100%;

  &[data-small='true'] {
    height: 8rem;
  }

  ${inputStyle};
`
