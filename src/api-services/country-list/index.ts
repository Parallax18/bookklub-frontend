import { useQuery } from "@tanstack/react-query";
import { HttpClient } from "../http";
import { GetCountryRes, GetStatesRes } from "./types";

export const useGetAllCountries = () => {
  return useQuery({
    queryKey: ["get_all_countries"],
    queryFn: async () => {
      const res = await HttpClient.get<Promise<GetCountryRes>>({
        url: "https://countriesnow.space/api/v0.1/countries/flag/images",
      });
      return res;
    },
    select: (data) => data.data,
  });
};

export const useGetAllStates = () => {
  return useQuery({
    queryKey: ["get_all_states"],
    queryFn: async () => {
      return await HttpClient.get<Promise<GetStatesRes>>({
        url: "https://countriesnow.space/api/v0.1/countries/states",
      });
    },
    select: (data) => data.data,
  });
};
