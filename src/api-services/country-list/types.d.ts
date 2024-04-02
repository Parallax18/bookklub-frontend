export interface GetCountryRes {
  error: boolean;
  msg: string;
  data: Datum[];
}

interface Datum {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

interface GetStatesRes {
  error: boolean;
  msg: string;
  data: Datum[];
}

interface Datum {
  name: string;
  iso3: string;
  states: (State | States2)[];
}

interface States2 {
  name: string;
  state_code: string;
}

interface State {
  name: string;
  state_code?: any;
}
