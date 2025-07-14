import React, { useEffect } from 'react';

const AdBlock = ({ slot, format = 'auto', style = {}, layout = '', layoutKey = '' }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense Error:', e);
    }
  }, []);

  return (
    <div
      className="adblock-container"
      style={{
        backgroundColor: 'var(--bg-white)',
        border: '1px solid #ddd',
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--box-shadow)',
        padding: '1.5rem',
        margin: '2rem auto',
        textAlign: 'center',
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-4937540129712129" // substitua pelo seu ID real
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout || undefined}
        data-ad-layout-key={layoutKey || undefined}
      ></ins>
    </div>
  );
};

export default AdBlock;
