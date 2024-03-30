import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "../http";
import { RequestOTP, RequestOTPRes } from "./types";

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
