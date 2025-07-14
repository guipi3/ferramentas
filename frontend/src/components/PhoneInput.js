import React, { useState, useEffect } from 'react';
import './PhoneInput.css';

const PhoneInput = ({ selectedCountry, phoneNumber, onChangePhoneNumber, singleNumberMode }) => {
  const [rawNumber, setRawNumber] = useState('');

  // Sincroniza com phoneNumber externo (caso venha atualizado)
  useEffect(() => {
    if (phoneNumber) {
      setRawNumber(phoneNumber.replace(/\D/g, ''));
    } else {
      setRawNumber('');
    }
  }, [phoneNumber]);

  // Função que aplica máscara no número puro
  const applyMask = (value) => {
    if (!selectedCountry?.mask) return value;

    let masked = '';
    let digitIndex = 0;

    for (let i = 0; i < selectedCountry.mask.length; i++) {
      const char = selectedCountry.mask[i];
      if (char === '#') {
        if (digitIndex < value.length) {
          masked += value[digitIndex];
          digitIndex++;
        } else {
          break;
        }
      } else {
        masked += char;
      }
    }

    return masked;
  };

  // Handler para input
  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Remove tudo que não for número
    const onlyNumbers = inputValue.replace(/\D/g, '');

    // Limita a quantidade de números ao tamanho da máscara (opcional)
    const maxNumbers = (selectedCountry?.mask.match(/#/g) || []).length;
    const limitedNumbers = onlyNumbers.slice(0, maxNumbers);

    setRawNumber(limitedNumbers);

    // Passa só o número puro para o pai
    onChangePhoneNumber(limitedNumbers);
  };

  if (!selectedCountry) {
    return <div className="phone-disabled">Selecione um país primeiro</div>;
  }

  return (
    <div className="phone-input">
      <label htmlFor="phone">Número de telefone:</label>
      <div className={`phone-input-group ${singleNumberMode ? 'single-number' : ''}`}>
        <div className="phone-prefix">{selectedCountry.ddi}</div>
        <input
          type="tel"
          id="phone"
          className="phone-input-field"
          value={applyMask(rawNumber)}
          onChange={handleChange}
          placeholder={selectedCountry.mask}
          inputMode="numeric"
          maxLength={selectedCountry.mask.length} // impede digitar além da máscara
        />
      </div>
    </div>
  );
};

export default PhoneInput;
