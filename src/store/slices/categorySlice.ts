import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_SELECTED_CATEGORY } from '../../constants'
import CategoryService from '../../services/CategoryService'

type CategoryState = {
  categories: string[]
  selectedCategory: string
}

export const getCategories = createAsyncThunk('categories/getCategories', () =>
  CategoryService.getCategories()
)

const initialState: CategoryState = {
  categories: [],
  selectedCategory: DEFAULT_SELECTED_CATEGORY,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory(state, { payload }: PayloadAction<string>) {
      state.selectedCategory = payload
    },
  },
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
export const { setSelectedCategory } = categorySlice.actions
