"use client";
import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "../http";
import {
  ConfirmOTP,
  ForgotPassword,
  RequestOTP,
  RequestOTPRes,
  ResetPassword,
  Signup,
} from "./types";

export const useRequestOtp = () => {
  return useMutation({
    mutationKey: ["request_otp"],
    mutationFn: async (data: RequestOTP) => {
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
      return await HttpClient.post({ url: "signup", data });
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
