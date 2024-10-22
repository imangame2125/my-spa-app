import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { buttonTheme } from '../theme/button.theme';

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonTheme> &
{
  loading?: boolean
}
