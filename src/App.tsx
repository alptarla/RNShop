import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import RootNavigator from './navigation/RootNavigator'

const App: React.FC = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
)

export default App
