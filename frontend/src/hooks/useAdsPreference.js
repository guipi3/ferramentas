import { useState, useEffect } from 'react';

// Pode vir do localStorage, API ou feature flag
const useAdsPreference = () => {
  const [network, setNetwork] = useState('adsense'); // default

  useEffect(() => {
    // Exemplo: trocar baseado em horário, localStorage ou testes A/B
    const saved = localStorage.getItem('ads_network');
    if (saved) setNetwork(saved);
    // Ou use lógica como Math.random() < 0.5 ? 'adsense' : 'adsterra'
  }, []);

  return { network };
};

export default useAdsPreference;
