import { FC, } from 'react';
import { IconElementProps } from './@types/icon-element-props-type';

const IconElement: FC<IconElementProps> = ({ icon: IconComponent, variant = 'Outline', ...props }) => {
  return <IconComponent variant={variant} {...props} />;
};

export default IconElement;
