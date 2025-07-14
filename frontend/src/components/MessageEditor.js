// frontend/src/components/MessageEditor.js
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const WhatsAppMarkdownGuide = () => (
  <div className="markdown-guide">
    <p><strong>Formatação WhatsApp:</strong></p>
    <ul>
      <li>*negrito* → <strong>negrito</strong></li>
      <li>_itálico_ → <em>itálico</em></li>
      <li>~riscado~ → <s>riscado</s></li>
      <li>```monoespaçado``` → <code>monoespaçado</code></li>
    </ul>
  </div>
);

const MessageEditor = ({ message, onChangeMessage }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const handleEmojiClick = (emojiData) => {
    onChangeMessage(message + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const encodeMessage = (text) => {
    return encodeURIComponent(text)
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");
  };

  return (
    <div className="message-editor">
      <div className="editor-header">
        <label>Mensagem (suporta markdown)</label>
        <div className="editor-buttons">
          <button 
            type="button" 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊 Emoji
          </button>
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
          >
            {showGuide ? '▲' : '▼'} Formatação
          </button>
        </div>
      </div>

      {showGuide && <WhatsAppMarkdownGuide />}

      <textarea
        value={message}
        onChange={(e) => onChangeMessage(e.target.value)}
        placeholder="Digite sua mensagem aqui..."
        rows={5}
      />

      {showEmojiPicker && (
        <div className="emoji-picker-container">
          <EmojiPicker 
            onEmojiClick={handleEmojiClick}
            native
            skinTonesDisabled
          />
        </div>
      )}

      <div className="preview-section">
        <h4>Pré-visualização:</h4>
        <div className="whatsapp-preview">
          {message.split('\n').map((line, i) => (
            <p key={i}>
              {line.replace(/\*(.*?)\*/g, '<strong>$1</strong>')
                  .replace(/_(.*?)_/g, '<em>$1</em>')
                  .replace(/~(.*?)~/g, '<s>$1</s>')
                  .replace(/```(.*?)```/g, '<code>$1</code>')}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageEditor;