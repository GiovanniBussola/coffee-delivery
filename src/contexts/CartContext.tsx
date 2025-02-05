import { createContext, ReactNode, useState } from 'react'

interface AddItemToCartData {
  productId: number
  quantity: number
}

interface CartItem {
  productId: number
  quantity: number
  amount: number
}

interface CartContextType {
  cartItems: CartItem[]
  addItemToCart: (data: AddItemToCartData) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItemToCart({ productId, quantity }: AddItemToCartData) {
    const productAlreadyExistsInCart = cartItems.find(
      (cartItem) => cartItem.productId === productId,
    )

    if (productAlreadyExistsInCart) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.productId === productId) {
            return {
              productId: cartItem.productId,
              quantity: cartItem.quantity + quantity,
              amount: 0,
            }
          }

          return cartItem
        }),
      )

      return
    }

    setCartItems([...cartItems, { productId, quantity, amount: 0 }])
  }

  return (
    <CartContext.Provider value={{ addItemToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
