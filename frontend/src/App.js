import React, { useState } from 'react';
import CountrySelector from './components/CountrySelector';
import PhoneInput from './components/PhoneInput';
import WhatsappEditor from './components/WhatsappEditor';
import AdBlock from './components/AdBlock';
import './styles.css';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isBatchMode, setIsBatchMode] = useState(false);

  const handleGenerateLink = () => {
    if (!selectedCountry) {
      setError('Selecione um país');
      return;
    }
    if (!phoneNumber) {
      setError('Informe o(s) número(s)');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      let links = [];

      if (isBatchMode) {
        // Divide pelos separadores e limpa números
        const numbers = phoneNumber
          .split(/[\n,;]+/)
          .map(num => num.replace(/\D/g, ''))
          .filter(Boolean);

        if (numbers.length === 0) {
          setError('Nenhum número válido encontrado');
          setIsLoading(false);
          return;
        }

        const normalizedMessage = (message || '').normalize('NFKC');
        const encodedMessage = encodeURIComponent(normalizedMessage);
        links = numbers.map(
          num => `https://wa.me/${selectedCountry.ddi.replace('+', '')}${num}?text=${encodedMessage}`
        );
      } else {
        // Único número
        const singleNumber = phoneNumber.replace(/\D/g, '');
        if (singleNumber.length === 0) {
          setError('Número inválido');
          setIsLoading(false);
          return;
        }
        const normalizedMessage = (message || '').normalize('NFKC');
        const encodedMessage = encodeURIComponent(normalizedMessage);
        links = [`https://wa.me/${selectedCountry.ddi.replace('+', '')}${singleNumber}?text=${encodedMessage}`];
      }

      setGeneratedLink(links.join('\n'));
    } catch (err) {
      setError('Erro ao gerar os links.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gerador de Links WhatsApp</h1>
        <p className="subtitle">Crie links personalizados com mensagem pré-definida</p>
      </header>

      {/* ANÚNCIO 1 - Acima do conteúdo principal */}
    <AdBlock slot="1111111111" format="fluid" layout="in-article" />

      <main className="main-content">
        <div className="card">
          <CountrySelector
            selectedCountry={selectedCountry}
            onSelectCountry={(country) => {
              setSelectedCountry(country);
              setPhoneNumber(''); // limpa ao trocar país
            }}
          />

          <div className="input-mode-toggle">
            <label>
              <input
                type="checkbox"
                checked={isBatchMode}
                onChange={(e) => setIsBatchMode(e.target.checked)}
              />{' '}
              Enviar para múltiplos números
            </label>
          </div>

          {isBatchMode ? (
            // modo batch: textarea normal (sem máscara)
            <textarea
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Digite um ou mais números separados por vírgula, ponto e vírgula ou quebra de linha"
              rows={4}
              className="phone-input-area"
            />
          ) : (
            // modo único número: usa PhoneInput com máscara
            <PhoneInput
              selectedCountry={selectedCountry}
              phoneNumber={phoneNumber}
              onChangePhoneNumber={setPhoneNumber}
              singleNumberMode={true}
            />
          )}

          <WhatsappEditor value={message} onChange={setMessage} />

          {error && <div className="error-message">{error}</div>}

          <button
            className="generate-button"
            onClick={handleGenerateLink}
            disabled={!selectedCountry || !phoneNumber || isLoading}
            aria-label="Gerar link do WhatsApp"
          >
            {isLoading ? (
              <span className="button-loading">Gerando...</span>
            ) : (
              <>
                <span className="button-icon">🔗</span>
                Gerar Link WhatsApp
              </>
            )}
          </button>
        </div>

{generatedLink && (
  <>
    <div className="result-card">
      <h2>{generatedLink.includes('\n') ? 'Links gerados:' : 'Seu link está pronto!'}</h2>
      <textarea
        value={generatedLink}
        readOnly
        rows={Math.min(generatedLink.split('\n').length + 1, 10)}
        className="link-input"
        onClick={(e) => e.target.select()}
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(generatedLink);
          alert('Links copiados!');
        }}
        className="copy-button"
      >
        Copiar {generatedLink.includes('\n') ? 'todos os links' : 'link'}
      </button>
      {!generatedLink.includes('\n') && (
        <a
          href={generatedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link-button"
        >
          Abrir conversa no WhatsApp
        </a>
      )}
    </div>

    {/* ANÚNCIO 2 - Após resultado */}
    <AdBlock slot="2222222222" format="fluid" layout="in-article" />
  </>
)}

      </main>

      <footer className="app-footer">
          {/* ANÚNCIO 3 - Rodapé */}
  <AdBlock slot="3333333333" format="auto" style={{ marginBottom: '1rem' }} />
        <p>© {new Date().getFullYear()} Hojetech - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default App;
