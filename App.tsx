import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import RootNavigator from './src/navigation/RootNavigator'
import store from './src/store'

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
)

export default App
