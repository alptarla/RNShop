import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {
  BottomTabsParamList,
  HomeStackParamList,
  RootStackParamList,
} from '../types'

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>()

export const useMainTabsNavigation = () =>
  useNavigation<BottomTabNavigationProp<BottomTabsParamList>>()

export const useHomeStackNavigation = () =>
  useNavigation<NativeStackNavigationProp<HomeStackParamList>>()
