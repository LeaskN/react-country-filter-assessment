import React, { createContext, useState } from 'react';
import './App.css';
import CountryList from './Components/CountryList';
import Search from './Components/Search';
import {response} from './response';
import 'h8k-components';

// ✅ handle state in App.js, Search.js passes the data up, filter and re-render CountryList.js

const SearchedValue = createContext('');
const title = "Country Filter";
function App() {
  const [filteredCountries, setFilteredCountries ] = useState(response);

    const searchTerm = (searchData) => {
        setFilteredCountries(() => {
            const filtered = [...response].filter((country) => country.toLowerCase().includes(searchData.toLowerCase()));
            return filtered;
        })
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
                <Search searchTerm={searchTerm}/>
                <CountryList countries={filteredCountries}/>
            </section>
        </div>
    );
}

export default App;
