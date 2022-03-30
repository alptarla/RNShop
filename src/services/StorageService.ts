import AsyncStorage from '@react-native-async-storage/async-storage'

export default {
  storeData<T>(key: string, value: T) {
    return AsyncStorage.setItem(key, JSON.stringify(value))
  },
  async getData<T>(key: string): Promise<T | null> {
    const value = await AsyncStorage.getItem(key)
    if (!value) return null
    return JSON.parse(value)
  },
  async removeData(key: string) {
    return AsyncStorage.removeItem(key)
  },
}
