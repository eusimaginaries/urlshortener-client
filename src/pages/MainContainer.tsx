import React, { SyntheticEvent, ChangeEvent, useState, useEffect } from 'react';
import Main from './Main';
import { UrlEntry, ErrorRes, UrlList } from '../models';
import { apiRoot } from '../env.json';

const MainContainer = () => {
  const [inputVal, setInputVal] = useState("");
  const [urlEntry, setUrlEntry] = useState(undefined as unknown as UrlEntry);
  const [urlList, setUrlList] = useState({ items: [], numItems: 0 } as UrlList);
  const [isFresh, setIsFresh] = useState(false);
  const [errMsg, setErrMsg] = useState(undefined as unknown as string);

  useEffect(() => {
    const fetchList = async () => {
      if (isFresh) { return; }
      const res: Response = await fetch(`${apiRoot}/entries`);
      const data: UrlList = await res.json();
      setUrlList(data);
      setIsFresh(true);
    }
    fetchList();
  }, [isFresh]);

  const onSubmitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    const res: Response = await fetch(`${apiRoot}/entries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: inputVal })
    });
    const data: any = await res.json();
    if (res.status === 200 || res.status === 201) {
      setUrlEntry(data as UrlEntry);
      setErrMsg(undefined as unknown as string);
    } else {
      setUrlEntry(undefined as unknown as UrlEntry);
      setErrMsg(`Error: ${(data as ErrorRes).error}`);
    }
  }

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  }

  const onMoreHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    const res: Response = await fetch(`${apiRoot}/entries?lastKey=${urlList.lastKey}`);
    const data: UrlList = await res.json();
    const newList: Array<UrlEntry> = urlList.items.concat(data.items)
    setUrlList({ numItems: newList.length, items: newList, lastKey: data.lastKey })
  }

  const refreshHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsFresh(false);
  }

  return (
    <Main
      urlEntry={urlEntry}
      urlList={urlList}
      inputErr={errMsg}
      onSubmitHandler={onSubmitHandler}
      onInputChangeHandler={onInputChangeHandler}
      onMoreHandler={onMoreHandler}
      refreshHandler={refreshHandler}
    />
  );
};

export default MainContainer;
