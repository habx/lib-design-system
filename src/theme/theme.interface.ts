import { Keyframes } from 'styled-components'

export interface ColorVariations {
  base?: string
  hover?: string
  focus?: string
  contrastText?: string
}

export interface TextColorVariations {
  base?: string
  title?: string
  placeholder?: string
  disabledPlaceholder?: string
}

export interface ColorFamilies {
  primary: ColorVariations
  secondary: ColorVariations
  warning: ColorVariations
}

export interface Fonts {
  title?: string
  text?: string
}

export interface Shadow {
  x: number
  y: number
  blur: number
  opacity: number
}

export interface Shadows {
  flat: Shadow[]
  lower: Shadow[]
  low: Shadow[]
  regular: Shadow[]
  high: Shadow[]
  higher: Shadow[]
}

export interface AnimationConfig {
  duration: 'xs' | 's' | 'm' | 'l'
}

export interface Animation extends AnimationConfig {
  keyframes: Keyframes
  timingFunction: string
}

export interface Animations {
  emerge: Animation
}

export default interface DesignSystemTheme {
  colors: ColorFamilies
  textColors: TextColorVariations
  backgroundColor: string
  fonts: Fonts
  shadows: Shadows
  animations: Animations
}

export interface GetterProps {
  theme?: {
    designSystem?: DesignSystemTheme
    designSystemRoot?: DesignSystemTheme
  }
}
