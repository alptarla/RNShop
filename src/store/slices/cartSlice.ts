import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types'

type CartState = {
  products: Product[]
}

const initialState: CartState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }: PayloadAction<Product>) {
      state.products.push(payload)
    },
    removeProduct(state, { payload }: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== payload
      )
    },
    clearCart(state) {
      state.products = []
    },
  },
})

export default cartSlice.reducer
export const { addProduct, removeProduct, clearCart } = cartSlice.actions
