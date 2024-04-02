export type RequestOTP = {
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
