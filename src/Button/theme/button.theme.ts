import { cva } from 'class-variance-authority'

export const buttonTheme = cva('rounded-lg duration-200 outline-none', {
  variants: {
    variant: {
      filled: '',
      outlined: 'border border-primary-500',
      text: '',
    },
    size: {
      small: 'px-4 h-8 font-normal text-sm',
      medium: 'px-4 h-10 font-normal text-sm',
      normal: 'px-4 h-12 font-normal text-base',
      large: 'px-10 h-14 font-normal text-lg',
    },
    colorSchema: {
      primary: 'bg-primary-500 text-primary-600',
    },
    fullWidth: {
      true: 'w-full',
    },
    rounded: {
      true: 'rounded-full',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      colorSchema: 'primary',
      className: 'text-white hover:bg-primary-600 active:bg-primary-700',
    },
    {
      disabled: true,
      variant: 'filled',
      colorSchema: 'primary',
      className:
        'bg-gray-100 hover:bg-gray-100 active:bg-gray-100 text-gray-400 disabled:text-gray-400',
    },
    {
      variant: 'outlined',
      colorSchema: 'primary',
      className: 'bg-transparent hover:border-primary-600 active:border-primary-700',
    },
    {
      disabled: true,
      variant: 'outlined',
      colorSchema: 'primary',
      className:
        'border-gray-300 hover:bg-gray-100 active:bg-gray-100 text-gray-200 disabled:text-gray-400',
    },
    {
      variant: 'text',
      colorSchema: 'primary',
      className: 'bg-transparent hover:text-primary-800 active:text-primary-800 px-0',
    },
    {
      disabled: true,
      variant: 'text',
      colorSchema: 'primary',
      className: 'bg-transparent text-gray-100 hover:text-gray-100 active:text-gray-100',
    },
  ],
  defaultVariants: {
    variant: 'filled',
    colorSchema: 'primary',
    size: 'normal',
    fullWidth: false,
    rounded: false,
    disabled: false,
  },
})
