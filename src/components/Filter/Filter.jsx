import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../redux/filterSlice';
import styles from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const changeFilter = event => {
    dispatch(set(event.currentTarget.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter}></input>
    </label>
  );
}

export default Filter;
