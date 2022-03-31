import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductListScreen from '../screens/ProductListScreen'
import Colors from '../theme/Colors'
import { HomeStackParamList } from '../types'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeTabNavigator: React.FC = () => (
  <HomeStack.Navigator initialRouteName="ProductListScreen">
    <HomeStack.Screen
      name="ProductListScreen"
      component={ProductListScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
      options={({ route }) => ({
        headerTitle: route.params.productTitle,
        headerTintColor: Colors.primaryDark,
      })}
    />
  </HomeStack.Navigator>
)

export default HomeTabNavigator
