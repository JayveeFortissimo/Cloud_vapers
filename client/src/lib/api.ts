import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

interface ApiResponse<T = any> {
  ok: any
  data: T
  message?: string
  status: number
}

interface ApiError {
  message: string
  status?: number
  data?: any
}

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BACKEND_PORT,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
}

const api: AxiosInstance = axios.create(config)

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const apiError: ApiError = {
      message:
        (error.response?.data as any)?.message ||
        error.message ||
        'An error occurred',
      status: error.response?.status,
      data: error.response?.data,
    }
    return Promise.reject(apiError)
  },
)

export default api
export type { ApiResponse, ApiError }
