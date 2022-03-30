import { configureStore } from '@reduxjs/toolkit'
import { TOKEN_STORAGE_KEY } from '../constants'
import StorageService from '../services/StorageService'
import authSlice, { setToken } from './slices/authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

StorageService.getData<string>(TOKEN_STORAGE_KEY).then((token) => {
  store.dispatch(setToken(token))
})

export default store
