import type { ReactNode } from 'react';
import { IconPaths } from './iconPaths/IconPaths';
import styles from './Icon.module.css';
import type { IIcon } from './Icon.definitions';

const Icon = ({ name, size = 'medium', color }: IIcon) => {
  const getIcon = (name: keyof typeof IconPaths): ReactNode => {
    const IconComponent = IconPaths[name];
    if (!IconComponent) {
      console.warn(`Icon not found: ${name.toString()}`);
      return null;
    }
    return <IconComponent />;
  };

  // Setup CSS class names
  const classNames = `icon ${styles.icon} ${styles[`icon-size-${size}`]}`;

  return (
    <span className={classNames}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill={color || 'currentColor'}
      >
        {name && getIcon(name)}
      </svg>
    </span>
  );
};

export default Icon;
