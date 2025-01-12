import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { CartItemsCount, HeaderContainer } from './styles'
import { Button } from '../Button'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />

      <div>
        <Button backgroundColor="purple-100" textColor="purple-300">
          <MapPin weight="fill" color={defaultTheme['purple-300']} size={22} />
          Douradina, PR
        </Button>
        <>
          <Button backgroundColor="yellow-100">
            <ShoppingCart
              weight="fill"
              color={defaultTheme['yellow-500']}
              size={22}
            />
          </Button>

          <CartItemsCount>2</CartItemsCount>
        </>
      </div>
    </HeaderContainer>
  )
}
