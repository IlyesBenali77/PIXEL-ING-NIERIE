/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type CountryDetailData = {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  latlng: number[];
  area: number;
  region: string;
  subregion: string;
  capital: string[];
  independent: boolean;
  unMember: boolean;
  population: number;
  currencies: {
    AUD: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    eng: string;
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flags: {
    png: string;
  };
  timezones: string[];
};

export default function CountryDetailPage() {
  const [country, setCountry] = useState<CountryDetailData | null>(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountry(response.data[0]);
    });
  }, []);

  if (!country) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />

      <section>
        <h2>Basic Country Information</h2>
        <p>Common Name: {country.name.common}</p>
        <p>Official Name: {country.name.official}</p>
        <p>Native Name: {country.name.nativeName.eng.common}</p>
        <p>Top-Level Domain: {country.tld.join(", ")}</p>
      </section>

      <section>
        <h2>Geographical Data</h2>
        <p>Latitude and Longitude: {country.latlng.join(", ")}</p>
        <p>Area: {country.area} km²</p>
        <p>Region: {country.region}</p>
        <p>Subregion: {country.subregion}</p>
      </section>

      <section>
        <h2>Political and Administrative Data</h2>
        <p>Capital: {country.capital.join(", ")}</p>
        <p>Independent: {country.independent ? "Yes" : "No"}</p>
        <p>UN Member: {country.unMember ? "Yes" : "No"}</p>
      </section>

      <section>
        <h2>Economic and Demographic Data</h2>
        <p>Population: {country.population}</p>
        <p>
          Currency: {country.currencies.AUD.name} (
          {country.currencies.AUD.symbol})
        </p>
      </section>

      <section>
        <h2>Cultural Data</h2>
        <p>Language: {country.languages.eng}</p>
        <p>
          Demonyms: Male - {country.demonyms.eng.m}, Female -{" "}
          {country.demonyms.eng.f}
        </p>
      </section>
    </div>
  );
}
