import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../components/Interface/Card';
import { CHECK_STATUS } from '../redux/categories/categories';

const CategoriesPage = () => (
  <Card>
    <h2>Hello from CategoriesPage</h2>
    <button type="button">Check Progress</button>
  </Card>
);

export default CategoriesPage;
