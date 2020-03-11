import BackgroundProps from '../Background/Background.interface'

export default interface LayoutProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  backgroundColor?: string
}

export enum LayoutChild {
  ActionBar = 0,
  HeaderBar = 1,
}

export interface LayoutContextValue {
  isInLayout: boolean
  registerChild: (type: LayoutChild) => void
}
