import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 10rem;
  margin-right: 10rem;

  /* padding: 1rem; */

  header {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main {
    display: flex;
    margin-top: 6rem;
    width: 100%;

    aside {
      p {
        margin-top: 1rem;
        color: ${(props) => props.theme['gray-400']};
      }
    }

    h1 {
      font-family: 'Baloo 2';
      font-size: 3rem;
      line-height: 3rem;
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
      gap: 5px;
    }
  }
`

interface IconBorderProps {
  color: keyof typeof defaultTheme
  format?: 'square' | 'circle'
}

export const IconBorder = styled.div<IconBorderProps>`
  background-color: ${(props) => props.theme[props.color]};
  box-sizing: border-box;
  border-radius: ${(props) => (props.format === 'square' ? '20%' : '100%')};
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
`
