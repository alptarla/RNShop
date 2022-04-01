import { Product } from '../types'
import apiClient from '../utils/apiClient'

export default {
  async getProducts(category?: string): Promise<Product[]> {
    let endpoint = 'products'
    if (category) {
      endpoint += `/category/${category}`
    }

    const { data } = await apiClient.get(endpoint)
    return data
  },
  async getProductById(id: number): Promise<Product> {
    const { data } = await apiClient.get(`products/${id}`)
    return data
  },
}
