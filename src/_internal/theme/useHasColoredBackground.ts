import { useCurrentBackground } from './useCurrentBackground'

export const useHasColoredBackground = () => {
  const backgroundColor = useCurrentBackground()

  return backgroundColor !== '#FFFFFF'
}
