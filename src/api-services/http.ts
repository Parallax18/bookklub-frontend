import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
  // baseURL: "https://bookklub-api.onrender.com/api/",
  baseURL: "http://localhost:3000/api/",
  timeout: 50000,
  headers: {
    Accept: "application/json",
  },
});

Axios.interceptors.request.use(
  // @ts-ignore
  (config: AxiosRequestConfig) => {
    const token = Cookies.get("bkltoken");

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    //  ...
    return response;
  },
  (error) => {
    if (
      window.location.pathname !== "/login" &&
      (error.response.status === 404 ||
        error.response.message === "User not Found")
    ) {
      Cookies.remove("bkltoken");
      localStorage.clear();
      window.location.href = "/login";
      return Promise.reject(error);
    }
  }
);

export class HttpClient {
  static async get<T>({ url, params }: { url: string; params?: unknown }) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>({
    url,
    data,
    options,
  }: {
    url: string;
    data: unknown;
    options?: any;
  }) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>({ url, data }: { url: string; data: unknown }) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async patch<T>({ url, data }: { url: string; data?: unknown }) {
    const response = await Axios.patch<T>(url, data);
    return response.data;
  }

  static async del<T>({ url }: { url: string }) {
    const response = await Axios.delete<T>(url);

    return response.data;
  }
}
