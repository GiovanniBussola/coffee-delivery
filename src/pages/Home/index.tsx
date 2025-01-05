import {
  IconBorder,
  HomeContainer,
  ButtonWithIcon,
  Container,
  CoffeeCard,
  CoffeeCardFooter,
  CoffeeCardBody,
  CoffeeCardHeader,
  ButtonGroup,
} from './styles'
import {
  ShoppingCart,
  Package,
  Clock,
  Coffee,
  MapPin,
  Plus,
  Minus,
} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

import banner from '../../assets/banner.svg'
import logo from '../../assets/logo.svg'
import baseCoffee from '../../assets/base-coffee.png'

export function Home() {
  return (
    <HomeContainer>
      <Container>
        <header>
          <img src={logo} alt="Logo" />
          <div>
            <ButtonWithIcon backgroundColor="purple-100" textColor="purple-300">
              <MapPin weight="fill" color={defaultTheme['purple-300']} />
              Douradina, PR
            </ButtonWithIcon>
            <ButtonWithIcon backgroundColor="yellow-100">
              <ShoppingCart weight="fill" color={defaultTheme['yellow-500']} />
            </ButtonWithIcon>
          </div>
        </header>
        <main>
          <aside>
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </p>

            <ul>
              <li>
                <IconBorder color="yellow-500">
                  <ShoppingCart color="white" weight="fill" />
                </IconBorder>
                Compra simples e segura
              </li>
              <li>
                <IconBorder color="gray-400">
                  <Package color="white" weight="fill" />
                </IconBorder>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconBorder color="yellow-300">
                  <Clock color="white" weight="fill" />
                </IconBorder>
                Entrega rápida e rastreada
              </li>
              <li>
                <IconBorder color="purple-500">
                  <Coffee color="white" weight="fill" />
                </IconBorder>
                O café chega fresquinho até você
              </li>
            </ul>
          </aside>

          <img src={banner} alt="banner" width={476} height={400}></img>
        </main>
        <div>
          <CoffeeCard>
            <img src={baseCoffee} alt="Café base" />
            <CoffeeCardHeader>
              <span>TRADICIONAL</span>
            </CoffeeCardHeader>

            <CoffeeCardBody>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </CoffeeCardBody>
            <CoffeeCardFooter>
              <span>
                R$ <b>9,90</b>
              </span>
              <ButtonGroup>
                <button>
                  <Minus color={defaultTheme['purple-500']} />
                </button>
                <div>1</div>
                <button>
                  <Plus color={defaultTheme['purple-500']} />
                </button>
              </ButtonGroup>
              <ButtonWithIcon backgroundColor="purple-500">
                <ShoppingCart weight="fill" color="white" size={20} />
              </ButtonWithIcon>
            </CoffeeCardFooter>
          </CoffeeCard>
        </div>
      </Container>
    </HomeContainer>
  )
}
