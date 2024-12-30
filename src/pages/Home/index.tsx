import { IconBorder, HomeContainer } from './styles'
import { ShoppingCart, Package, Clock, Coffee } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

import banner from '../../assets/banner.svg'
import logo from '../../assets/logo.svg'

export function Home() {
  return (
    <HomeContainer>
      <header>
        <img src={logo} alt="Logo" />
        <div>
          Douradina, PR
          <IconBorder color="yellow-100" format="square">
            <ShoppingCart weight="fill" color={defaultTheme['yellow-500']} />
          </IconBorder>
        </div>
      </header>
      <main>
        <aside>
          <h1>
            Encontre o café perfeito <br></br>para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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

        <img src={banner} alt="banner" width={476} height={260}></img>
      </main>
    </HomeContainer>
  )
}
