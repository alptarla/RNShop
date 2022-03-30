import apiClient from '../utils/apiClient'

export default {
  async login(username: string, password: string): Promise<{ token: string }> {
    const { data } = await apiClient.post('auth/login', { username, password })
    return data
  },
}
