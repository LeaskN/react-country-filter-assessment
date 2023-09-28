import React, { useState } from 'react';

function CountryList({countries}) {

  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {countries?.map(country =><li key={country} className="pa-10 pl-20">{country}</li>)}
      </ul>
    </section>
  );
}

export default CountryList;
