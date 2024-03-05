/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type CountryData = {
  name: { common: string };
  flags: { png: string };
  cca3: string;
};

const CountryCard: React.FC<{ country: CountryData }> = ({ country }) => {
  console.log(country.cca3);
  return (
    <Link href={`/country/${country.cca3}`} passHref>
      <div className="CountryCard">
        <img
          src={country.flags.png}
          alt={`${country.name.common} Flag`}
          className="CountryFlag"
        />
        <p className="CountryName">{country.name.common}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
