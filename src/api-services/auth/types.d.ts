export type AuthReq = {
  email: string;
  password: string;
};

export type RequestOTPRes = {
  token: string;
};

export type ConfirmOTP = {
  token: string;
  otp: string;
};

export type Signup = {
  username: string;
  mobile: string;
  address: string;
  country: string;
  state: string;
  avatar: string;
  token: string;
  email: string;
  password: string;
};

export type AuthRes = {
  id: string;
  createdAt: string;
  email: string;
  username: string;
  mobile: string;
  country: string;
  is_email_verified: boolean;
  accessToken: string;
};
export type ForgotPassword = {
  email: string;
};
export type ResetPassword = {
  password: string;
  token: string;
  otp: string;
};
