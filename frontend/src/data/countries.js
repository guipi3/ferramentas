module.exports = [
  // 🇧🇷 Brasil
  {
    name: "Brasil",
    name_en: "Brazil",
    emoji: "🇧🇷",
    code: "55",
    mask: "(##) #####-####",
    ddi: "+55",
    regex: /^(\d{2})(\d{4,5})(\d{4})$/,
    format: "($1) $2-$3"
  },

  // 🇺🇸 Estados Unidos
  {
    name: "Estados Unidos",
    name_en: "United States",
    emoji: "🇺🇸",
    code: "1",
    mask: "(###) ###-####",
    ddi: "+1",
    regex: /^(\d{3})(\d{3})(\d{4})$/,
    format: "($1) $2-$3"
  },

  // 🇬🇧 Reino Unido
  {
    name: "Reino Unido",
    name_en: "United Kingdom",
    emoji: "🇬🇧",
    code: "44",
    mask: "#### ### ###",
    ddi: "+44",
    regex: /^(\d{4})(\d{3})(\d{3})$/,
    format: "$1 $2 $3"
  },

  // 🇨🇦 Canadá
  {
    name: "Canadá",
    name_en: "Canada",
    emoji: "🇨🇦",
    code: "1",
    mask: "(###) ###-####",
    ddi: "+1",
    regex: /^(\d{3})(\d{3})(\d{4})$/,
    format: "($1) $2-$3"
  },

  // 🇦🇺 Austrália
  {
    name: "Austrália",
    name_en: "Australia",
    emoji: "🇦🇺",
    code: "61",
    mask: "#### ### ###",
    ddi: "+61",
    regex: /^(\d{4})(\d{3})(\d{3})$/,
    format: "$1 $2 $3"
  },

  // 🇮🇳 Índia
  {
    name: "Índia",
    name_en: "India",
    emoji: "🇮🇳",
    code: "91",
    mask: "#####-#####",
    ddi: "+91",
    regex: /^(\d{5})(\d{5})$/,
    format: "$1-$2"
  },

  // 🇿🇦 África do Sul
  {
    name: "África do Sul",
    name_en: "South Africa",
    emoji: "🇿🇦",
    code: "27",
    mask: "### ### ####",
    ddi: "+27",
    regex: /^(\d{3})(\d{3})(\d{4})$/,
    format: "$1 $2 $3"
  },

  // 🇳🇿 Nova Zelândia
  {
    name: "Nova Zelândia",
    name_en: "New Zealand",
    emoji: "🇳🇿",
    code: "64",
    mask: "### ### ####",
    ddi: "+64",
    regex: /^(\d{3})(\d{3})(\d{4})$/,
    format: "$1 $2 $3"
  },

  // 🇳🇬 Nigéria (membro da Commonwealth)
  {
    name: "Nigéria",
    name_en: "Nigeria",
    emoji: "🇳🇬",
    code: "234",
    mask: "### ### ####",
    ddi: "+234",
    regex: /^(\d{3})(\d{3})(\d{4})$/,
    format: "$1 $2 $3"
  },

  // 🇸🇬 Singapura
  {
    name: "Singapura",
    name_en: "Singapore",
    emoji: "🇸🇬",
    code: "65",
    mask: "#### ####",
    ddi: "+65",
    regex: /^(\d{4})(\d{4})$/,
    format: "$1 $2"
  },

  // 🇵🇹 Portugal
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

  // 🇦🇴 Angola
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

  // 🇲🇿 Moçambique
  {
    name: "Moçambique",
    name_en: "Mozambique",
    emoji: "🇲🇿",
    code: "258",
    mask: "## ### ####",
    ddi: "+258",
    regex: /^(\d{2})(\d{3})(\d{4})$/,
    format: "$1 $2 $3"
  },

  // 🇨🇻 Cabo Verde
  {
    name: "Cabo Verde",
    name_en: "Cape Verde",
    emoji: "🇨🇻",
    code: "238",
    mask: "### ####",
    ddi: "+238",
    regex: /^(\d{3})(\d{4})$/,
    format: "$1 $2"
  },

  // 🇬🇼 Guiné-Bissau
  {
    name: "Guiné-Bissau",
    name_en: "Guinea-Bissau",
    emoji: "🇬🇼",
    code: "245",
    mask: "### ####",
    ddi: "+245",
    regex: /^(\d{3})(\d{4})$/,
    format: "$1 $2"
  },

  // 🇹🇱 Timor-Leste
  {
    name: "Timor-Leste",
    name_en: "East Timor",
    emoji: "🇹🇱",
    code: "670",
    mask: "### #####",
    ddi: "+670",
    regex: /^(\d{3})(\d{5})$/,
    format: "$1 $2"
  },

  // 🇬🇶 Guiné Equatorial
  {
    name: "Guiné Equatorial",
    name_en: "Equatorial Guinea",
    emoji: "🇬🇶",
    code: "240",
    mask: "### ### ###",
    ddi: "+240",
    regex: /^(\d{3})(\d{3})(\d{3})$/,
    format: "$1 $2 $3"
  },

  // 🇸🇹 São Tomé e Príncipe
  {
    name: "São Tomé e Príncipe",
    name_en: "São Tomé and Príncipe",
    emoji: "🇸🇹",
    code: "239",
    mask: "### ####",
    ddi: "+239",
    regex: /^(\d{3})(\d{4})$/,
    format: "$1 $2"
  }
];
