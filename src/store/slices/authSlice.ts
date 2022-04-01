import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_ERROR_MESSAGE, TOKEN_STORAGE_KEY } from '../../constants'
import AuthService from '../../services/AuthService'
import StorageService from '../../services/StorageService'
import { Status, UserParam } from '../../types'

interface AuthState {
  token: string | null
  status: Status
  error: string | null
}

export const login = createAsyncThunk(
  'auth/login',
  ({ username, password }: UserParam) => {
    return AuthService.login(username, password)
  }
)

const initialState: AuthState = {
  token: null,
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<string | null>) {
      state.token = payload
    },
    logout(state) {
      state.token = null

      StorageService.removeData(TOKEN_STORAGE_KEY)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, { payload }: PayloadAction<{ token: string }>) => {
        state.status = 'idle'
        state.token = payload.token
        state.error = null

        StorageService.storeData(TOKEN_STORAGE_KEY, payload.token)
      }
    )
    builder.addCase(login.rejected, (state, { error }) => {
      state.status = 'error'
      state.error = error.message || DEFAULT_ERROR_MESSAGE
    })
    builder.addCase(login.pending, (state) => {
      state.status = 'loading'
    })
  },
})

export default authSlice.reducer
export const { setToken, logout } = authSlice.actions
