import { SyntheticEvent, ChangeEvent } from "react";

export type UrlEntry = {
  id: string,
  url: string,
};

export type ErrorRes = {
  error: string,
};

export type UrlList = {
  items: Array<any>,
  numItems: number,
  lastKey?: string,
}

export type MainProps = {
  urlEntry: UrlEntry,
  urlList: UrlList,
  inputErr: string,
  onSubmitHandler: (event: SyntheticEvent) => void,
  onInputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  onMoreHandler: (event: SyntheticEvent) => void,
  refreshHandler: (event: SyntheticEvent) => void,
};