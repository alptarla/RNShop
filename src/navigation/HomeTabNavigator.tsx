import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductListScreen from '../screens/ProductListScreen'
import { HomeStackParamList } from '../types'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeTabNavigator: React.FC = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="ProductListScreen"
      component={ProductListScreen}
    />
    <HomeStack.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
    />
  </HomeStack.Navigator>
)

export default HomeTabNavigator
