import { BannerProps } from '../_internal/Banner'

export interface AlertBannerProps extends Omit<BannerProps, 'backgroundColor'> {
  /**
   * message contained in the banner
   * @default "This is an alert banner"
   */
  message: string

  /**
   * warning background style
   * @default false
   */
  warning?: boolean

  /**
   * make close button appears which call the callback on click
   */
  onClose?: () => void
}
