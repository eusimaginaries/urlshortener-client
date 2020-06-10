import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UrlEntry } from '../models';
import { apiRoot } from '../env.json';

const Redirect = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      const res: Response = await fetch(`${apiRoot}/entries/${id}`);
      const data: UrlEntry = await res.json();
      if (res.status === 200) {
        window.location.replace(data.url);
      } else {
        window.location.replace('/');
      }
    };
    fetchEntry();
  });

  return <div />;
};

export default Redirect;
