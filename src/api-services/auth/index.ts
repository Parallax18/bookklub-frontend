import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "../http";
import {
  AuthReq,
  AuthRes,
  ConfirmOTP,
  ForgotPassword,
  RequestOTPRes,
  ResetPassword,
  Signup,
} from "./types";
import Cookies from "js-cookie";

export const useRequestOtp = () => {
  return useMutation({
    mutationKey: ["request_otp"],
    mutationFn: async (data: AuthReq) => {
      const res = await HttpClient.post<Promise<RequestOTPRes>>({
        url: "otp",
        data,
      });
      return res;
    },
  });
};

export const useConfirmOtp = () => {
  return useMutation({
    mutationKey: ["confirm_otp"],
    mutationFn: async (data: ConfirmOTP) => {
      return await HttpClient.post({ url: "otp/confirm", data });
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: Signup) => {
      return await HttpClient.post<Promise<AuthRes>>({ url: "signup", data });
    },
    onSuccess: (res) => {
      Cookies.set("bkltoken", res.accessToken);
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationKey: ["forgot"],
    mutationFn: async (data: ForgotPassword) => {
      return await HttpClient.post({ url: "forgot-password", data });
    },
  });
};
export const useResetPassword = () => {
  return useMutation({
    mutationKey: ["reset"],
    mutationFn: async (data: ResetPassword) => {
      return await HttpClient.post({ url: "reset-password", data });
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: AuthReq) => {
      return await HttpClient.post<Promise<AuthRes>>({ url: "login", data });
    },
    onSuccess: (res) => {
      Cookies.set("bkltoken", res.accessToken);
    },
  });
};
