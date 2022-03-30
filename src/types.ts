import { NavigatorScreenParams } from '@react-navigation/native'

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
