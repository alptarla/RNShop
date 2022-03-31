import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import CategoryService from '../../services/CategoryService'

type CategoryState = {
  categories: string[]
}

export const getCategories = createAsyncThunk('categories/getCategories', () =>
  CategoryService.getCategories()
)

const initialState: CategoryState = {
  categories: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getCategories.fulfilled,
      (state, { payload }: PayloadAction<string[]>) => {
        state.categories = payload
      }
    )
  },
})

export default categorySlice.reducer
