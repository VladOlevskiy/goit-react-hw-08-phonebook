import React from 'react';
import { Input, SearchIcon, BoxInput, PlaceHolder } from './Filter-styled';
import { foundedContact } from '../../redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(foundedContact(e.target.value));
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
      }}
    >
      <BoxInput>
        <SearchIcon />
        <Input
          minLength={1}
          debounceTimeout={300}
          type="text"
          onChange={onChange}
          value={filter}
          // placeholder="Search by name..."
        />
        <PlaceHolder>Please enter search query</PlaceHolder>
      </BoxInput>
    </div>
  );
};
