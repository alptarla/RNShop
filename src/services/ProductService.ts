import { Product } from '../types'
import apiClient from '../utils/apiClient'

export default {
  async getProducts(): Promise<Product[]> {
    const { data } = await apiClient.get('products')
    return data
  },
}
