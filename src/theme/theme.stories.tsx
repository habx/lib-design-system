import { withKnobs, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import Background from '../Background'
import Button from '../Button'
import palette from '../palette'
import Text from '../Text'
import TextInput from '../TextInput'
import Title from '../Title'
import useTheme from '../useTheme'

import theme from './theme'
import { THEME_PATCHES } from './theme.data'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
`

const Line = styled.div`
  display: flex;
  align-items: center;
`

const ColorLabel = styled(Title)`
  width: 170px;
`

const Color = styled.div`
  width: 150px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Circle = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: ${theme.shadow()};
`

const ThemePatchContainer = styled.div`
  max-width: 520px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

const ThemePatchPalette = () => {
  const { colors } = useTheme()

  return (
    <Container>
      <Line>
        <ColorLabel type="section" />
        {Object.keys(Object.values(colors)[0]).map(colorName => (
          <Color key={colorName}>
            <Title type="section">{colorName}</Title>
          </Color>
        ))}
      </Line>
      {Object.entries(colors).map(
        ([colorFamilyName, colorFamilyVariations]) => (
          <Line key={colorFamilyName}>
            <ColorLabel type="section">{colorFamilyName}</ColorLabel>
            {Object.values(colorFamilyVariations).map(
              (color: string, index) => (
                <Color key={index}>
                  <Circle color={color} />
                </Color>
              )
            )}
          </Line>
        )
      )}
    </Container>
  )
}

storiesOf('Utility|theme', module)
  .addDecorator(withKnobs)
  .add('colors', () => (
    <Background
      backgroundColor={select(
        'Background color',
        Object.keys(THEME_PATCHES),
        '#FFFFFF'
      )}
    >
      <ThemePatchPalette />
    </Background>
  ))
  .add('patches', () => (
    <Background
      backgroundColor={select(
        'Background color',
        Object.keys(THEME_PATCHES),
        palette.darkBlue[900]
      )}
    >
      <ThemePatchContainer>
        <Title type="section">Exemple de section colorée</Title>
        <TextInput placeholder="votre@mail.com" />
        <Text>
          Les volumes et la forme des pièces sont représentés à titre indicatif.
          Ils ne constituent pas le plan definitif de votre futur appartement
          mais bien une suggestion d'agencement. C'est notre architecte qui
          finalisera ce plan pour vous.
        </Text>
        <Button>Bouton</Button>
        <Button outline>Bouton outline</Button>
      </ThemePatchContainer>
    </Background>
  ))
