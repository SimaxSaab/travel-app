import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import './scss/Search.scss';
// import countriesEn from '../constants/countries-en';
// import countriesPl from '../constants/countries-pl';
// import countriesRu from '../constants/countries-ru';
import { setCountriesList, setSearchResult } from '../redux/countries/actions';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  // const currentLanguage = useSelector((state) => state.language.language);

  function handleSubmit(event) {
    event.preventDefault();
  }

  // useEffect(() => {
  //   if (currentLanguage === 'en') {
  //     dispatch(setCountriesList(countriesEn));
  //   } else if (currentLanguage === 'ru') {
  //     dispatch(setCountriesList(countriesRu));
  //   } else if (currentLanguage === 'pl') {
  //     dispatch(setCountriesList(countriesPl));
  //   }
  // }, [currentLanguage, dispatch]);

  const countries = useSelector((state) => state.countries.list);

  useEffect(() => {
    const searchResult = countries.filter((country) => {
      let check = false;
      if (country.name.toLowerCase().includes(searchValue.toLowerCase())
      || country.capital.toLowerCase().includes(searchValue.toLowerCase())) {
        check = true;
      }
      return check;
    });
    dispatch(setSearchResult(searchResult));
  }, [searchValue]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div>
        <input
          type="search"
          placeholder="Search..."
          className="search-input"
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </div>
    </form>
  );
}
