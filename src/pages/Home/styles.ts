import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  header {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  main {
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
    width: 100%;

    aside {
      p {
        margin-top: 1rem;
        color: ${(props) => props.theme['gray-400']};
        font-size: 20px;
      }
    }

    h1 {
      margin-top: 1.5rem;
      font-family: 'Baloo 2';
      font-size: 3rem;
      line-height: 4rem;
      font-weight: 900;
    }

    ul {
      margin-top: 4.125rem;
      display: grid;
      grid-template-columns: repeat(
        2,
        1fr
      ); /* Define duas colunas com tamanhos iguais */
      gap: 1rem; /* Espaçamento entre os itens */
      list-style: none; /* Remove os marcadores de lista */
      padding: 0; /* Remove o padding padrão */
    }

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`

export const Container = styled.div`
  width: 1120px;
`

interface IconBorderProps {
  color: keyof typeof defaultTheme
}

export const IconBorder = styled.div<IconBorderProps>`
  background-color: ${(props) => props.theme[props.color]};
  box-sizing: border-box;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ButtonWithIconProps {
  backgroundColor: keyof typeof defaultTheme
  textColor?: keyof typeof defaultTheme
}

export const ButtonWithIcon = styled.button<ButtonWithIconProps>`
  margin-right: 1rem;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  padding: 0.63rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme[props.backgroundColor]};
  color: ${(props) => props.theme[props.textColor || 'gray-100']};
`
