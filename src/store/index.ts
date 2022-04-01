import { configureStore } from '@reduxjs/toolkit'
import { TOKEN_STORAGE_KEY } from '../constants'
import StorageService from '../services/StorageService'
import authSlice, { setToken } from './slices/authSlice'
import cartSlice from './slices/cartSlice'
import categorySlice from './slices/categorySlice'
import productSlice from './slices/productSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    category: categorySlice,
    cart: cartSlice,
  },
})

StorageService.getData<string>(TOKEN_STORAGE_KEY).then((token) => {
  store.dispatch(setToken(token))
})

export default store
