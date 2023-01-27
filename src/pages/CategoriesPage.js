import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CHECK_STATUS } from '../redux/categories/categories';
import Card from '../components/Interface/Card';
import classes from './CategoriesPage.module.css';

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(CHECK_STATUS());
  };

  let statusContent;
  if (status && status !== '') {
    statusContent = <p>{status}</p>;
  }

  return (
    <Card extraclass={classes.container}>
      <h2>Welcome to Categories Page!</h2>
      {statusContent}
      <button type="button" onClick={checkStatusHandler}>
        Check status
      </button>
    </Card>
  );
};

export default CategoriesPage;
