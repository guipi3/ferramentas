// components/CountrySelector.jsx
import React, { useState, useEffect } from 'react';
import countriesData from '../shared/countries';
import './CountrySelector.css';

const CountrySelector = ({ selectedCountry, onSelectCountry }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      if (!selectedCountry && countriesData.length > 0) {
        const defaultCountry = countriesData.find(c => c.code === '55') || countriesData[0];
        onSelectCountry(defaultCountry);
      }
    } catch (err) {
      setError("Erro ao carregar países");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [selectedCountry, onSelectCountry]); // ✅ Adicionados como dependências

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    const country = countriesData.find(c => c.code === countryCode);
    onSelectCountry(country);
  };

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="country-selector">
      <label htmlFor="country-select">País:</label>
      <select
        id="country-select"
        value={selectedCountry?.code || ''}
        onChange={handleCountryChange}
        className="country-dropdown"
      >
        <option value="">Selecione um país</option>
        {countriesData.map((country) => (
          <option key={country.code} value={country.code}>
            {country.emoji} {country.name} ({country.ddi})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
