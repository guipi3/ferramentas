import React, { useState, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import EmojiPicker from 'emoji-picker-react';
import './WhatsappEditor.css';

const WhatsappEditor = ({ value, onChange }) => {
  const [preview, setPreview] = useState('edit');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const editorRef = useRef(null);

  // Insere emoji na posição do cursor
  const onEmojiClick = (emojiData, event) => {
    const emoji = emojiData.emoji;

    // Se o onChange e value vierem do componente pai, precisamos manipular string e disparar onChange
    // Pega a posição atual do cursor no textarea do editor

    // O componente MDEditor não expõe textarea direto, então vamos usar ref para focar e manipular string

    // Como workaround, vamos concatenar no final do texto
    // Para melhor implementação, precisa customizar MDEditor ou usar um controlled textarea

    onChange(value ? value + emoji : emoji);

    // Fechar o emoji picker após escolha
    setShowEmojiPicker(false);
  };

  return (
    <div className="whatsapp-editor" data-color-mode="light">
      <div className="editor-header">
        <label>Mensagem:</label>
        <div className="preview-toggle">
          <button
            className={preview === 'edit' ? 'active' : ''}
            onClick={() => setPreview('edit')}
          >
            Editor
          </button>
          <button
            className={preview === 'preview' ? 'active' : ''}
            onClick={() => setPreview('preview')}
          >
            Visualização
          </button>
          <button
            className="emoji-button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            type="button"
            aria-label="Abrir seletor de emojis"
          >
            😊
          </button>
        </div>
      </div>

      {showEmojiPicker && (
        <div className="emoji-picker-container">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}

      <MDEditor
        ref={editorRef}
        value={value}
        onChange={onChange}
        height={180}
        preview={preview}
        className="md-editor-custom"
      />

      <div className="formatting-help">
        <p>Formatação: **negrito** *itálico* ~~riscado~~ `código`</p>
      </div>
    </div>
  );
};

export default WhatsappEditor;
