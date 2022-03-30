import { NavigatorScreenParams } from '@react-navigation/native'
import store from './store'

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>
  LoginScreen: undefined
}

export type BottomTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>
  CartScreen: undefined
}

export type HomeStackParamList = {
  ProductListScreen: undefined
  ProductDetailScreen: undefined
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type Status = 'idle' | 'loading' | 'error'

export type UserParam = {
  username: string
  password: string
}
