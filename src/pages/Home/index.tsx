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
  CoffeeCardsGroup,
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

const coffeeImages = import.meta.glob<{ default: string }>(
  '../../assets/coffees/*.png',
  {
    eager: true,
  },
)

interface Product {
  id: number
  name: string
  description: string
  price: number
  img: string
  tags: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    img: '../../assets/coffees/expresso.png',
    tags: ['TRADICIONAL'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 10.5,
    img: '../../assets/coffees/americano.png',
    tags: ['TRADICIONAL'],
  },
  {
    id: 3,
    name: 'Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10.5,
    img: '../../assets/coffees/americano.png',
    tags: ['TRADICIONAL'],
  },
  {
    id: 4,
    name: 'Expresso gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 10.5,
    img: '../../assets/coffees/cafe-gelado.png',
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 15,
    img: '../../assets/coffees/cafe-com-leite.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 12.5,
    img: '../../assets/coffees/latte.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 7,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 19.9,
    img: '../../assets/coffees/macchiato.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 8,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 14.7,
    img: '../../assets/coffees/mocaccino.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 10,
    img: '../../assets/coffees/mocaccino.png',
    tags: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: 10,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 10,
    img: '../../assets/coffees/mocaccino.png',
    tags: ['ESPECIAL', 'GELADO', 'ALCOÓLICO'],
  },
  {
    id: 11,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 12.5,
    img: '../../assets/coffees/arabe.png',
    tags: ['ESPECIAL'],
  },
  {
    id: 12,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 12.5,
    img: '../../assets/coffees/irlandes.png',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
  },
]

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
        <h2>Nossos cafés</h2>
        <CoffeeCardsGroup>
          {products.map((product) => {
            return (
              <CoffeeCard key={product.id}>
                <img src={coffeeImages[product.img].default} alt="Café base" />

                <CoffeeCardHeader>
                  {product.tags.map((tag) => {
                    return <span key={tag}>{tag}</span>
                  })}
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
            )
          })}
        </CoffeeCardsGroup>
      </Container>
    </HomeContainer>
  )
}
