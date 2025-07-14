const express = require("express");
const cors = require("cors");
const i18n = require("i18n");
const countries = require("./countries");

const app = express();

i18n.configure({
  locales: ["pt", "en"],
  directory: __dirname + "/locales",
  defaultLocale: "pt",
  queryParameter: "lang",
});

app.use(cors());
app.use(express.json());
app.use(i18n.init);

app.get("/api/countries", (req, res) => {
  res.json(countries);
});

app.post("/api/generate-link", (req, res) => {
  const { countryCode, phoneNumber, message } = req.body;

  if (!countryCode || !phoneNumber) {
    return res.status(400).json({ error: "Código do país e número são obrigatórios" });
  }

  const formattedNumber = phoneNumber.replace(/\D/g, '');

  // Codifica a mensagem (inclusive emojis e quebras de linha)
  const encodedMessage = encodeURIComponent(message || '')
    .replace(/%E2%80%8B/g, '') // remove caractere invisível se houver
    .replace(/%../g, match => match.toLowerCase()); // opcional: minúsculas no encoding

  const whatsappLink = `https://wa.me/${countryCode}${formattedNumber}?text=${encodedMessage}`;

  res.json({
    link: whatsappLink,
    cleanLink: whatsappLink.replace(/[^\x00-\x7F]/g, '') // opcional: versão ASCII
  });

   console.log("Recebido:", message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
