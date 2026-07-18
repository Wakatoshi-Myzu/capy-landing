const BASE_URL = import.meta.env.VITE_API_URL || ''

export const http = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, { method: 'GET' })
    if (!response.ok) throw new Error('Network response was not ok')
    return response.json()
  },
  post: async <T>(url: string, data: unknown): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Network response was not ok')
    return response.json()
  },
  put: async <T>(url: string, data: unknown): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Network response was not ok')
    return response.json()
  },
  delete: async <T>(url: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, { method: 'DELETE' })
    if (!response.ok) throw new Error('Network response was not ok')
    return response.json()
  },
}
