import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const Container = styled.div`
  h2 {
    color: ${(props) => props.theme['gray-400']};
    margin-bottom: 2.5rem;
  }

  main {
    display: flex;
    justify-content: space-between;
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

export const CoffeeCard = styled.div`
  background-color: ${(props) => props.theme['white-300']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;

  border-radius: 6px 36px;
  width: 256px;
  height: 310px;

  div {
    display: flex;
  }

  img {
    width: 120px;
    margin-top: calc(0px - 2rem - 5px);
  }

  input {
    width: 50px;
  }
`

export const CoffeeCardsGroup = styled.div`
  display: flex;
  gap: 3rem 2rem;
  flex-wrap: wrap;
`

export const CoffeeCardHeader = styled.div`
  gap: 0.5rem;

  span {
    font-size: 10px;
    font-weight: 800;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-500']};

    padding: 7px;
    border-radius: 20px;
  }
`

export const CoffeeCardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 236px;

  p {
    font-size: 14px;
    color: ${(props) => props.theme['gray-200']};
    text-align: center;
  }

  h3 {
    color: ${(props) => props.theme['gray-400']};
    font-size: 20px;
    font-weight: 800;
  }
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme['gray-300']};
  }

  b {
    color: ${(props) => props.theme['gray-300']};
    font-size: 24px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme['white-500']};
  margin: 10px;
  gap: 10px;
  padding: 0.6rem;
  border-radius: 0.5rem;

  button {
    border: none;
    cursor: pointer;
    font-size: 12px;
    background-color: ${(props) => props.theme['white-500']};
  }
`
