import type { IconPaths } from './iconPaths/IconPaths'

export const IconSize = {
  small: 'small',
  normal: 'normal',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge',
  auto: 'auto',
}

export interface IIcon {
  /** Name of Icon to be displayed */
  name?: keyof typeof IconPaths
  /** Size that Icon */
  size?: keyof typeof IconSize
  /** Override Icon color with another HEX color */
  color?: string
}
