import { SyntheticEvent, ChangeEvent } from "react";

export type UrlEntry = {
  id: string,
  url: string,
};

export type ErrorRes = {
  error: string,
};

export type MainProps = {
  urlEntry: UrlEntry,
  urlList: Array<UrlEntry>,
  inputErr: string,
  onSubmitHandler: (event: SyntheticEvent) => void,
  onInputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  refreshHandler: (event: SyntheticEvent) => void,
};