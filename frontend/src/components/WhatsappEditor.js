import React, { useState, useRef } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import EmojiPicker from 'emoji-picker-react';
import './WhatsappEditor.css';

const boldCommand = {
  name: 'bold',
  keyCommand: 'bold',
  buttonProps: { 'aria-label': 'Negrito (Ctrl+B)', 'title': 'Negrito (Ctrl+B)' },
  icon: <strong style={{ fontWeight: 'bold' }}>N</strong>,
  execute: (state, api) => {
    const modifyText = `*${state.selectedText || 'texto em negrito'}*`;
    api.replaceSelection(modifyText);
  },
};

const italicCommand = {
  name: 'italic',
  keyCommand: 'italic',
  buttonProps: { 'aria-label': 'Itálico (Ctrl+I)', 'title': 'Itálico (Ctrl+I)' },
  icon: commands.italic.icon,
  execute: (state, api) => {
    const modifyText = `_${state.selectedText || 'texto em itálico'}_`;
    api.replaceSelection(modifyText);
  },
};

const strikethroughCommand = {
  name: 'strikethrough',
  keyCommand: 'strikethrough',
  buttonProps: { 'aria-label': 'Riscado (Alt+Shift+5)' , 'title': 'Riscado (Alt+Shift+5)'},
  icon: commands.strikethrough.icon, // mantém o ícone padrão
  execute: (state, api) => {
    const modifyText = `~${state.selectedText || 'texto riscado'}~`;
    api.replaceSelection(modifyText);
  },
};

const codeBlockCommand = {
  name: 'code',
  keyCommand: 'code',
  buttonProps: { 'aria-label': 'Bloco de código', 'title': 'Bloco de código' },
  icon: commands.codeBlock.icon,
  execute: (state, api) => {
    const codeText = state.selectedText || 'bloco de código';
    const modifyText = `\`\`\`\n${codeText}\n\`\`\``;
    api.replaceSelection(modifyText);
  },
};

const quoteCommand = {
  name: 'quote',
  keyCommand: 'quote',
  buttonProps: { 'aria-label': 'Citação', 'title': 'Citação' },
  icon: commands.quote.icon,
  execute: (state, api) => {
    const quoteText = state.selectedText || 'texto citado';
    const modified = quoteText
      .split('\n')
      .map((line) => `> ${line}`)
      .join('\n');
    api.replaceSelection(modified);
  },
};

const orderedListCommand = {
  name: 'ordered-list',
  keyCommand: 'ordered-list',
  buttonProps: { 'aria-label': 'Lista ordenada', 'title': 'Lista ordenada' },
  icon: commands.orderedListCommand.icon,
  execute: (state, api) => {
    const selected = state.selectedText || 'item 1\nitem 2\nitem 3';
    const modified = selected
      .split('\n')
      .map((line, i) => `${i + 1}. ${line}`)
      .join('\n');
    api.replaceSelection(modified);
  },
};

const unorderedListCommand = {
  name: 'unordered-list',
  keyCommand: 'unordered-list',
  buttonProps: { 'aria-label': 'Lista não ordenada', 'title': 'Lista não ordenada' },
  icon: commands.unorderedListCommand.icon,
  execute: (state, api) => {
    const selected = state.selectedText || 'item 1\nitem 2\nitem 3';
    const modified = selected
      .split('\n')
      .map((line) => `- ${line}`)
      .join('\n');
    api.replaceSelection(modified);
  },
};

const helpCommand = {
  name: "help",
  keyCommand: "help",
  buttonProps: { "aria-label": "Ajuda sobre links do WhatsApp", "title": "Ajuda sobre links do WhatsApp" },
  icon: (
    <svg viewBox="0 0 16 16" width="12px" height="12px">
      <path
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  execute: () => {
    window.open("https://faq.whatsapp.com/539178204879377/?cms_platform=web", "_blank");
  }
};

const WhatsappEditor = ({ value, onChange }) => {
  const [preview, setPreview] = useState('edit');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const editorRef = useRef(null);

  const onEmojiClick = (emojiData) => {
    const emoji = emojiData.emoji;
    onChange(value ? value + emoji : emoji);
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
        commands={[
          boldCommand,
          italicCommand,
          strikethroughCommand,
          codeBlockCommand,
          quoteCommand,
          orderedListCommand,
          unorderedListCommand,
          helpCommand,
        ]}
      />

      <div className="formatting-help">
        <p>
          Formatação: *<b>negrito</b>* _<i>itálico</i>_ ~<s>riscado</s>~ <code>```código```</code>
        </p>
      </div>
    </div>
  );
};

export default WhatsappEditor;
