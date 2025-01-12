import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

interface ButtonWithIconProps {
  backgroundColor: keyof typeof defaultTheme
  textColor?: keyof typeof defaultTheme
}

export const ButtonWithIcon = styled.button<ButtonWithIconProps>`
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  padding: 0.6rem;
  height: 2.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme[props.backgroundColor]};
  color: ${(props) => props.theme[props.textColor || 'gray-100']};
`
