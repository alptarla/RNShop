import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Pressable } from 'react-native'
import { useAppDispatch } from '../hooks/useTypedRedux'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductListScreen from '../screens/ProductListScreen'
import { logout } from '../store/slices/authSlice'
import Colors from '../theme/Colors'
import { HomeStackParamList } from '../types'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeTabNavigator: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleLogout = () => dispatch(logout())

  return (
    <HomeStack.Navigator initialRouteName="ProductListScreen">
      <HomeStack.Screen
        name="ProductListScreen"
        component={ProductListScreen}
        options={{
          headerShown: true,
          headerTintColor: Colors.primaryDark,
          headerTitle: 'RNShop',
          headerRight: ({ tintColor }) => (
            <Pressable onPress={handleLogout}>
              <Icon
                name="logout"
                size={24}
                color={tintColor}
              />
            </Pressable>
          ),
        }}
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
}

export default HomeTabNavigator
