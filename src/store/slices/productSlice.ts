import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_ERROR_MESSAGE } from '../../constants'
import ProductService from '../../services/ProductService'
import { Product, Status } from '../../types'

type ProductState = {
  products: Product[]
  status: Status
  error: string | null
}

export const getProducts = createAsyncThunk('products/getProducts', () =>
  ProductService.getProducts()
)

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getProducts.fulfilled,
      (state, { payload }: PayloadAction<Product[]>) => {
        state.status = 'idle'
        state.products = payload
        state.error = null
      }
    ),
      builder.addCase(getProducts.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message || DEFAULT_ERROR_MESSAGE
      })
    builder.addCase(getProducts.pending, (state) => {
      state.status = 'loading'
    })
  },
})

export default productSlice.reducer
