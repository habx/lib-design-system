import { BackgroundProps } from '../../Background'
import { Color } from '../../color'
import { ThemeVariant } from '../../theme'

export interface BannerProps extends Omit<BackgroundProps, 'backgroundColor'> {
  /**
   * is banner visible
   */
  open: boolean

  /**
   * background color hex overwrite
   */
  backgroundColor?: Color | ((theme: ThemeVariant) => Color)
}
