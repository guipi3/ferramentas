// backend/countries.js
module.exports = [
  {
    name: "Brasil",
    name_en: "Brazil",
    emoji: "🇧🇷",
    code: "55",
    mask: "(##) #####-####",
    ddi: "+55",
    regex: /^(\d{2})(\d{5})(\d{4})$/,
    format: "($1) $2-$3"
  },
  {
    name: "Portugal",
    name_en: "Portugal",
    emoji: "🇵🇹",
    code: "351",
    mask: "### ### ###",
    ddi: "+351",
    regex: /^(\d{3})(\d{3})(\d{3})$/,
    format: "$1 $2 $3"
  },
  // Outros países lusófonos...
  {
    name: "Angola",
    name_en: "Angola",
    emoji: "🇦🇴",
    code: "244",
    mask: "### ### ###",
    ddi: "+244",
    regex: /^(\d{3})(\d{3})(\d{3})$/,
    format: "$1 $2 $3"
  },
  {
    name: "Moçambique",
    name_en: "Mozambique",
    emoji: "🇲🇿",
    code: "258",
    mask: "## ### ####",
    ddi: "+258",
    regex: /^(\d{2})(\d{3})(\d{4})$/,
    format: "$1 $2 $3"
  }
];