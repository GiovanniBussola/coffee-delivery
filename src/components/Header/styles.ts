import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const CartItemsCount = styled.span`
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['white-100']};
  font-size: 14px;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  padding: 0.2rem;
  margin: calc(0px - 1.5rem - 5px) 0 0 calc(0px - 1.5rem - 5px);
`
