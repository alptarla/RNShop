import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_ERROR_MESSAGE } from '../../constants'
import ProductService from '../../services/ProductService'
import { Product, Status } from '../../types'

type ProductState = {
  products: Product[]
  selectedProduct: Product | null
  status: Status
  error: string | null
}

export const getProducts = createAsyncThunk('products/getProducts', () =>
  ProductService.getProducts()
)

export const getProductById = createAsyncThunk(
  'products/getProductById',
  ({ id }: { id: number }) => ProductService.getProductById(id)
)

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
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
    builder.addCase(
      getProductById.fulfilled,
      (state, { payload }: PayloadAction<Product>) => {
        state.status = 'idle'
        state.selectedProduct = payload
        state.error = null
      }
    )
    builder.addCase(getProductById.rejected, (state, action) => {
      state.status = 'error'
      state.error = action.error.message || DEFAULT_ERROR_MESSAGE
    })
    builder.addCase(getProductById.pending, (state, { meta }) => {
      state.status = 'loading'
    })
  },
})

export default productSlice.reducer
