import { ButtonHTMLAttributes } from 'react'
import { defaultTheme } from '../../styles/themes/default'
import { ButtonWithIcon } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: keyof typeof defaultTheme
  textColor?: keyof typeof defaultTheme
}

export function Button({
  backgroundColor,
  textColor,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonWithIcon
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...rest}
    >
      {children}
    </ButtonWithIcon>
  )
}
