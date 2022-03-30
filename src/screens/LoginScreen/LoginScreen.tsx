import React, { useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux'
import { login } from '../../store/slices/authSlice'
import Colors from '../../theme/Colors'
import styles from './LoginScreen.styles'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const { error, status } = useAppSelector((state) => state.auth)

  const handleLogin = () => {
    if (!username || !password) {
      showMessage({
        type: 'danger',
        message: 'Fields are not empty!',
      })
      return
    }

    dispatch(login({ username, password })).then(() => {
      if (status === 'error')
        showMessage({
          type: 'danger',
          message: error!,
        })
    })
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Welcome back you've been missed!</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.formInput}
            placeholder="Enter username"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.formSmText}>Recovery Password</Text>
          <Pressable
            style={styles.formButton}
            onPress={handleLogin}
          >
            {status === 'loading' ? (
              <ActivityIndicator
                size="small"
                color={Colors.secondaryLight}
              />
            ) : (
              <Text style={styles.formButtonText}>Sign In</Text>
            )}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
