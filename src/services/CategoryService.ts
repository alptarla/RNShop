import apiClient from '../utils/apiClient'

export default {
  async getCategories(): Promise<string[]> {
    const { data } = await apiClient.get('products/categories')
    return data
  },
}
