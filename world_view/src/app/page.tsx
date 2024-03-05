"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./globals.css";
import Navbar from "../components/Navbar";
import CountryCard from "../components/Countrycard";

type CountryData = {
  name: { common: string };
  flags: { png: string };
  cca3: string;
};

const Home: React.FC = () => {
  const [countries, setCountries] = useState<CountryData[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all/");
        const countriesData: CountryData[] = response.data;

        countriesData.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCountries([]);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const displayedCountries = searchTerm
    ? countries?.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  return (
    <div className="HomeContainer">
      <Navbar onSearch={handleSearch} />
      <div className="CountryGrid">
        {displayedCountries?.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
