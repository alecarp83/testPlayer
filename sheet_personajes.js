(function () {
  "use strict";

  const CATEGORIAS = [
    "Humanos", "Guerreros", "Magos", "Anime",
    "Animales", "Místicos", "Funny"
  ];

  const ANIMACIONES = [
    "Esperar", "Camina", "Correr", "Agarrar (objeto)",
    "Agacharse", "Saltar", "Atacar (golpe de puño)",
    "Atacar (con bate)", "Atacar (con espada)",
    "Talar (con hacha)", "Picar (con pico)", "Construir",
    "Baile 1", "Baile 2", "Baile 3", "Dormir", "Sentarse"
  ];

  const PERSONAJES = [
    {
      id: "alex", nombre: "Alex",
      categoria: "Humanos", estilo: "street",
      descripcion: "Explorador urbano con zapatillas y chaqueta turquesa.",
      piel: "#eeb58d", ropa: "#32bfb5", pantalon: "#263445",
      pelo: "#382b32", acento: "#bfffe3"
    },
    {
      id: "nova", nombre: "Nova",
      categoria: "Humanos", estilo: "street",
      descripcion: "Piloto de ciudad con colores violeta y lima.",
      piel: "#a96b4f", ropa: "#8b72e8", pantalon: "#292b44",
      pelo: "#202335", acento: "#d6ff72"
    },
    {
      id: "atlas", nombre: "Atlas",
      categoria: "Guerreros", estilo: "knight",
      descripcion: "Caballero de acero azul con detalles dorados.",
      piel: "#d89976", ropa: "#658398", pantalon: "#293949",
      pelo: "#463b37", acento: "#ffcf70"
    },
    {
      id: "ember", nombre: "Ember",
      categoria: "Guerreros", estilo: "knight",
      descripcion: "Guardiana de armadura coral y metal oscuro.",
      piel: "#8a5540", ropa: "#c36867", pantalon: "#343140",
      pelo: "#302c38", acento: "#ffe2a4"
    },
    {
      id: "merlin", nombre: "Merlin",
      categoria: "Magos", estilo: "wizard",
      descripcion: "Hechicero astral con sombrero y cristales luminosos.",
      piel: "#e6b191", ropa: "#7561c9", pantalon: "#403666",
      pelo: "#e5e9fa", acento: "#85f3ff"
    },
    {
      id: "salvia", nombre: "Salvia",
      categoria: "Magos", estilo: "wizard",
      descripcion: "Maga del bosque con una paleta jade y crema.",
      piel: "#b67e5b", ropa: "#398c78", pantalon: "#284f4b",
      pelo: "#dde6be", acento: "#e4f9a3"
    },
    {
      id: "akira", nombre: "Akira",
      categoria: "Anime", estilo: "anime",
      descripcion: "Luchador de cabello puntiagudo y bufanda carmesí.",
      piel: "#f0c5a5", ropa: "#eee5dc", pantalon: "#33394e",
      pelo: "#26324d", acento: "#ff677e"
    },
    {
      id: "yuki", nombre: "Yuki",
      categoria: "Anime", estilo: "anime",
      descripcion: "Aventurera de cabello lavanda y chaqueta nocturna.",
      piel: "#f2d0bb", ropa: "#373b65", pantalon: "#282d49",
      pelo: "#bea6ed", acento: "#87eeef"
    },
    {
      id: "kitsune", nombre: "Kitsune",
      categoria: "Animales", estilo: "fox",
      descripcion: "Zorro de orejas grandes, hocico crema y cola mullida.",
      piel: "#e99b55", ropa: "#44968d", pantalon: "#36525b",
      pelo: "#b96938", acento: "#ffebc4"
    },
    {
      id: "panda", nombre: "Bambú",
      categoria: "Animales", estilo: "panda",
      descripcion: "Panda aventurero con chaleco verde y orejas redondas.",
      piel: "#eee9dd", ropa: "#7fa97c", pantalon: "#333d45",
      pelo: "#30353c", acento: "#dceba8"
    },
    {
      id: "aura", nombre: "Aura",
      categoria: "Místicos", estilo: "angel",
      descripcion: "Espíritu celeste con alas geométricas y halo dorado.",
      piel: "#d3c4ed", ropa: "#9c88cc", pantalon: "#66567f",
      pelo: "#eee6ff", acento: "#ffe3a0"
    },
    {
      id: "onyx", nombre: "Onyx",
      categoria: "Místicos", estilo: "demon",
      descripcion: "Guardián de obsidiana con cuernos y cristales coral.",
      piel: "#8484a9", ropa: "#3d405e", pantalon: "#282b42",
      pelo: "#272a40", acento: "#ff8396"
    },
    {
      id: "chicle", nombre: "Chicle",
      categoria: "Funny", estilo: "funny",
      descripcion: "Inventor rosa con antena y gafas de gran tamaño.",
      piel: "#f5a6c8", ropa: "#f2cf6b", pantalon: "#916cc1",
      pelo: "#a56fcc", acento: "#89eee3"
    },
    {
      id: "menta", nombre: "Menta",
      categoria: "Funny", estilo: "funny",
      descripcion: "Robot festivo de colores pastel y antena brillante.",
      piel: "#98d8cc", ropa: "#82a6e2", pantalon: "#4f608f",
      pelo: "#476379", acento: "#ffbd83"
    }
  ];

    PERSONAJES.push(
    // HUMANOS
    {
      id: "leo", nombre: "Leo",
      categoria: "Humanos", estilo: "street", detalle: "mensajero",
      descripcion: "Mensajero de barrio con gorra naranja y mochila de reparto.",
      piel: "#c88d64", ropa: "#ed9347", pantalon: "#354354",
      pelo: "#342a26", acento: "#aee6dc"
    },
    {
      id: "vera", nombre: "Vera",
      categoria: "Humanos", estilo: "street", detalle: "mecanica",
      descripcion: "Mecánica de taller con gafas protectoras y cinturón de herramientas.",
      piel: "#975d43", ropa: "#527aa0", pantalon: "#303b4d",
      pelo: "#272331", acento: "#ffd278"
    },
    {
      id: "nico", nombre: "Nico",
      categoria: "Humanos", estilo: "street", detalle: "musico",
      descripcion: "Músico callejero con auriculares grandes y chaqueta color ciruela.",
      piel: "#e8b28f", ropa: "#945b87", pantalon: "#303044",
      pelo: "#49302b", acento: "#83e5df"
    },
    {
      id: "alma", nombre: "Alma",
      categoria: "Humanos", estilo: "street", detalle: "botanica",
      descripcion: "Botánica viajera con sombrero de campo y una planta en la mochila.",
      piel: "#b87853", ropa: "#648967", pantalon: "#494637",
      pelo: "#382e25", acento: "#f1d497"
    },
    {
      id: "bruno", nombre: "Bruno",
      categoria: "Humanos", estilo: "street", detalle: "rescatista",
      descripcion: "Rescatista de montaña con casco, linterna y equipo de expedición.",
      piel: "#efc2a0", ropa: "#cf6251", pantalon: "#394557",
      pelo: "#503c32", acento: "#f8da82"
    },

    // GUERREROS
    {
      id: "roldan", nombre: "Roldán",
      categoria: "Guerreros", estilo: "knight", detalle: "bastion",
      descripcion: "Defensor de la fortaleza con escudo azul y una cresta de acero.",
      piel: "#bd815d", ropa: "#456783", pantalon: "#273a4a",
      pelo: "#352c29", acento: "#e9c576"
    },
    {
      id: "sigrid", nombre: "Sigrid",
      categoria: "Guerreros", estilo: "knight", detalle: "nordica",
      descripcion: "Guerrera del norte con cuello de piel y un escudo redondo.",
      piel: "#ebbd9d", ropa: "#73999d", pantalon: "#354a52",
      pelo: "#b57543", acento: "#f3e1be"
    },
    {
      id: "kael", nombre: "Kael",
      categoria: "Guerreros", estilo: "knight", detalle: "samurai",
      descripcion: "Guardián carmesí con casco de media luna y placas superpuestas.",
      piel: "#dca27e", ropa: "#934b55", pantalon: "#352e40",
      pelo: "#282632", acento: "#f1c977"
    },
    {
      id: "duna", nombre: "Duna",
      categoria: "Guerreros", estilo: "knight", detalle: "desierto",
      descripcion: "Centinela del desierto con velo turquesa y armadura de bronce.",
      piel: "#925e43", ropa: "#ad8958", pantalon: "#4a4140",
      pelo: "#302823", acento: "#78dad0"
    },
    {
      id: "ferrum", nombre: "Ferrum",
      categoria: "Guerreros", estilo: "knight", detalle: "forjado",
      descripcion: "Caballero forjado con visor luminoso y hombreras de remaches.",
      piel: "#8999a5", ropa: "#555e75", pantalon: "#30394b",
      pelo: "#343c4a", acento: "#a7f0b9"
    },

    // MAGOS
    {
      id: "boreal", nombre: "Boreal",
      categoria: "Magos", estilo: "wizard", detalle: "hielo",
      descripcion: "Mago de las nieves con cristales de hielo y un manto plateado.",
      piel: "#c5d8ec", ropa: "#648fbd", pantalon: "#3a547c",
      pelo: "#eaf3ff", acento: "#b9ffff"
    },
    {
      id: "brasa", nombre: "Brasa",
      categoria: "Magos", estilo: "wizard", detalle: "fuego",
      descripcion: "Hechicera de las brasas con runas doradas y un sombrero ígneo.",
      piel: "#bb7759", ropa: "#a95346", pantalon: "#553345",
      pelo: "#efbe74", acento: "#ffd479"
    },
    {
      id: "iris", nombre: "Iris",
      categoria: "Magos", estilo: "wizard", detalle: "alquimia",
      descripcion: "Alquimista violeta con gafas redondas y frascos de colores.",
      piel: "#e6ad92", ropa: "#8d6bb2", pantalon: "#493e69",
      pelo: "#43324f", acento: "#b1ed9f"
    },
    {
      id: "cronos", nombre: "Cronos",
      categoria: "Magos", estilo: "wizard", detalle: "tiempo",
      descripcion: "Custodio del tiempo con reloj de bronce y un libro de arena.",
      piel: "#bd9779", ropa: "#557c7b", pantalon: "#344d59",
      pelo: "#e0dbce", acento: "#edc477"
    },
    {
      id: "selene", nombre: "Selene",
      categoria: "Magos", estilo: "wizard", detalle: "luna",
      descripcion: "Astrónoma lunar con constelaciones y una luna sobre el sombrero.",
      piel: "#bba1d5", ropa: "#505784", pantalon: "#30344f",
      pelo: "#d4d9ef", acento: "#f8e5a7"
    },

    // ANIME
    {
      id: "ren", nombre: "Ren",
      categoria: "Anime", estilo: "anime", detalle: "velocista",
      descripcion: "Corredor eléctrico de cabello blanco y zapatillas con aletas.",
      piel: "#dca482", ropa: "#3c718b", pantalon: "#293e51",
      pelo: "#e7edf4", acento: "#f5d873"
    },
    {
      id: "hana", nombre: "Hana",
      categoria: "Anime", estilo: "anime", detalle: "floral",
      descripcion: "Espadachina de cabello rosa con flores y un gran lazo posterior.",
      piel: "#f0c5a9", ropa: "#745d99", pantalon: "#3e3656",
      pelo: "#df91b3", acento: "#a6e4cf"
    },
    {
      id: "daichi", nombre: "Daichi",
      categoria: "Anime", estilo: "anime", detalle: "peleador",
      descripcion: "Luchador de cabello cobrizo con cinta de combate y guantes anchos.",
      piel: "#b87953", ropa: "#d29144", pantalon: "#403743",
      pelo: "#85473b", acento: "#f4e5bc"
    },
    {
      id: "sora", nombre: "Sora",
      categoria: "Anime", estilo: "anime", detalle: "aviador",
      descripcion: "Piloto de cabello azul con gafas de vuelo y una pequeña turbina.",
      piel: "#e9b492", ropa: "#72959c", pantalon: "#374958",
      pelo: "#4973a3", acento: "#ffd398"
    },
    {
      id: "rei", nombre: "Rei",
      categoria: "Anime", estilo: "anime", detalle: "cibernetico",
      descripcion: "Exploradora cibernética con visor lateral y placas de luz coral.",
      piel: "#c99072", ropa: "#41465f", pantalon: "#2b3047",
      pelo: "#aaa7db", acento: "#ff8eaa"
    },

    // ANIMALES
    {
      id: "milo", nombre: "Milo",
      categoria: "Animales", estilo: "cat", detalle: "gato",
      descripcion: "Gato naranja con orejas puntiagudas, bigotes y cola curvada.",
      piel: "#dda16b", ropa: "#5f91ad", pantalon: "#3c4a5e",
      pelo: "#975c39", acento: "#ffe1b1"
    },
    {
      id: "lila", nombre: "Lila",
      categoria: "Animales", estilo: "rabbit", detalle: "conejo",
      descripcion: "Coneja crema de largas orejas con peto lavanda y nariz rosa.",
      piel: "#eee3d4", ropa: "#9b83b9", pantalon: "#5a547b",
      pelo: "#c6b4a7", acento: "#f1b1c8"
    },
    {
      id: "taro", nombre: "Taro",
      categoria: "Animales", estilo: "bear", detalle: "oso",
      descripcion: "Oso de bosque con hocico de miel y mochila de excursionista.",
      piel: "#987353", ropa: "#748b59", pantalon: "#414b3b",
      pelo: "#654b38", acento: "#edcf8e"
    },
    {
      id: "lupo", nombre: "Lupo",
      categoria: "Animales", estilo: "wolf", detalle: "lobo",
      descripcion: "Lobo gris con hocico plateado y una gorguera de pelo angular.",
      piel: "#94a4b5", ropa: "#526f8e", pantalon: "#354557",
      pelo: "#596777", acento: "#dce6ef"
    },
    {
      id: "pipo", nombre: "Pipo",
      categoria: "Animales", estilo: "penguin", detalle: "pinguino",
      descripcion: "Pingüino polar de cara blanca con pico naranja y bufanda coral.",
      piel: "#354355", ropa: "#587e91", pantalon: "#334052",
      pelo: "#263342", acento: "#f6b766"
    },

    // MÍSTICOS
    {
      id: "sylva", nombre: "Sylva",
      categoria: "Místicos", estilo: "spirit", detalle: "dríade",
      descripcion: "Espíritu del bosque con ramas de jade y hojas en los hombros.",
      piel: "#9cbb92", ropa: "#547e68", pantalon: "#365449",
      pelo: "#395e50", acento: "#deedaa"
    },
    {
      id: "prisma", nombre: "Prisma",
      categoria: "Místicos", estilo: "spirit", detalle: "cristal",
      descripcion: "Guardián de cuarzo con una corona facetada y hombros de amatista.",
      piel: "#c4b4df", ropa: "#8477b5", pantalon: "#504a79",
      pelo: "#645a91", acento: "#9ceee5"
    },
    {
      id: "nereida", nombre: "Nereida",
      categoria: "Místicos", estilo: "spirit", detalle: "oceano",
      descripcion: "Guardiana de las mareas con aletas laterales y una corona de coral.",
      piel: "#89c7c6", ropa: "#4d8f9c", pantalon: "#345971",
      pelo: "#36677f", acento: "#f4b2bb"
    },
    {
      id: "vesper", nombre: "Vesper",
      categoria: "Místicos", estilo: "spirit", detalle: "nocturno",
      descripcion: "Viajero del crepúsculo con alas angulares y broche de rubí.",
      piel: "#b6a5cb", ropa: "#665479", pantalon: "#3b344e",
      pelo: "#393047", acento: "#ed97ab"
    },
    {
      id: "solaris", nombre: "Solaris",
      categoria: "Místicos", estilo: "spirit", detalle: "solar",
      descripcion: "Centinela solar con corona radiante y un emblema de luz dorada.",
      piel: "#e8bc82", ropa: "#c38951", pantalon: "#70523e",
      pelo: "#f1dcad", acento: "#ffec9c"
    },

    // FUNNY
    {
      id: "pixel", nombre: "Pixel",
      categoria: "Funny", estilo: "funny", detalle: "arcade",
      descripcion: "Robot arcade con pantalla de píxeles y botones de colores.",
      piel: "#94b9cd", ropa: "#7277b9", pantalon: "#44496e",
      pelo: "#354259", acento: "#b7f397"
    },
    {
      id: "waffle", nombre: "Waffle",
      categoria: "Funny", estilo: "funny", detalle: "chef",
      descripcion: "Cocinero de bolsillo con gorro esponjoso y delantal de caramelo.",
      piel: "#e7bd81", ropa: "#bf7659", pantalon: "#654b58",
      pelo: "#825846", acento: "#fff0ca"
    },
    {
      id: "pompon", nombre: "Pompón",
      categoria: "Funny", estilo: "funny", detalle: "fiesta",
      descripcion: "Animador de fiestas con gorro de lunares y pajarita turquesa.",
      piel: "#efb4c5", ropa: "#9e81be", pantalon: "#585582",
      pelo: "#795293", acento: "#95ebdd"
    },
    {
      id: "tuerca", nombre: "Tuerca",
      categoria: "Funny", estilo: "funny", detalle: "robot",
      descripcion: "Robot de taller con orejas de tornillo y una batería luminosa.",
      piel: "#a7c4bf", ropa: "#cb9555", pantalon: "#526779",
      pelo: "#45596a", acento: "#c0f28d"
    },
    {
      id: "cosmo", nombre: "Cosmo",
      categoria: "Funny", estilo: "funny", detalle: "espacial",
      descripcion: "Explorador espacial con casco de cristal y propulsores pastel.",
      piel: "#bca6dc", ropa: "#e0dce9", pantalon: "#62658b",
      pelo: "#605180", acento: "#96e8dc"
    }
  );

    // ============================================================
  //  AMPLIACIÓN: 10 personajes nuevos por categoría (70 en total)
  // ============================================================
  PERSONAJES.push(

    // ---------- HUMANOS ----------
    { id: "tomas", nombre: "Tomás", categoria: "Humanos", estilo: "street", detalle: "skater",
      descripcion: "Skatista con gorra al revés y la tabla colgada a la espalda.",
      piel: "#d79a6e", ropa: "#3f8fd0", pantalon: "#2c3547", pelo: "#2f2620", acento: "#ffd166" },
    { id: "elena", nombre: "Elena", categoria: "Humanos", estilo: "street", detalle: "medico",
      descripcion: "Doctora de urgencias con bata blanca, gorro y mascarilla.",
      piel: "#f0c6a6", ropa: "#dbe6ee", pantalon: "#3d6f9e", pelo: "#6b4430", acento: "#7fd8c0" },
    { id: "mateo", nombre: "Mateo", categoria: "Humanos", estilo: "street", detalle: "granjero",
      descripcion: "Granjero de sombrero de paja y peto de trabajo.",
      piel: "#b97c50", ropa: "#cf8a4a", pantalon: "#4a5b3d", pelo: "#3a2b20", acento: "#f2d98a" },
    { id: "julia", nombre: "Julia", categoria: "Humanos", estilo: "street", detalle: "pintor",
      descripcion: "Artista con boina, paleta y pincel llenos de color.",
      piel: "#e8b48f", ropa: "#7b5fa8", pantalon: "#33384c", pelo: "#c0503f", acento: "#ffe08a" },
    { id: "ivan", nombre: "Iván", categoria: "Humanos", estilo: "street", detalle: "detective",
      descripcion: "Detective de gabardina gris y sombrero de fieltro.",
      piel: "#c98d64", ropa: "#5c6470", pantalon: "#2f3542", pelo: "#2a2a32", acento: "#d9b166" },
    { id: "rosa", nombre: "Rosa", categoria: "Humanos", estilo: "street", detalle: "bombero",
      descripcion: "Bombera con casco reflectante y chaqueta ignífuga.",
      piel: "#a96a4a", ropa: "#c8543f", pantalon: "#353b4a", pelo: "#241f22", acento: "#ffd97a" },
    { id: "kai", nombre: "Kai", categoria: "Humanos", estilo: "street", detalle: "surfista",
      descripcion: "Surfista con gafas de sol y tabla a la espalda.",
      piel: "#dda275", ropa: "#2fa8b8", pantalon: "#2d4358", pelo: "#e0c48a", acento: "#ffe9b0" },
    { id: "noa", nombre: "Noa", categoria: "Humanos", estilo: "street", detalle: "cientifica",
      descripcion: "Científica de bata blanca, gafas y un frasco luminoso.",
      piel: "#f2cdb0", ropa: "#dfe8ee", pantalon: "#4b5570", pelo: "#8a5a3c", acento: "#9ee8ff" },
    { id: "dante", nombre: "Dante", categoria: "Humanos", estilo: "street", detalle: "dj",
      descripcion: "DJ de gorra plana, visera y auriculares enormes.",
      piel: "#8b5a3c", ropa: "#6a4fb0", pantalon: "#262b3c", pelo: "#1e1e26", acento: "#7cf3d0" },
    { id: "sara", nombre: "Sara", categoria: "Humanos", estilo: "street", detalle: "arqueologo",
      descripcion: "Arqueóloga de sombrero explorador y mochila de campaña.",
      piel: "#d9a077", ropa: "#b09468", pantalon: "#4a4433", pelo: "#33291f", acento: "#e8d38a" },

    // ---------- GUERREROS ----------
    { id: "bjorn", nombre: "Bjorn", categoria: "Guerreros", estilo: "knight", detalle: "vikingo",
      descripcion: "Guerrero del norte con casco de cuernos y collar de piel.",
      piel: "#cf9a72", ropa: "#6a7c8e", pantalon: "#3a4250", pelo: "#a86a35", acento: "#e8dcc0" },
    { id: "ares", nombre: "Ares", categoria: "Guerreros", estilo: "knight", detalle: "espartano",
      descripcion: "Hoplita de casco crestado y capa carmesí.",
      piel: "#b8815a", ropa: "#a8613f", pantalon: "#4a3327", pelo: "#2f2620", acento: "#e8b957" },
    { id: "maximo", nombre: "Máximo", categoria: "Guerreros", estilo: "knight", detalle: "gladiador",
      descripcion: "Gladiador de casco enrejado y brazo blindado.",
      piel: "#9c6644", ropa: "#7d6a55", pantalon: "#3d362f", pelo: "#2b2320", acento: "#d9a13f" },
    { id: "kenji", nombre: "Kenji", categoria: "Guerreros", estilo: "knight", detalle: "ronin",
      descripcion: "Espadachín errante con sombrero cónico y katana al cinto.",
      piel: "#d8a37c", ropa: "#4a4f66", pantalon: "#2c3040", pelo: "#232833", acento: "#c8a86a" },
    { id: "gabriel", nombre: "Gabriel", categoria: "Guerreros", estilo: "knight", detalle: "paladin",
      descripcion: "Paladín de yelmo dorado con cruz y capa clara.",
      piel: "#e6b892", ropa: "#c9d4e0", pantalon: "#4a5a78", pelo: "#c9a45e", acento: "#f4e6b0" },
    { id: "astrid", nombre: "Astrid", categoria: "Guerreros", estilo: "knight", detalle: "berserker",
      descripcion: "Berserker con pintura de guerra y un hacha enorme a la espalda.",
      piel: "#e8bb9a", ropa: "#7a5a4a", pantalon: "#3a3028", pelo: "#d88a3a", acento: "#c93f3f" },
    { id: "hildeg", nombre: "Hildeg", categoria: "Guerreros", estilo: "knight", detalle: "lancera",
      descripcion: "Lancera de casco alado y lanza de torneo.",
      piel: "#f0c8a8", ropa: "#7f9bb5", pantalon: "#3b4a5e", pelo: "#e6d08a", acento: "#cfe4f2" },
    { id: "falk", nombre: "Falk", categoria: "Guerreros", estilo: "knight", detalle: "cazador",
      descripcion: "Cazador encapuchado con arco y carcaj de flechas.",
      piel: "#c28c62", ropa: "#5d6b4a", pantalon: "#3a4230", pelo: "#4a3a28", acento: "#b7d18a" },
    { id: "draco", nombre: "Draco", categoria: "Guerreros", estilo: "knight", detalle: "draconario",
      descripcion: "Draconario de yelmo crestado y armadura escamada.",
      piel: "#b8785a", ropa: "#4f6b58", pantalon: "#2f3f3a", pelo: "#2b3a30", acento: "#9ce0a8" },
    { id: "nix", nombre: "Nix", categoria: "Guerreros", estilo: "knight", detalle: "mercenaria",
      descripcion: "Mercenaria con parche, ballesta y bandolera de recambio.",
      piel: "#a9764f", ropa: "#5a5348", pantalon: "#33302c", pelo: "#2a2420", acento: "#d9a13f" },

    // ---------- MAGOS ----------
    { id: "trueno", nombre: "Trueno", categoria: "Magos", estilo: "wizard", detalle: "tormenta",
      descripcion: "Mago de la tormenta con rayos y báculo de orbe eléctrico.",
      piel: "#e2b18c", ropa: "#5b6fa8", pantalon: "#333c5e", pelo: "#f0f4ff", acento: "#ffe45e" },
    { id: "flor", nombre: "Flor", categoria: "Magos", estilo: "wizard", detalle: "naturaleza",
      descripcion: "Maga del bosque con corona de hojas y báculo de madera viva.",
      piel: "#c98f66", ropa: "#4f8055", pantalon: "#33523a", pelo: "#6b4a2c", acento: "#b7e08a" },
    { id: "crimson", nombre: "Crimson", categoria: "Magos", estilo: "wizard", detalle: "sangre",
      descripcion: "Hechicera carmesí con capa escarlata y colmillos.",
      piel: "#e8c6b0", ropa: "#8e1f2e", pantalon: "#3d1620", pelo: "#2b1218", acento: "#e8546a" },
    { id: "astra", nombre: "Astra", categoria: "Magos", estilo: "wizard", detalle: "estrellas",
      descripcion: "Astrónoma con estrellas flotando a su alrededor.",
      piel: "#b79ad8", ropa: "#4a4a86", pantalon: "#2e2e56", pelo: "#dfe3ff", acento: "#f5e79a" },
    { id: "rune", nombre: "Rune", categoria: "Magos", estilo: "wizard", detalle: "runas",
      descripcion: "Erudito de piedras rúnicas que giran a su alrededor.",
      piel: "#d9b394", ropa: "#4f4a63", pantalon: "#33304a", pelo: "#3a3348", acento: "#8ff0d8" },
    { id: "miraje", nombre: "Miraje", categoria: "Magos", estilo: "wizard", detalle: "ilusion",
      descripcion: "Ilusionista con antifaz y cartas que flotan a su lado.",
      piel: "#e6bda0", ropa: "#7a4fa0", pantalon: "#3d2b56", pelo: "#4a2f5e", acento: "#ffd166" },
    { id: "morvath", nombre: "Morvath", categoria: "Magos", estilo: "wizard", detalle: "nigromante",
      descripcion: "Nigromante con máscara de calavera y collar de huesos.",
      piel: "#9a9ab0", ropa: "#2f3245", pantalon: "#22243a", pelo: "#1e2030", acento: "#7cf3a8" },
    { id: "zephyr", nombre: "Zephyr", categoria: "Magos", estilo: "wizard", detalle: "viento",
      descripcion: "Mago del viento con plumas y cintas que ondean.",
      piel: "#d6c2a8", ropa: "#6f97a8", pantalon: "#3c5566", pelo: "#e6e0cc", acento: "#c9f0e8" },
    { id: "samir", nombre: "Samir", categoria: "Magos", estilo: "wizard", detalle: "arena",
      descripcion: "Mago del desierto con arena girando y farol encantado.",
      piel: "#b57f52", ropa: "#c2914f", pantalon: "#5a4632", pelo: "#3a2c1e", acento: "#ffe9a8" },
    { id: "nakai", nombre: "Nakai", categoria: "Magos", estilo: "wizard", detalle: "chaman",
      descripcion: "Chamán de máscara tallada y plumas de colores.",
      piel: "#b07a56", ropa: "#8a6f4c", pantalon: "#4a3d2c", pelo: "#2f2620", acento: "#e2574c" },

    // ---------- ANIME ----------
    { id: "kaze", nombre: "Kaze", categoria: "Anime", estilo: "anime", detalle: "ninja",
      descripcion: "Ninja con media máscara y cintas al viento.",
      piel: "#e0ab84", ropa: "#3a4160", pantalon: "#282d44", pelo: "#20242f", acento: "#e2574c" },
    { id: "miko", nombre: "Miko", categoria: "Anime", estilo: "anime", detalle: "maga_anime",
      descripcion: "Aprendiz de maga con sombrero puntiagudo y báculo.",
      piel: "#f2cfb2", ropa: "#8f6fc4", pantalon: "#4a3a6e", pelo: "#e08ab0", acento: "#ffe49b" },
    { id: "lumi", nombre: "Lumi", categoria: "Anime", estilo: "anime", detalle: "idol",
      descripcion: "Idol con coletas, micrófono y uniforme brillante.",
      piel: "#f0c8a8", ropa: "#e86aa0", pantalon: "#4a3a68", pelo: "#f2b6d6", acento: "#8de8ff" },
    { id: "zero", nombre: "Zero", categoria: "Anime", estilo: "anime", detalle: "mecha",
      descripcion: "Piloto de mecha con hombreras metálicas y visor luminoso.",
      piel: "#d8a884", ropa: "#4a5570", pantalon: "#2c3348", pelo: "#7f8fbf", acento: "#8de8ff" },
    { id: "tetsu", nombre: "Tetsu", categoria: "Anime", estilo: "anime", detalle: "kendo",
      descripcion: "Esgrimista con careta de kendo y shinai.",
      piel: "#c99268", ropa: "#3f4a5c", pantalon: "#2b3040", pelo: "#26262e", acento: "#dfe8ef" },
    { id: "aiko", nombre: "Aiko", categoria: "Anime", estilo: "anime", detalle: "chef_anime",
      descripcion: "Cocinera con gorro alto y un cuchillo reluciente.",
      piel: "#f2cdb2", ropa: "#e8eef2", pantalon: "#4a5470", pelo: "#3a2e3c", acento: "#e2574c" },
    { id: "yumi", nombre: "Yumi", categoria: "Anime", estilo: "anime", detalle: "arquera",
      descripcion: "Arquera de la academia con arco violeta y carcaj.",
      piel: "#e8bc98", ropa: "#6a5a9e", pantalon: "#39335a", pelo: "#8fb8e0", acento: "#f0e6c8" },
    { id: "haru", nombre: "Haru", categoria: "Anime", estilo: "anime", detalle: "estudiante",
      descripcion: "Estudiante con mochila, corbata y uniforme escolar.",
      piel: "#efc8a8", ropa: "#3f4d7a", pantalon: "#2c3352", pelo: "#2f2a33", acento: "#e2574c" },
    { id: "kuro", nombre: "Kuro", categoria: "Anime", estilo: "anime", detalle: "vampiro_anime",
      descripcion: "Vampiro nocturno con capa granate y colmillos.",
      piel: "#e8dce0", ropa: "#4a1c2c", pantalon: "#2b1420", pelo: "#20202c", acento: "#e8546a" },
    { id: "natsuo", nombre: "Natsuo", categoria: "Anime", estilo: "anime", detalle: "gamer",
      descripcion: "Jugador profesional con auriculares y visor de luz.",
      piel: "#d9a67e", ropa: "#4a3f8a", pantalon: "#28243f", pelo: "#5a4f8a", acento: "#8de8ff" },

    // ---------- ANIMALES ----------
    { id: "pua", nombre: "Púa", categoria: "Animales", estilo: "bear", detalle: "erizo",
      descripcion: "Erizo de púas largas y hocico curioso.",
      piel: "#c9a682", ropa: "#6f7f95", pantalon: "#3f4a5c", pelo: "#7a5c42", acento: "#f0d6bb" },
    { id: "bandi", nombre: "Bandi", categoria: "Animales", estilo: "cat", detalle: "mapache",
      descripcion: "Mapache con antifaz oscuro y cola rayada.",
      piel: "#9aa3b0", ropa: "#4f6b8a", pantalon: "#35435a", pelo: "#3a3f52", acento: "#f4f0e6" },
    { id: "asti", nombre: "Asti", categoria: "Animales", estilo: "rabbit", detalle: "ciervo",
      descripcion: "Ciervo joven con astas ramificadas y orejas largas.",
      piel: "#c08c5c", ropa: "#6f8a5c", pantalon: "#4a4432", pelo: "#8a5f38", acento: "#f0e0b8" },
    { id: "brinco", nombre: "Brinco", categoria: "Animales", estilo: "bear", detalle: "cabra",
      descripcion: "Cabra montesa de cuernos curvos y barba corta.",
      piel: "#e6e0d2", ropa: "#8a7f6a", pantalon: "#4f4a3f", pelo: "#5a5248", acento: "#c9b48a" },
    { id: "capar", nombre: "Capar", categoria: "Animales", estilo: "bear", detalle: "tortuga",
      descripcion: "Tortuga de caparazón verde y cuello arrugado.",
      piel: "#8fae7a", ropa: "#5f8a5a", pantalon: "#3a5240", pelo: "#3f5a3a", acento: "#d9e8a8" },
    { id: "noctua", nombre: "Noctua", categoria: "Animales", estilo: "cat", detalle: "buho",
      descripcion: "Búho de grandes ojos y penachos en la cabeza.",
      piel: "#b59a78", ropa: "#5f5a7a", pantalon: "#3a3852", pelo: "#7a6448", acento: "#f0d69a" },
    { id: "quetzal", nombre: "Quetzal", categoria: "Animales", estilo: "penguin", detalle: "tucan",
      descripcion: "Tucán de pico enorme y colores tropicales.",
      piel: "#3f4a5c", ropa: "#2fa8b8", pantalon: "#2c3a4a", pelo: "#20283a", acento: "#f0b040" },
    { id: "euca", nombre: "Euca", categoria: "Animales", estilo: "bear", detalle: "koala",
      descripcion: "Koala de orejas redondas y nariz grande.",
      piel: "#a8b0b8", ropa: "#7f9ec9", pantalon: "#4a5566", pelo: "#8a929c", acento: "#f2e6d0" },
    { id: "lince", nombre: "Lince", categoria: "Animales", estilo: "cat", detalle: "lince",
      descripcion: "Lince de orejas con penacho y patillas largas.",
      piel: "#d9ab6e", ropa: "#6f7f5c", pantalon: "#4a4a34", pelo: "#a87a44", acento: "#f0e2c0" },
    { id: "fafnir", nombre: "Fafnir", categoria: "Animales", estilo: "wolf", detalle: "dragoncillo",
      descripcion: "Dragón pequeño de escamas verdes, alas y cola con punta.",
      piel: "#6fa86a", ropa: "#3f6a4a", pantalon: "#2c4a3a", pelo: "#2f5238", acento: "#e8d166" },

    // ---------- MÍSTICOS ----------
    { id: "ignis", nombre: "Ignis", categoria: "Místicos", estilo: "spirit", detalle: "fuego_espiritu",
      descripcion: "Espíritu de llama con lenguas de fuego en los hombros.",
      piel: "#e8a05a", ropa: "#c2553f", pantalon: "#6e2f2a", pelo: "#ffcf70", acento: "#ffd166" },
    { id: "glaciar", nombre: "Glaciar", categoria: "Místicos", estilo: "spirit", detalle: "hielo_espiritu",
      descripcion: "Espíritu de hielo con cristales azules flotando.",
      piel: "#bcd8e8", ropa: "#5f8fc4", pantalon: "#3a5a86", pelo: "#eaf6ff", acento: "#9ce8ff" },
    { id: "umbra", nombre: "Umbra", categoria: "Místicos", estilo: "spirit", detalle: "sombra",
      descripcion: "Sombra viviente con ojos brillantes y jirones oscuros.",
      piel: "#5a5670", ropa: "#2b2838", pantalon: "#1e1c2a", pelo: "#3a3550", acento: "#c86aff" },
    { id: "faela", nombre: "Faela", categoria: "Místicos", estilo: "spirit", detalle: "fada",
      descripcion: "Hada de alas de mariposa y polvo luminoso.",
      piel: "#f0c8d8", ropa: "#b48fd8", pantalon: "#6a5a94", pelo: "#a8e8d0", acento: "#ffe49b" },
    { id: "gea", nombre: "Gea", categoria: "Místicos", estilo: "spirit", detalle: "titan",
      descripcion: "Titán de piedra con hombreras rocosas y musgo.",
      piel: "#a8a08a", ropa: "#6f6a56", pantalon: "#4a4638", pelo: "#5a6a48", acento: "#9cd47a" },
    { id: "pitia", nombre: "Pitia", categoria: "Místicos", estilo: "spirit", detalle: "oraculo",
      descripcion: "Oráculo con tercer ojo y velo dorado.",
      piel: "#d8c0a0", ropa: "#8a7fc4", pantalon: "#4a4470", pelo: "#e8e0cc", acento: "#ffe08a" },
    { id: "faeton", nombre: "Faetón", categoria: "Místicos", estilo: "spirit", detalle: "fenix",
      descripcion: "Fénix con alas de fuego y plumas incandescentes.",
      piel: "#e8a05a", ropa: "#c9542f", pantalon: "#6e2f22", pelo: "#ffbe55", acento: "#ffd166" },
    { id: "petra", nombre: "Petra", categoria: "Místicos", estilo: "spirit", detalle: "golem",
      descripcion: "Gólem de placas de piedra y núcleo luminoso.",
      piel: "#8f8a80", ropa: "#6a6560", pantalon: "#4a4642", pelo: "#5a5550", acento: "#9ce8ff" },
    { id: "marina", nombre: "Marina", categoria: "Místicos", estilo: "spirit", detalle: "sirena",
      descripcion: "Sirena de escamas turquesa y corona de conchas.",
      piel: "#8fd8d0", ropa: "#3f8fa8", pantalon: "#2c5a78", pelo: "#5ac8c0", acento: "#ffb0c0" },
    { id: "eclipse", nombre: "Eclipse", categoria: "Místicos", estilo: "spirit", detalle: "eclipse",
      descripcion: "Espíritu del eclipse con disco oscuro y corona radiante.",
      piel: "#9a8fc0", ropa: "#3a3556", pantalon: "#252238", pelo: "#e8e0ff", acento: "#ffd166" },

    // ---------- FUNNY ----------
    { id: "parche", nombre: "Parche", categoria: "Funny", estilo: "funny", detalle: "pirata",
      descripcion: "Pirata de bandana roja, parche en el ojo y garfio.",
      piel: "#e8b48f", ropa: "#8a3f3f", pantalon: "#3a3038", pelo: "#3a2a20", acento: "#f0c04a" },
    { id: "duke", nombre: "Duke", categoria: "Funny", estilo: "funny", detalle: "vaquero",
      descripcion: "Vaquero de sombrero ancho, chaleco y botones.",
      piel: "#c98d64", ropa: "#7a5a3a", pantalon: "#3f4658", pelo: "#4a3226", acento: "#e2574c" },
    { id: "bombo", nombre: "Bombo", categoria: "Funny", estilo: "funny", detalle: "payaso",
      descripcion: "Payaso de nariz roja, peluca rizada y pajarita.",
      piel: "#f2d0b0", ropa: "#f4f0e6", pantalon: "#4a7ac9", pelo: "#e2574c", acento: "#e86aa0" },
    { id: "cactus", nombre: "Cactus", categoria: "Funny", estilo: "funny", detalle: "cactus",
      descripcion: "Cactus andante con púas y una flor en la cabeza.",
      piel: "#6aa85a", ropa: "#4a7a44", pantalon: "#3a5a38", pelo: "#8ac46a", acento: "#ff9ac0" },
    { id: "helado", nombre: "Helado", categoria: "Funny", estilo: "funny", detalle: "helado",
      descripcion: "Cucurucho con tres bolas de helado y chispas de colores.",
      piel: "#f0d8b0", ropa: "#e8d0b0", pantalon: "#7a5a3a", pelo: "#f2b6d6", acento: "#8de8ff" },
    { id: "burbuja", nombre: "Burbuja", categoria: "Funny", estilo: "funny", detalle: "burbuja",
      descripcion: "Burbuja flotante rodeada de pompas de jabón.",
      piel: "#b8e8f2", ropa: "#8fc4e8", pantalon: "#5a7a9e", pelo: "#dff6ff", acento: "#c9a8ff" },
    { id: "rex", nombre: "Rex", categoria: "Funny", estilo: "funny", detalle: "dino_funny",
      descripcion: "Dinosaurio de placas dorsales y sonrisa enorme.",
      piel: "#8fc46a", ropa: "#5f8a4a", pantalon: "#3f5a3a", pelo: "#4a6a3a", acento: "#ffd166" },
    { id: "sabana", nombre: "Sábana", categoria: "Funny", estilo: "funny", detalle: "fantasma",
      descripcion: "Fantasma de sábana con dos agujeros para los ojos.",
      piel: "#e8eaf2", ropa: "#c9cee0", pantalon: "#a8aec4", pelo: "#d8dce8", acento: "#9ce8ff" },
    { id: "kapow", nombre: "Kapow", categoria: "Funny", estilo: "funny", detalle: "superheroe",
      descripcion: "Superhéroe con capa al viento, antifaz y emblema.",
      piel: "#e8b48f", ropa: "#3f6ac9", pantalon: "#2c3a6a", pelo: "#2f2a33", acento: "#e2574c" },
    { id: "chispa", nombre: "Chispa", categoria: "Funny", estilo: "funny", detalle: "bombilla",
      descripcion: "Inventor con bombilla en la cabeza y cables por todas partes.",
      piel: "#e8c9a0", ropa: "#8a7ac9", pantalon: "#4a4568", pelo: "#5a4a8a", acento: "#ffe45e" }
  );

  function crearPersonaje(T, ficha) {
    const raiz = new T.Group();
    const materiales = {};

    function material(color, metal = false, brillo = false) {
      const clave = `${color}-${metal}-${brillo}`;
      if (!materiales[clave]) {
        materiales[clave] = new T.MeshStandardMaterial({
          color,
          roughness: metal ? 0.36 : 0.72,
          metalness: metal ? 0.55 : 0.04,
          emissive: brillo ? color : "#000000",
          emissiveIntensity: brillo ? 0.3 : 0
        });
      }
      return materiales[clave];
    }

    function pieza(parent, geo, color, x, y, z, metal, brillo) {
      const mesh = new T.Mesh(geo, material(color, metal, brillo));
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    }

    function caja(parent, w, h, d, color, x = 0, y = 0, z = 0, metal = false) {
      return pieza(parent, new T.BoxGeometry(w, h, d), color, x, y, z, metal);
    }

    function esfera(parent, r, color, x, y, z) {
      return pieza(parent, new T.SphereGeometry(r, 16, 12), color, x, y, z);
    }

    function cono(parent, r, h, color, x, y, z, lados = 4) {
      return pieza(parent, new T.ConeGeometry(r, h, lados), color, x, y, z);
    }

    function grupo(parent, x = 0, y = 0, z = 0) {
      const g = new T.Group();
      g.position.set(x, y, z);
      parent.add(g);
      return g;
    }

    const cuerpo = grupo(raiz, 0, 1.12, 0);
    const torso = grupo(cuerpo);
    caja(torso, 0.91, 0.86, 0.48, ficha.ropa, 0, 0.43, 0);
    caja(torso, 0.93, 0.12, 0.50, ficha.pantalon, 0, 0.04, 0);
    caja(torso, 0.10, 0.62, 0.025, ficha.acento, 0, 0.48, 0.253);
    caja(torso, 0.16, 0.11, 0.035, ficha.acento, -0.26, 0.64, 0.26);

    const cabeza = grupo(torso, 0, 1.22, 0);
    caja(cabeza, 0.73, 0.69, 0.66, ficha.piel);
        const animal = [
      "fox", "panda", "cat", "rabbit", "bear", "wolf", "penguin"
    ].includes(ficha.estilo);


    if (!animal) {
      caja(cabeza, 0.77, 0.17, 0.70, ficha.pelo, 0, 0.30, -0.015);
      caja(cabeza, 0.76, 0.27, 0.13, ficha.pelo, 0, 0.12, -0.29);
      caja(cabeza, 0.15, 0.27, 0.14, ficha.pelo, -0.30, 0.14, 0.27);
    }

    const ojos = grupo(cabeza);
    for (const x of [-0.17, 0.17]) {
      if (ficha.estilo === "panda") {
        esfera(cabeza, 0.13, ficha.pelo, x, 0.03, 0.32);
      }
      caja(ojos, 0.067, 0.105, 0.035, "#202839", x, 0.04, 0.35);
      caja(ojos, 0.023, 0.028, 0.012, "#ffffff", x - 0.013, 0.067, 0.372);
    }
    caja(cabeza, 0.12, 0.028, 0.025, "#885d62", 0, -0.16, 0.345);

    const brazoI = grupo(torso, -0.64, 0.79, 0);
    const brazoD = grupo(torso, 0.64, 0.79, 0);
    for (const brazo of [brazoI, brazoD]) {
      caja(brazo, 0.31, 0.49, 0.40, ficha.ropa, 0, -0.18, 0);
      caja(brazo, 0.32, 0.13, 0.41, ficha.acento, 0, -0.41, 0);
      caja(brazo, 0.29, 0.25, 0.34, ficha.piel, 0, -0.58, 0);
    }

    const piernaI = grupo(cuerpo, -0.25, 0, 0);
    const piernaD = grupo(cuerpo, 0.25, 0, 0);
    for (const pierna of [piernaI, piernaD]) {
      caja(pierna, 0.38, 0.75, 0.40, ficha.pantalon, 0, -0.39, 0);
      caja(pierna, 0.40, 0.23, 0.60, "#edf0f4", 0, -0.88, 0.09);
      caja(pierna, 0.41, 0.065, 0.61, ficha.acento, 0, -1.02, 0.09);
    }

    let cola = null;
    let alas = [];

    if (ficha.estilo === "knight") {
      caja(torso, 0.74, 0.61, 0.10, ficha.ropa, 0, 0.48, 0.28, true);
      caja(torso, 0.23, 0.29, 0.06, ficha.acento, 0, 0.50, 0.35, true);
      for (const brazo of [brazoI, brazoD]) {
        caja(brazo, 0.47, 0.27, 0.51, ficha.ropa, 0, 0.02, 0, true);
      }
      caja(cabeza, 0.82, 0.19, 0.73, ficha.ropa, 0, 0.36, 0, true);
      caja(cabeza, 0.12, 0.23, 0.77, ficha.acento, 0, 0.47, 0);
    }

    if (ficha.estilo === "wizard") {
      pieza(cabeza, new T.CylinderGeometry(0.63, 0.63, 0.08, 8),
        ficha.ropa, 0, 0.39, 0);
      cono(cabeza, 0.43, 0.87, ficha.ropa, 0, 0.86, 0, 8);
      pieza(cabeza, new T.OctahedronGeometry(0.12),
        ficha.acento, 0, 0.62, 0.33, false, true);
      caja(torso, 0.82, 0.91, 0.08, ficha.ropa, 0, 0.28, -0.31);
    }

    if (ficha.estilo === "anime") {
      for (let i = -2; i <= 2; i++) {
        const pico = cono(cabeza, 0.17, 0.39, ficha.pelo,
          i * 0.15, 0.49 + (2 - Math.abs(i)) * 0.035, 0);
        pico.rotation.z = -i * 0.16;
      }
      caja(torso, 0.70, 0.14, 0.60, ficha.acento, 0, 0.90, 0);
      const bufanda = caja(torso, 0.22, 0.64, 0.09,
        ficha.acento, -0.31, 0.57, -0.37);
      bufanda.rotation.z = -0.24;
    }

        if (["fox", "panda"].includes(ficha.estilo)) {

      for (const x of [-0.28, 0.28]) {
        if (ficha.estilo === "fox") {
          cono(cabeza, 0.22, 0.40, ficha.piel, x, 0.48, 0, 4);
          cono(cabeza, 0.12, 0.25, ficha.acento, x, 0.47, 0.08, 3);
        } else {
          esfera(cabeza, 0.20, ficha.pelo, x, 0.40, 0);
        }
      }
      caja(cabeza, 0.38, 0.24, 0.18,
        ficha.estilo === "fox" ? ficha.acento : ficha.piel, 0, -0.12, 0.37);
      caja(cabeza, 0.12, 0.085, 0.05, "#30353c", 0, -0.04, 0.48);
      cola = grupo(cuerpo, 0, 0.10, -0.28);
      const parte = caja(cola, 0.30, 0.32,
        ficha.estilo === "fox" ? 0.75 : 0.25,
        ficha.piel, 0, 0.09, -0.30);
      parte.rotation.x = -0.35;
      if (ficha.estilo === "fox") {
        caja(cola, 0.29, 0.30, 0.23, ficha.acento, 0, 0.22, -0.66);
      }
    }

    if (ficha.estilo === "angel") {
      const halo = pieza(cabeza,
        new T.TorusGeometry(0.40, 0.035, 8, 32),
        ficha.acento, 0, 0.65, 0, true, true);
      halo.rotation.x = Math.PI / 2;
      for (const lado of [-1, 1]) {
        const ala = grupo(torso, lado * 0.35, 0.72, -0.30);
        for (let i = 0; i < 3; i++) {
          const pluma = caja(ala, 0.23, 0.77 - i * 0.12, 0.13,
            "#e8e5ff", lado * (0.18 + i * 0.18), 0.05 - i * 0.08, 0);
          pluma.rotation.z = -lado * 0.48;
        }
        alas.push(ala);
      }
    }

    if (ficha.estilo === "demon") {
      for (const lado of [-1, 1]) {
        const cuerno = cono(cabeza, 0.13, 0.46,
          ficha.acento, lado * 0.28, 0.52, 0, 5);
        cuerno.rotation.z = -lado * 0.28;
      }
      pieza(torso, new T.OctahedronGeometry(0.16),
        ficha.acento, 0, 0.55, 0.34, false, true);
    }

    if (ficha.estilo === "funny") {
      caja(cabeza, 0.045, 0.31, 0.045, ficha.pelo, 0, 0.52, 0);
      esfera(cabeza, 0.12, ficha.acento, 0, 0.72, 0);
      for (const x of [-0.18, 0.18]) {
        pieza(cabeza, new T.TorusGeometry(0.15, 0.035, 6, 16),
          ficha.pelo, x, 0.04, 0.39);
      }
      caja(cabeza, 0.09, 0.035, 0.04, ficha.pelo, 0, 0.04, 0.39);
      for (const y of [0.28, 0.47, 0.66]) {
        esfera(torso, 0.045, ficha.acento, 0, y, 0.29);
      }
    }

        // Accesorios de los 35 personajes nuevos.
    // Se vinculan a cabeza, torso o extremidades para seguir las animaciones.
    if (ficha.detalle) {
      const crema = "#f3e7d1";
      const oscuro = "#283344";

      function cristal(parent, radio, color, x, y, z) {
        return pieza(
          parent, new T.OctahedronGeometry(radio),
          color, x, y, z, false, true
        );
      }

      function disco(parent, radio, grosor, color, x, y, z, metal = false) {
        const mesh = pieza(
          parent,
          new T.CylinderGeometry(radio, radio, grosor, 16),
          color, x, y, z, metal
        );
        mesh.rotation.x = Math.PI / 2;
        return mesh;
      }

      function mochila(color = ficha.pantalon) {
        const g = grupo(torso, 0, 0.45, -0.43);
        caja(g, 0.65, 0.64, 0.28, color);
        caja(g, 0.46, 0.25, 0.08, ficha.acento, 0, -0.12, -0.18);
        for (const lado of [-1, 1]) {
          caja(torso, 0.065, 0.64, 0.045,
            color, lado * 0.29, 0.48, 0.285);
        }
        return g;
      }

      function gafas(color = ficha.acento, altura = 0.17) {
        const g = grupo(cabeza, 0, altura, 0.39);
        for (const lado of [-1, 1]) {
          disco(g, 0.115, 0.055, color, lado * 0.18, 0, 0, true);
          disco(g, 0.080, 0.063, "#527b91", lado * 0.18, 0, 0.014);
        }
        caja(g, 0.14, 0.035, 0.035, color);
        return g;
      }

      function cinturon() {
        caja(torso, 0.96, 0.13, 0.53, "#635044", 0, 0.13, 0);
        caja(torso, 0.16, 0.13, 0.05,
          ficha.acento, 0, 0.13, 0.29, true);
      }

      function libro(parent, x, y, z) {
        const g = grupo(parent, x, y, z);
        caja(g, 0.29, 0.38, 0.12, ficha.acento);
        caja(g, 0.25, 0.32, 0.13, crema, 0.015, 0, 0);
        caja(g, 0.30, 0.39, 0.025, ficha.pantalon, 0, 0, 0.08);
        caja(g, 0.045, 0.27, 0.02, ficha.acento, 0, 0, 0.10);
        return g;
      }

      function hoja(parent, color, x, y, z, giro = 0) {
        const mesh = pieza(
          parent, new T.OctahedronGeometry(0.16),
          color, x, y, z
        );
        mesh.scale.set(0.65, 1.35, 0.28);
        mesh.rotation.z = giro;
        return mesh;
      }

      function hocico(color, ancho = 0.36, profundidad = 0.19) {
        caja(cabeza, ancho, 0.23, profundidad, color, 0, -0.13, 0.36);
        caja(cabeza, 0.105, 0.07, 0.055,
          oscuro, 0, -0.045, 0.37 + profundidad / 2);
      }

      function orejasPunta(color, interior, altura = 0.37) {
        for (const lado of [-1, 1]) {
          const oreja = grupo(cabeza, lado * 0.28, 0.30, 0);
          oreja.rotation.z = -lado * 0.13;
          cono(oreja, 0.19, altura, color, 0, altura / 2, 0, 4);
          cono(oreja, 0.11, altura * 0.67,
            interior, 0, altura * 0.48, 0.095, 3);
        }
      }

      switch (ficha.detalle) {
        // HUMANOS
        case "mensajero": {
          caja(cabeza, 0.80, 0.17, 0.73, ficha.ropa, 0, 0.36, 0);
          caja(cabeza, 0.68, 0.045, 0.34, ficha.acento, 0, 0.28, 0.43);
          const pack = mochila();
          caja(pack, 0.31, 0.18, 0.025, crema, 0, 0.15, -0.155);
          caja(pack, 0.04, 0.16, 0.03, ficha.ropa, 0, 0.15, -0.18);
          break;
        }

        case "mecanica":
          gafas(ficha.acento, 0.28);
          cinturon();
          caja(torso, 0.23, 0.27, 0.13, "#745741", -0.30, 0.10, 0.31);
          caja(torso, 0.035, 0.32, 0.04, "#c5d8e5", -0.30, 0.20, 0.40, true);
          caja(torso, 0.11, 0.07, 0.04, "#c5d8e5", -0.30, 0.37, 0.40, true);
          caja(torso, 0.17, 0.20, 0.045, ficha.acento, 0.24, 0.58, 0.30);
          break;

        case "musico":
          caja(cabeza, 0.89, 0.075, 0.19, ficha.acento, 0, 0.42, 0);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.09, 0.40, 0.18, ficha.acento, lado * 0.42, 0.23, 0);
            caja(cabeza, 0.16, 0.27, 0.28, ficha.pantalon, lado * 0.44, 0.02, 0);
            caja(cabeza, 0.025, 0.15, 0.16, ficha.acento, lado * 0.53, 0.02, 0);
          }
          caja(torso, 0.20, 0.26, 0.07, oscuro, 0.24, 0.24, 0.30);
          disco(torso, 0.045, 0.02, ficha.acento, 0.24, 0.22, 0.35);
          break;

        case "botanica": {
          pieza(cabeza, new T.CylinderGeometry(0.57, 0.57, 0.06, 12),
            ficha.acento, 0, 0.39, 0);
          pieza(cabeza, new T.CylinderGeometry(0.34, 0.39, 0.23, 12),
            "#c4a66d", 0, 0.52, 0);
          const pack = mochila("#92754f");
          caja(pack, 0.27, 0.25, 0.25, "#c68764", 0, 0.40, 0);
          caja(pack, 0.035, 0.30, 0.035, "#587d4b", 0, 0.65, 0);
          hoja(pack, "#9cbc77", -0.10, 0.67, 0, -0.7);
          hoja(pack, "#729f61", 0.10, 0.76, 0, 0.7);
          break;
        }

        case "rescatista":
          caja(cabeza, 0.84, 0.23, 0.77, ficha.acento, 0, 0.36, 0);
          caja(cabeza, 0.88, 0.055, 0.82, ficha.acento, 0, 0.25, 0);
          disco(cabeza, 0.105, 0.08, oscuro, 0, 0.36, 0.43);
          disco(cabeza, 0.075, 0.09, "#fff3c9", 0, 0.36, 0.45);
          mochila("#566577");
          for (const lado of [-1, 1]) {
            caja(torso, 0.10, 0.59, 0.04, ficha.acento, lado * 0.30, 0.47, 0.30);
          }
          break;

        // GUERREROS
        case "bastion": {
          const escudo = grupo(brazoI, -0.14, -0.27, 0.28);
          caja(escudo, 0.61, 0.76, 0.12, ficha.acento, 0, 0, 0, true);
          caja(escudo, 0.50, 0.64, 0.045, ficha.ropa, 0, 0, 0.09, true);
          caja(escudo, 0.07, 0.51, 0.035, ficha.acento, 0, 0, 0.13, true);
          caja(escudo, 0.38, 0.07, 0.035, ficha.acento, 0, 0.10, 0.13, true);
          caja(cabeza, 0.10, 0.29, 0.55, ficha.ropa, 0, 0.66, -0.02, true);
          break;
        }

        case "nordica":
          for (let i = -2; i <= 2; i++) {
            esfera(torso, 0.15, crema, i * 0.19, 0.83, -0.03);
          }
          disco(brazoI, 0.40, 0.13, "#826448", -0.12, -0.31, 0.29);
          disco(brazoI, 0.30, 0.15, ficha.ropa, -0.12, -0.31, 0.30, true);
          esfera(brazoI, 0.11, ficha.acento, -0.12, -0.31, 0.40);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.13, 0.38, 0.15, ficha.pelo, lado * 0.34, -0.27, 0.16);
          }
          break;

        case "samurai": {
          const luna = pieza(
            cabeza, new T.TorusGeometry(0.25, 0.035, 6, 24, Math.PI),
            ficha.acento, 0, 0.68, 0.20, true
          );
          luna.rotation.z = Math.PI;
          for (let i = 0; i < 3; i++) {
            caja(torso, 0.79, 0.10, 0.055,
              ficha.acento, 0, 0.31 + i * 0.16, 0.355, true);
          }
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.15, 0.33, 0.49, ficha.ropa, lado * 0.43, 0.06, -0.05, true);
          }
          break;
        }

        case "desierto":
          caja(cabeza, 0.77, 0.22, 0.07, ficha.acento, 0, -0.18, 0.37);
          caja(cabeza, 0.85, 0.09, 0.76, ficha.acento, 0, 0.37, 0);
          caja(torso, 0.73, 0.78, 0.06, ficha.acento, 0, 0.42, -0.31);
          cristal(cabeza, 0.10, ficha.acento, 0, 0.50, 0.40);
          cinturon();
          break;

        case "forjado":
          caja(cabeza, 0.76, 0.18, 0.045, oscuro, 0, 0.05, 0.36);
          caja(cabeza, 0.57, 0.045, 0.02, ficha.acento, 0, 0.06, 0.39);
          for (const brazo of [brazoI, brazoD]) {
            for (const x of [-0.14, 0.14]) {
              esfera(brazo, 0.045, ficha.acento, x, 0.07, 0.27);
            }
          }
          for (let i = -1; i <= 1; i++) {
            caja(torso, 0.075, 0.18, 0.04, oscuro, i * 0.16, 0.40, 0.40);
          }
          break;

        // MAGOS
        case "hielo":
          for (const lado of [-1, 1]) {
            const c = cristal(torso, 0.19, ficha.acento, lado * 0.50, 0.87, 0);
            c.scale.y = 1.7;
          }
          caja(torso, 0.88, 0.82, 0.06, "#c5dceb", 0, 0.36, -0.38);
          cristal(cabeza, 0.13, ficha.acento, 0, 1.36, 0);
          break;

        case "fuego":
          for (let i = -1; i <= 1; i++) {
            const llama = cristal(cabeza, 0.105, ficha.acento,
              i * 0.20, 0.50 + (i === 0 ? 0.07 : 0), 0.35);
            llama.scale.y = 1.7;
          }
          for (const lado of [-1, 1]) {
            caja(brazoI, 0.045, 0.21, 0.035, ficha.acento, lado * 0.08, -0.16, 0.22);
            caja(brazoD, 0.045, 0.21, 0.035, ficha.acento, lado * 0.08, -0.16, 0.22);
          }
          libro(torso, -0.48, 0.18, 0.03);
          break;

        case "alquimia":
          gafas("#ddc984", 0.045);
          cinturon();
          for (let i = -1; i <= 1; i++) {
            const color = ["#8de0d8", "#eaa2c6", "#c8e58d"][i + 1];
            esfera(torso, 0.09, color, i * 0.25, 0.21, 0.36);
            caja(torso, 0.07, 0.09, 0.07, "#967353", i * 0.25, 0.31, 0.36);
          }
          break;

        case "tiempo":
          disco(torso, 0.23, 0.08, ficha.acento, 0, 0.51, 0.31, true);
          disco(torso, 0.185, 0.025, crema, 0, 0.51, 0.365);
          caja(torso, 0.022, 0.13, 0.02, oscuro, 0, 0.56, 0.39);
          caja(torso, 0.105, 0.022, 0.02, oscuro, 0.04, 0.51, 0.39);
          libro(torso, -0.49, 0.18, 0);
          break;

        case "luna": {
          const luna = pieza(
            cabeza, new T.TorusGeometry(0.15, 0.043, 6, 24, Math.PI * 1.45),
            ficha.acento, 0, 1.33, 0
          );
          luna.rotation.z = -Math.PI * 0.72;
          for (let i = 0; i < 4; i++) {
            cristal(torso, 0.045, ficha.acento,
              Math.sin(i * 2) * 0.28, 0.25 + i * 0.15, 0.29);
          }
          break;
        }

        // ANIME
        case "velocista":
          for (const pierna of [piernaI, piernaD]) {
            const aleta = caja(pierna, 0.10, 0.25, 0.32,
              ficha.acento, 0.22, -0.85, -0.10);
            aleta.rotation.x = -0.45;
          }
          caja(cabeza, 0.79, 0.07, 0.72, ficha.acento, 0, 0.23, 0);
          caja(torso, 0.20, 0.28, 0.045, ficha.acento, 0.25, 0.46, 0.30);
          break;

        case "floral":
          for (let i = 0; i < 5; i++) {
            const a = i * Math.PI * 2 / 5;
            esfera(cabeza, 0.065, ficha.acento,
              -0.30 + Math.cos(a) * 0.085,
              0.22 + Math.sin(a) * 0.085, 0.37);
          }
          esfera(cabeza, 0.045, "#ffe6a0", -0.30, 0.22, 0.42);
          for (const lado of [-1, 1]) {
            const lazo = caja(torso, 0.38, 0.27, 0.10,
              ficha.acento, lado * 0.23, 0.31, -0.40);
            lazo.rotation.z = lado * 0.25;
          }
          break;

        case "peleador":
          caja(cabeza, 0.79, 0.09, 0.72, ficha.acento, 0, 0.22, 0);
          for (const brazo of [brazoI, brazoD]) {
            caja(brazo, 0.36, 0.26, 0.40, "#70463d", 0, -0.58, 0.02);
            caja(brazo, 0.37, 0.075, 0.41, ficha.acento, 0, -0.45, 0.02);
          }
          cinturon();
          caja(torso, 0.12, 0.36, 0.05, ficha.acento, 0.19, -0.02, 0.30);
          break;

        case "aviador": {
          gafas("#d4b17d", 0.26);
          const pack = mochila("#74644f");
          disco(pack, 0.24, 0.16, "#a7b9c7", 0, 0.05, -0.23, true);
          disco(pack, 0.15, 0.18, oscuro, 0, 0.05, -0.25);
          for (let i = 0; i < 3; i++) {
            const pala = caja(pack, 0.07, 0.29, 0.025,
              ficha.acento, 0, 0.05, -0.36);
            pala.rotation.z = i * Math.PI / 3;
          }
          break;
        }

        case "cibernetico":
          caja(cabeza, 0.31, 0.17, 0.065, oscuro, 0.17, 0.04, 0.39);
          caja(cabeza, 0.24, 0.055, 0.02, ficha.acento, 0.17, 0.04, 0.43);
          caja(brazoI, 0.36, 0.39, 0.44, "#68718b", 0, -0.24, 0, true);
          caja(brazoI, 0.075, 0.29, 0.025, ficha.acento, 0, -0.24, 0.24);
          for (let i = 0; i < 3; i++) {
            caja(torso, 0.20, 0.035, 0.025,
              ficha.acento, -0.23, 0.40 + i * 0.09, 0.30);
          }
          break;

        // ANIMALES
        case "gato":
          orejasPunta(ficha.piel, "#e8b0a8");
          hocico(ficha.acento);
          for (const lado of [-1, 1]) {
            for (let i = 0; i < 2; i++) {
              const bigote = caja(cabeza, 0.20, 0.017, 0.02,
                ficha.pelo, lado * 0.28, -0.09 - i * 0.075, 0.475);
              bigote.rotation.z = lado * (i ? -0.16 : 0.16);
            }
          }
          cola = grupo(cuerpo, 0, 0.10, -0.30);
          caja(cola, 0.15, 0.15, 0.56, ficha.piel, 0, 0, -0.24);
          caja(cola, 0.15, 0.48, 0.15, ficha.piel, 0, 0.20, -0.48);
          caja(cola, 0.15, 0.13, 0.15, ficha.pelo, 0, 0.47, -0.48);
          break;

        case "conejo":
          for (const lado of [-1, 1]) {
            const oreja = grupo(cabeza, lado * 0.22, 0.31, 0);
            oreja.rotation.z = -lado * 0.12;
            caja(oreja, 0.18, 0.70, 0.19, ficha.piel, 0, 0.32, 0);
            caja(oreja, 0.09, 0.52, 0.025, ficha.acento, 0, 0.34, 0.11);
          }
          hocico("#fff3e7", 0.30, 0.16);
          caja(cabeza, 0.11, 0.075, 0.03, ficha.acento, 0, -0.04, 0.49);
          caja(cabeza, 0.09, 0.09, 0.025, "#ffffff", 0, -0.22, 0.47);
          cola = grupo(cuerpo, 0, 0.08, -0.34);
          esfera(cola, 0.18, ficha.piel, 0, 0, -0.10);
          break;

        case "oso":
          for (const lado of [-1, 1]) {
            esfera(cabeza, 0.17, ficha.piel, lado * 0.30, 0.38, 0);
            disco(cabeza, 0.095, 0.025, ficha.pelo, lado * 0.30, 0.38, 0.15);
          }
          hocico(ficha.acento, 0.43, 0.23);
          mochila("#ad8756");
          cola = grupo(cuerpo, 0, 0.08, -0.33);
          esfera(cola, 0.13, ficha.piel, 0, 0, -0.08);
          break;

        case "lobo":
          orejasPunta(ficha.piel, ficha.acento, 0.41);
          hocico(ficha.acento, 0.34, 0.30);
          for (const lado of [-1, 1]) {
            for (let i = 0; i < 3; i++) {
              const pelo = cono(torso, 0.14, 0.28, ficha.acento,
                lado * (0.27 + i * 0.095), 0.87 - i * 0.07, 0.06, 4);
              pelo.rotation.z = lado * 0.75;
            }
          }
          cola = grupo(cuerpo, 0, 0.13, -0.32);
          const colaLobo = caja(cola, 0.23, 0.24, 0.70,
            ficha.piel, 0, 0.02, -0.31);
          colaLobo.rotation.x = 0.30;
          caja(cola, 0.23, 0.23, 0.20, ficha.acento, 0, 0.11, -0.60);
          break;

        case "pinguino":
          // Las placas blancas quedan por detrás de los ojos originales.
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.27, 0.39, 0.022,
              "#f2eee4", lado * 0.18, -0.025, 0.338);
          }
          caja(cabeza, 0.24, 0.12, 0.20, ficha.acento, 0, -0.13, 0.43);
          caja(torso, 0.57, 0.61, 0.035, "#ece8dd", 0, 0.41, 0.29);
          caja(torso, 0.76, 0.14, 0.61, "#df8077", 0, 0.89, 0);
          caja(torso, 0.17, 0.40, 0.06, "#df8077", 0.25, 0.66, 0.33);
          for (const pierna of [piernaI, piernaD]) {
            caja(pierna, 0.42, 0.10, 0.35, ficha.acento, 0, -0.95, 0.30);
          }
          break;

        // MÍSTICOS
        case "dríade":
          for (const lado of [-1, 1]) {
            const rama = grupo(cabeza, lado * 0.28, 0.35, 0);
            rama.rotation.z = -lado * 0.30;
            caja(rama, 0.065, 0.52, 0.065, "#735d45", 0, 0.20, 0);
            hoja(rama, ficha.acento, lado * 0.10, 0.34, 0, lado * 0.7);
            hoja(rama, "#86bc88", -lado * 0.08, 0.20, 0.02, -lado * 0.6);
            hoja(torso, ficha.acento, lado * 0.46, 0.85, 0.12, lado * 0.8);
          }
          cristal(torso, 0.11, ficha.acento, 0, 0.56, 0.32);
          break;

        case "cristal":
          for (let i = -2; i <= 2; i++) {
            const c = cristal(cabeza, 0.12, ficha.acento,
              i * 0.145, 0.49 + (2 - Math.abs(i)) * 0.08, 0);
            c.scale.y = 1.8;
          }
          for (const lado of [-1, 1]) {
            const c = cristal(torso, 0.22, "#ba9ae4", lado * 0.53, 0.83, 0);
            c.scale.set(0.85, 1.3, 0.8);
          }
          cristal(torso, 0.15, ficha.acento, 0, 0.50, 0.34);
          break;

        case "oceano":
          for (const lado of [-1, 1]) {
            const aleta = pieza(
              cabeza, new T.ConeGeometry(0.23, 0.35, 3),
              ficha.acento, lado * 0.46, 0.02, 0
            );
            aleta.rotation.z = -lado * Math.PI / 2;
            aleta.scale.z = 0.35;
          }
          for (let i = -1; i <= 1; i++) {
            caja(cabeza, 0.07, 0.26 + (i === 0 ? 0.13 : 0), 0.07,
              ficha.acento, i * 0.23, 0.48, 0);
            esfera(cabeza, 0.065, crema,
              i * 0.23, i === 0 ? 0.70 : 0.64, 0);
          }
          disco(torso, 0.13, 0.04, "#e0f2df", 0, 0.58, 0.31);
          break;

        case "nocturno":
          for (const lado of [-1, 1]) {
            const ala = grupo(torso, lado * 0.36, 0.74, -0.34);
            for (let i = 0; i < 3; i++) {
              const membrana = caja(ala, 0.24, 0.60 - i * 0.12, 0.075,
                i % 2 ? ficha.acento : ficha.ropa,
                lado * (0.14 + i * 0.19), 0.07 - i * 0.09, 0);
              membrana.rotation.z = -lado * 0.45;
            }
            alas.push(ala);
          }
          cristal(torso, 0.11, ficha.acento, 0, 0.76, 0.30);
          break;

        case "solar":
          for (let i = -2; i <= 2; i++) {
            const rayo = cono(cabeza, 0.075, 0.30,
              ficha.acento, i * 0.17, 0.49, 0, 4);
            rayo.rotation.z = -i * 0.22;
          }
          caja(cabeza, 0.77, 0.08, 0.72, ficha.acento, 0, 0.33, 0, true);
          disco(torso, 0.19, 0.065, ficha.acento, 0, 0.52, 0.33, true);
          for (let i = 0; i < 8; i++) {
            const a = i * Math.PI / 4;
            const rayo = caja(torso, 0.035, 0.105, 0.035, ficha.acento,
              Math.sin(a) * 0.25, 0.52 + Math.cos(a) * 0.25, 0.33);
            rayo.rotation.z = -a;
          }
          break;

        // FUNNY
        case "arcade":
          // Pantalla frontal por delante de las gafas del estilo funny.
          caja(cabeza, 0.79, 0.46, 0.07, ficha.pantalon, 0, 0.02, 0.46);
          caja(cabeza, 0.68, 0.35, 0.025, "#233d43", 0, 0.02, 0.51);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.095, 0.095, 0.018,
              ficha.acento, lado * 0.17, 0.07, 0.534);
          }
          caja(cabeza, 0.20, 0.035, 0.018, ficha.acento, 0, -0.08, 0.534);
          for (let i = -1; i <= 1; i++) {
            disco(torso, 0.052, 0.04,
              ["#f3b57e", "#b7f397", "#ed9fbc"][i + 1],
              i * 0.19, 0.30, 0.34);
          }
          break;

        case "chef":
          caja(cabeza, 0.75, 0.17, 0.69, crema, 0, 0.43, 0);
          for (let i = -1; i <= 1; i++) {
            esfera(cabeza, 0.23, crema, i * 0.22, 0.64, 0);
          }
          caja(torso, 0.63, 0.69, 0.06, ficha.acento, 0, 0.36, 0.34);
          caja(torso, 0.33, 0.20, 0.03, "#c88b65", 0, 0.25, 0.39);
          for (const lado of [-1, 1]) {
            caja(torso, 0.065, 0.28, 0.04, ficha.acento, lado * 0.23, 0.78, 0.29);
          }
          break;

        case "fiesta":
          cono(cabeza, 0.32, 0.76, ficha.acento, 0, 0.70, 0, 8);
          esfera(cabeza, 0.10, "#ffe49b", 0, 1.10, 0);
          for (let i = 0; i < 3; i++) {
            esfera(cabeza, 0.045, ficha.ropa,
              (i % 2 ? -1 : 1) * 0.08,
              0.49 + i * 0.15, 0.22 - i * 0.055);
          }
          for (const lado of [-1, 1]) {
            const lazo = caja(torso, 0.24, 0.16, 0.09,
              ficha.acento, lado * 0.14, 0.81, 0.31);
            lazo.rotation.z = lado * 0.25;
          }
          esfera(torso, 0.06, "#ffe49b", 0, 0.81, 0.37);
          break;

        case "robot":
          for (const lado of [-1, 1]) {
            const tornillo = pieza(
              cabeza, new T.CylinderGeometry(0.12, 0.12, 0.18, 6),
              ficha.pelo, lado * 0.44, 0.02, 0, true
            );
            tornillo.rotation.z = Math.PI / 2;
          }
          caja(torso, 0.48, 0.38, 0.09, ficha.pelo, 0, 0.48, 0.34, true);
          for (let i = -1; i <= 1; i++) {
            caja(torso, 0.085, 0.22, 0.025,
              ficha.acento, i * 0.13, 0.48, 0.40);
          }
          caja(torso, 0.10, 0.055, 0.07, ficha.acento, 0, 0.70, 0.35);
          break;

        case "espacial": {
          const vidrio = new T.MeshStandardMaterial({
            color: "#c5f1f4",
            transparent: true,
            opacity: 0.15,
            roughness: 0.12,
            metalness: 0.05,
            depthWrite: false
          });
          // Se registra para que destruir() también libere este material.
          materiales.cascoEspacial = vidrio;

          const casco = new T.Mesh(
            new T.SphereGeometry(0.65, 24, 18), vidrio
          );
          casco.scale.set(0.94, 1, 0.95);
          casco.position.y = 0.13;
          cabeza.add(casco);

          const cuello = pieza(
            torso, new T.TorusGeometry(0.37, 0.06, 8, 24),
            ficha.acento, 0, 0.94, 0, true
          );
          cuello.rotation.x = Math.PI / 2;

          for (const lado of [-1, 1]) {
            pieza(torso, new T.CylinderGeometry(0.14, 0.14, 0.55, 12),
              ficha.pantalon, lado * 0.25, 0.48, -0.46, true);
            cono(torso, 0.10, 0.22, ficha.acento,
              lado * 0.25, 0.10, -0.46, 8).rotation.z = Math.PI;
          }
          break;
        }

                // ============================================================
        //  AMPLIACIÓN · HUMANOS
        // ============================================================
        case "skater": {
          caja(cabeza, 0.79, 0.17, 0.72, ficha.ropa, 0, 0.36, 0);
          caja(cabeza, 0.66, 0.06, 0.28, ficha.acento, 0, 0.29, -0.44);
          caja(cabeza, 0.22, 0.09, 0.05, ficha.acento, 0, 0.42, 0.34);
          const tabla = grupo(torso, 0, 0.46, -0.42);
          caja(tabla, 0.42, 0.92, 0.08, ficha.acento);
          caja(tabla, 0.30, 0.22, 0.10, ficha.pantalon, 0, -0.02, 0.01);
          for (const lado of [-1, 1]) {
            caja(tabla, 0.13, 0.13, 0.12, "#e8eaf0", lado * 0.14, -0.30, 0.05, true);
          }
          break;
        }

        case "medico":
          caja(cabeza, 0.80, 0.18, 0.73, "#f2f6f9", 0, 0.36, 0);
          caja(cabeza, 0.18, 0.06, 0.03, "#e2574c", 0, 0.36, 0.372);
          caja(cabeza, 0.06, 0.14, 0.03, "#e2574c", 0, 0.36, 0.372);
          caja(cabeza, 0.62, 0.30, 0.06, "#f2f6f9", 0, -0.15, 0.36);
          caja(torso, 0.95, 0.92, 0.05, "#f2f6f9", 0, 0.42, 0.27);
          caja(torso, 0.30, 0.46, 0.07, "#e2ecf2", 0, 0.42, 0.30);
          for (const lado of [-1, 1]) {
            caja(torso, 0.05, 0.60, 0.03, ficha.acento, lado * 0.20, 0.40, 0.31);
          }
          break;

        case "granjero":
          pieza(cabeza, new T.CylinderGeometry(0.76, 0.78, 0.06, 16), "#e0c37a", 0, 0.35, 0);
          pieza(cabeza, new T.CylinderGeometry(0.36, 0.40, 0.24, 12), "#e0c37a", 0, 0.48, 0);
          pieza(cabeza, new T.CylinderGeometry(0.42, 0.42, 0.05, 12), "#b8894a", 0, 0.40, 0);
          for (const lado of [-1, 1]) {
            caja(torso, 0.11, 0.64, 0.045, ficha.acento, lado * 0.24, 0.60, 0.28);
          }
          caja(torso, 0.60, 0.16, 0.05, ficha.acento, 0, 0.26, 0.28);
          caja(torso, 0.24, 0.22, 0.055, ficha.acento, 0, 0.08, 0.29);
          break;

        case "pintor": {
          pieza(cabeza, new T.SphereGeometry(0.42, 16, 10), ficha.acento, 0, 0.40, 0)
            .scale.set(1, 0.55, 1);
          esfera(cabeza, 0.07, ficha.acento, 0.10, 0.58, 0);
          const paleta = grupo(brazoI, -0.22, -0.54, 0.22);
          caja(paleta, 0.48, 0.38, 0.06, "#d9a86c");
          for (let i = 0; i < 4; i++) {
            esfera(paleta, 0.055, ["#e2574c", "#4a8fd4", "#e8c455", "#5cb87a"][i],
              -0.13 + (i % 2) * 0.26, -0.09 + Math.floor(i / 2) * 0.18, 0.05);
          }
          caja(brazoD, 0.05, 0.46, 0.05, "#8a6440", 0, -0.52, 0.16);
          caja(brazoD, 0.09, 0.16, 0.09, ficha.acento, 0, -0.30, 0.16);
          break;
        }

        case "detective":
          pieza(cabeza, new T.CylinderGeometry(0.70, 0.72, 0.06, 16), ficha.ropa, 0, 0.36, 0);
          pieza(cabeza, new T.CylinderGeometry(0.40, 0.46, 0.30, 16), ficha.ropa, 0, 0.53, 0);
          pieza(cabeza, new T.CylinderGeometry(0.465, 0.465, 0.05, 16), ficha.acento, 0, 0.42, 0);
          caja(torso, 0.98, 0.16, 0.56, ficha.ropa, 0, 0.86, 0);
          for (const lado of [-1, 1]) {
            caja(torso, 0.26, 0.38, 0.07, ficha.ropa, lado * 0.25, 0.72, 0.26);
          }
          caja(torso, 0.64, 0.84, 0.05, ficha.pantalon, 0, 0.36, -0.30);
          break;

        case "bombero":
          pieza(cabeza, new T.CylinderGeometry(0.44, 0.50, 0.30, 14), ficha.acento, 0, 0.44, 0);
          caja(cabeza, 0.80, 0.06, 0.78, ficha.acento, 0, 0.30, 0.06);
          caja(cabeza, 0.22, 0.12, 0.04, "#ffffff", 0, 0.46, 0.44);
          caja(torso, 0.96, 0.90, 0.06, ficha.ropa, 0, 0.43, 0.26);
          for (const y of [0.22, 0.60]) {
            caja(torso, 0.98, 0.10, 0.07, "#f2e06a", 0, y, 0.28);
          }
          caja(torso, 0.20, 0.32, 0.045, ficha.acento, 0, 0.42, 0.30);
          break;

        case "surfista": {
          const tabla = grupo(torso, 0, 0.50, -0.44);
          caja(tabla, 0.48, 1.24, 0.08, ficha.acento);
          caja(tabla, 0.12, 1.14, 0.10, ficha.ropa, 0, 0, 0.01);
          caja(cabeza, 0.70, 0.18, 0.06, "#2b3346", 0, 0.05, 0.38);
          caja(cabeza, 0.58, 0.11, 0.04, "#6fd2e0", 0, 0.05, 0.41);
          break;
        }

        case "cientifica":
          gafas("#bfe9ff", 0.10);
          caja(torso, 0.95, 0.94, 0.05, "#f4f8fb", 0, 0.42, 0.27);
          for (const brazo of [brazoI, brazoD]) {
            caja(brazo, 0.35, 0.47, 0.44, "#f4f8fb", 0, -0.20, 0);
          }
          caja(torso, 0.26, 0.36, 0.06, "#e4ecf2", 0, 0.40, 0.30);
          caja(brazoD, 0.09, 0.08, 0.09, "#c9d3da", 0, -0.52, 0.18);
          esfera(brazoD, 0.11, "#8de0d8", 0, -0.66, 0.18);
          break;

        case "dj":
          caja(cabeza, 0.86, 0.075, 0.20, ficha.acento, 0, 0.42, 0);
          caja(cabeza, 0.78, 0.05, 0.34, ficha.acento, 0, 0.40, 0.42);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.10, 0.34, 0.18, ficha.acento, lado * 0.42, 0.22, 0);
            caja(cabeza, 0.17, 0.26, 0.30, ficha.pantalon, lado * 0.45, 0.05, 0);
            disco(cabeza, 0.085, 0.03, ficha.acento, lado * 0.54, 0.05, 0, true);
          }
          caja(torso, 0.22, 0.26, 0.06, ficha.acento, 0, 0.30, 0.29);
          for (let i = 0; i < 3; i++) {
            esfera(torso, 0.045, ficha.acento, 0, 0.56 - i * 0.11, 0.31);
          }
          break;

        case "arqueologo": {
          pieza(cabeza, new T.CylinderGeometry(0.72, 0.74, 0.06, 16), ficha.acento, 0, 0.35, 0);
          pieza(cabeza, new T.CylinderGeometry(0.42, 0.46, 0.26, 16), ficha.acento, 0, 0.49, 0);
          caja(cabeza, 0.78, 0.05, 0.32, ficha.acento, 0, 0.32, 0.34);
          const pack = mochila("#7a6347");
          caja(pack, 0.34, 0.22, 0.22, "#c9a86a", 0, 0.44, 0.02);
          caja(torso, 0.10, 0.58, 0.05, "#8a6f4c", 0, 0.50, 0.30);
          cinturon();
          break;
        }

        // ============================================================
        //  AMPLIACIÓN · GUERREROS
        // ============================================================
        case "vikingo":
          pieza(cabeza, new T.SphereGeometry(0.46, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
            ficha.ropa, 0, 0.30, 0, true);
          caja(cabeza, 0.78, 0.08, 0.76, ficha.ropa, 0, 0.31, 0);
          for (const lado of [-1, 1]) {
            const cuerno = cono(cabeza, 0.12, 0.54, "#efe2c4", lado * 0.40, 0.46, 0, 6);
            cuerno.rotation.z = -lado * 0.95;
          }
          caja(torso, 0.98, 0.24, 0.62, "#e8dcc0", 0, 0.88, 0);
          break;

        case "espartano": {
          pieza(cabeza, new T.SphereGeometry(0.46, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
            ficha.acento, 0, 0.30, 0, true);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.11, 0.42, 0.34, ficha.acento, lado * 0.36, 0.02, 0.14, true);
          }
          caja(cabeza, 0.80, 0.16, 0.09, ficha.acento, 0, 0.22, 0.33, true);
          caja(cabeza, 0.80, 0.12, 0.09, ficha.acento, 0, -0.14, 0.33, true);
          caja(cabeza, 0.11, 0.34, 0.92, "#c8433c", 0, 0.58, -0.06);
          caja(torso, 1.00, 1.14, 0.08, "#b8403c", 0, 0.34, -0.34);
          caja(torso, 0.22, 0.26, 0.05, ficha.acento, 0, 0.58, 0.29, true);
          break;
        }

        case "gladiador":
          pieza(cabeza, new T.SphereGeometry(0.46, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
            ficha.ropa, 0, 0.30, 0, true);
          caja(cabeza, 0.80, 0.44, 0.10, ficha.ropa, 0, 0.04, 0.33, true);
          for (let i = 0; i < 4; i++) {
            caja(cabeza, 0.62, 0.035, 0.04, ficha.acento, 0, -0.12 + i * 0.10, 0.38, true);
          }
          caja(brazoI, 0.62, 0.36, 0.60, ficha.ropa, 0, -0.12, 0, true);
          caja(brazoI, 0.54, 0.10, 0.52, ficha.acento, 0, -0.30, 0, true);
          cinturon();
          break;

        case "ronin": {
          cono(cabeza, 0.74, 0.40, "#c8a86a", 0, 0.50, 0, 16);
          pieza(cabeza, new T.CylinderGeometry(0.34, 0.38, 0.16, 12), "#c8a86a", 0, 0.32, 0);
          caja(torso, 0.86, 0.90, 0.06, ficha.acento, 0, 0.40, 0.26);
          caja(torso, 0.22, 0.88, 0.05, ficha.pantalon, 0, 0.40, 0.30);
          cinturon();
          const katana = grupo(torso, -0.38, 0.40, -0.30);
          katana.rotation.z = 0.55;
          katana.rotation.x = 0.20;
          caja(katana, 0.055, 0.94, 0.055, "#3a3f52", 0, 0, 0);
          caja(katana, 0.10, 0.16, 0.10, ficha.acento, 0, 0.54, 0);
          break;
        }

        case "paladin":
          pieza(cabeza, new T.SphereGeometry(0.46, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
            ficha.acento, 0, 0.30, 0, true);
          caja(cabeza, 0.78, 0.20, 0.09, ficha.acento, 0, 0.20, 0.33, true);
          caja(cabeza, 0.78, 0.16, 0.09, ficha.acento, 0, -0.16, 0.33, true);
          caja(cabeza, 0.09, 0.26, 0.04, "#f4e6b0", 0, 0.20, 0.385, true);
          caja(cabeza, 0.42, 0.08, 0.04, "#f4e6b0", 0, 0.24, 0.385, true);
          for (const brazo of [brazoI, brazoD]) {
            caja(brazo, 0.52, 0.30, 0.50, ficha.acento, 0, 0.02, 0, true);
          }
          caja(torso, 1.02, 1.16, 0.08, ficha.acento, 0, 0.34, -0.34);
          caja(torso, 0.26, 0.30, 0.05, "#f4e6b0", 0, 0.60, 0.29, true);
          break;

        case "berserker":
          caja(cabeza, 0.80, 0.11, 0.73, ficha.pelo, 0, 0.31, 0);
          caja(cabeza, 0.09, 0.30, 0.05, ficha.acento, -0.25, 0.02, 0.36);
          caja(cabeza, 0.09, 0.30, 0.05, ficha.acento, 0.25, 0.02, 0.36);
          for (const lado of [-1, 1]) {
            caja(torso, 0.18, 0.46, 0.14, ficha.pelo, lado * 0.46, 0.72, 0);
          }
          const hacha = grupo(torso, 0.34, 0.50, -0.36);
          hacha.rotation.z = -0.42;
          caja(hacha, 0.07, 1.14, 0.07, "#8a6440", 0, 0, 0);
          caja(hacha, 0.44, 0.30, 0.10, "#b8cbd9", 0, 0.48, 0, true);
          break;

        case "lancera": {
          caja(cabeza, 0.80, 0.10, 0.74, ficha.acento, 0, 0.34, 0, true);
          for (const lado of [-1, 1]) {
            const ala = caja(cabeza, 0.36, 0.18, 0.05, ficha.acento,
              lado * 0.46, 0.34, 0.06, true);
            ala.rotation.z = -lado * 0.30;
          }
          const lanza = grupo(brazoD, 0.06, -0.58, 0.16);
          caja(lanza, 0.06, 2.30, 0.06, "#8a6440", 0, 0.60, 0);
          cono(lanza, 0.11, 0.36, "#dbe8f2", 0, 1.92, 0, 4);
          caja(lanza, 0.19, 0.09, 0.19, ficha.acento, 0, 1.66, 0, true);
          break;
        }

        case "cazador": {
          caja(cabeza, 0.88, 0.90, 0.26, ficha.ropa, 0, 0.02, -0.30);
          caja(cabeza, 0.88, 0.30, 0.82, ficha.ropa, 0, 0.42, 0);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.17, 0.80, 0.62, ficha.ropa, lado * 0.43, 0.04, -0.06);
          }
          caja(cabeza, 0.94, 0.14, 0.18, ficha.acento, 0, -0.40, 0.22);
          const arco = grupo(brazoI, -0.26, -0.42, 0.10);
          for (const lado of [-1, 1]) {
            const rama = caja(arco, 0.055, 0.68, 0.055, "#8a6440", 0, lado * 0.32, 0);
            rama.rotation.z = -lado * 0.28;
          }
          caja(arco, 0.025, 1.20, 0.025, "#e0d6bc", 0, 0, 0);
          const carcaj = grupo(torso, 0.32, 0.46, -0.40);
          carcaj.rotation.z = -0.28;
          pieza(carcaj, new T.CylinderGeometry(0.14, 0.14, 0.84, 10), "#6b5236", 0, 0, 0);
          for (let i = -1; i <= 1; i++) {
            caja(carcaj, 0.03, 0.46, 0.03, "#e0d6bc", i * 0.07, 0.56, 0);
            cono(carcaj, 0.05, 0.14, ficha.acento, i * 0.07, 0.86, 0, 4);
          }
          break;
        }

        case "draconario":
          pieza(cabeza, new T.SphereGeometry(0.46, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
            ficha.ropa, 0, 0.30, 0, true);
          for (let i = 0; i < 3; i++) {
            const pincho = cono(cabeza, 0.10 - i * 0.015, 0.30,
              ficha.acento, 0, 0.52 - i * 0.02, -0.06 + i * 0.16, 4);
            pincho.rotation.x = -0.45;
          }
          for (const brazo of [brazoI, brazoD]) {
            caja(brazo, 0.46, 0.36, 0.54, ficha.ropa, 0, -0.02, 0, true);
            for (let i = 0; i < 3; i++) {
              const escama = cono(brazo, 0.07, 0.20, ficha.acento, 0, 0.10, -0.18 + i * 0.14, 4);
              escama.rotation.x = -0.9;
            }
          }
          caja(torso, 0.10, 0.24, 0.06, ficha.acento, 0, 0.50, 0.30);
          break;

        case "mercenaria":
          caja(cabeza, 0.20, 0.16, 0.05, "#2b3040", 0.17, 0.05, 0.37);
          caja(cabeza, 0.04, 0.30, 0.03, "#2b3040", 0.17, 0.22, 0.36);
          caja(torso, 0.16, 0.92, 0.06, ficha.pantalon, -0.14, 0.44, 0.27);
          for (let i = 0; i < 3; i++) {
            caja(torso, 0.07, 0.14, 0.04, ficha.acento, -0.14, 0.60 - i * 0.20, 0.31);
          }
          caja(torso, 0.26, 0.30, 0.06, ficha.acento, 0.22, 0.62, 0.29);
          const ballesta = grupo(brazoI, -0.22, -0.42, 0.20);
          caja(ballesta, 0.09, 0.62, 0.09, "#5a4632", 0, 0, 0);
          caja(ballesta, 0.62, 0.07, 0.07, "#8a9aab", 0, 0.28, 0, true);
          break;

        // ============================================================
        //  AMPLIACIÓN · MAGOS
        // ============================================================
        case "tormenta": {
          for (const lado of [-1, 1]) {
            const rayo = caja(torso, 0.07, 0.38, 0.05, "#ffe45e", lado * 0.24, 0.62, 0.29);
            rayo.rotation.z = lado * 0.40;
          }
          caja(torso, 0.62, 0.06, 0.05, "#ffe45e", 0, 0.30, 0.29);
          caja(torso, 0.26, 0.28, 0.06, "#8f98b5", 0, 0.50, 0.29);
          const baston = grupo(brazoD, 0.05, -0.58, 0.18);
          caja(baston, 0.055, 1.36, 0.055, "#7a6248", 0, 0.30, 0);
          pieza(baston, new T.OctahedronGeometry(0.16), "#ffe45e", 0, 1.06, 0, false, true);
          break;
        }

        case "naturaleza": {
          for (let i = 0; i < 7; i++) {
            const a = (i / 7) * Math.PI * 2;
            hoja(torso, i % 2 ? ficha.acento : "#6fae5c",
              Math.sin(a) * 0.42, 0.88 + Math.cos(a) * 0.12, Math.cos(a) * 0.30, -a);
          }
          caja(torso, 0.20, 0.30, 0.06, "#4f7c48", 0, 0.56, 0.29);
          const rama = grupo(brazoD, 0.05, -0.58, 0.18);
          caja(rama, 0.06, 1.32, 0.06, "#7a5a38", 0, 0.28, 0);
          hoja(rama, "#6fae5c", 0.16, 0.84, 0, 0.80);
          hoja(rama, ficha.acento, -0.16, 1.00, 0, -0.80);
          break;
        }

        case "sangre":
          caja(torso, 0.96, 1.12, 0.08, "#8e1f2e", 0, 0.34, -0.36);
          caja(torso, 0.88, 0.26, 0.12, "#5c1220", 0, 0.92, -0.22);
          for (const x of [-0.17, 0.17]) {
            cono(cabeza, 0.05, 0.16, "#f4f0e6", x, -0.16, 0.36, 4).rotation.z = Math.PI;
          }
          caja(torso, 0.24, 0.28, 0.06, ficha.acento, 0, 0.52, 0.30);
          esfera(torso, 0.075, "#c22b3c", 0, 0.52, 0.35);
          break;

        case "estrellas":
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            const estrella = pieza(torso, new T.OctahedronGeometry(0.085), ficha.acento,
              Math.sin(a) * 0.60, 0.52 + Math.cos(a) * 0.44, 0.16);
            estrella.scale.y = 1.5;
          }
          caja(torso, 0.26, 0.30, 0.06, "#3f3f78", 0, 0.50, 0.29);
          caja(torso, 0.14, 0.18, 0.04, ficha.acento, 0, 0.50, 0.33);
          break;

        case "runas":
          for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2 + 0.4;
            const piedra = pieza(torso, new T.BoxGeometry(0.17, 0.22, 0.06), "#6f6a7d",
              Math.sin(a) * 0.60, 0.52 + Math.cos(a) * 0.42, 0.16);
            piedra.rotation.z = a;
            pieza(piedra, new T.BoxGeometry(0.05, 0.12, 0.03),
              ficha.acento, 0, 0, 0.04, false, true);
          }
          caja(torso, 0.28, 0.32, 0.06, "#4a4658", 0, 0.50, 0.29);
          pieza(torso, new T.BoxGeometry(0.16, 0.20, 0.04),
            ficha.acento, 0, 0.50, 0.33, false, true);
          break;

        case "ilusion":
          caja(cabeza, 0.78, 0.16, 0.08, ficha.acento, 0, 0.06, 0.34);
          for (const lado of [-1, 1]) {
            const carta = caja(torso, 0.26, 0.36, 0.03, "#f4f0e6",
              lado * 0.50, 0.76, 0.20);
            carta.rotation.z = lado * 0.38;
            caja(carta, 0.11, 0.11, 0.03, lado < 0 ? "#d2453f" : "#2f2f38", 0, 0, 0.02);
          }
          for (let i = -1; i <= 1; i++) {
            esfera(torso, 0.06, ficha.acento, i * 0.22, 0.30, 0.32);
          }
          caja(torso, 0.24, 0.28, 0.06, "#6a4a94", 0, 0.52, 0.29);
          break;

        case "nigromante":
          esfera(cabeza, 0.19, "#e8e4d6", 0, -0.13, 0.33);
          caja(cabeza, 0.13, 0.085, 0.04, "#2b3040", -0.06, -0.13, 0.50);
          caja(cabeza, 0.13, 0.085, 0.04, "#2b3040", 0.06, -0.13, 0.50);
          caja(torso, 0.98, 0.34, 0.62, "#2f3245", 0, 0.92, 0);
          for (let i = 0; i < 5; i++) {
            const hueso = caja(torso, 0.09, 0.26, 0.09, "#d8d4c4",
              -0.44 + i * 0.22, 0.80, 0.24);
            hueso.rotation.z = (i % 2 ? 1 : -1) * 0.25;
          }
          esfera(torso, 0.10, ficha.acento, 0, 0.58, 0.31);
          caja(torso, 0.30, 0.34, 0.06, "#232538", 0, 0.48, 0.29);
          break;

        case "viento": {
          for (const lado of [-1, 1]) {
            const pluma = caja(torso, 0.11, 0.66, 0.11, ficha.acento,
              lado * 0.50, 0.74, -0.12);
            pluma.rotation.z = -lado * 0.35;
          }
          caja(torso, 0.96, 0.07, 0.56, ficha.acento, 0, 0.30, 0);
          for (let i = 0; i < 3; i++) {
            const tira = caja(torso, 0.94, 0.07, 0.06, "#dfe9f2",
              0, 0.54 + i * 0.15, -0.38);
            tira.rotation.z = (i % 2 ? 1 : -1) * 0.10;
          }
          caja(torso, 0.26, 0.28, 0.06, "#5f8798", 0, 0.52, 0.29);
          break;
        }

        case "arena": {
          for (let i = 0; i < 10; i++) {
            const a = (i / 10) * Math.PI * 2;
            esfera(torso, 0.055, i % 2 ? ficha.acento : "#d9a86c",
              Math.sin(a) * 0.70, 0.30 + (i % 3) * 0.26, Math.cos(a) * 0.50);
          }
          const farol = grupo(brazoI, -0.14, -0.58, 0.20);
          caja(farol, 0.24, 0.32, 0.24, "#8a6440");
          pieza(farol, new T.BoxGeometry(0.17, 0.19, 0.17),
            "#ffe9a8", 0, 0, 0.03, false, true);
          caja(torso, 0.26, 0.30, 0.06, "#a87a44", 0, 0.52, 0.29);
          break;
        }

        case "chaman":
          caja(cabeza, 0.78, 0.34, 0.09, "#e8dcc0", 0, 0.00, 0.33);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.11, 0.11, 0.05, "#2b3040", lado * 0.17, 0.04, 0.39);
          }
          caja(cabeza, 0.26, 0.08, 0.05, "#2b3040", 0, -0.11, 0.39);
          for (let i = 0; i < 5; i++) {
            const pluma = caja(cabeza, 0.055, 0.60 - Math.abs(i - 2) * 0.10, 0.055,
              i % 2 ? ficha.acento : "#d2453f", -0.42 + i * 0.21, 0.42, -0.48);
            pluma.rotation.z = (i - 2) * 0.14;
          }
          caja(torso, 0.92, 0.82, 0.06, "#8a6f4c", 0, 0.40, 0.27);
          for (let i = -1; i <= 1; i++) {
            caja(torso, 0.16, 0.16, 0.05, ficha.acento, i * 0.26, 0.62, 0.30);
          }
          break;

        // ============================================================
        //  AMPLIACIÓN · ANIME
        // ============================================================
        case "ninja":
          caja(cabeza, 0.80, 0.32, 0.09, ficha.ropa, 0, -0.17, 0.33);
          caja(cabeza, 0.92, 0.10, 0.82, ficha.acento, 0, 0.21, 0);
          caja(cabeza, 0.90, 0.06, 0.80, ficha.pantalon, 0, 0.26, 0);
          for (const lado of [-1, 1]) {
            const cinta = caja(cabeza, 0.10, 0.48, 0.05, ficha.acento,
              lado * 0.34, -0.06, -0.44);
            cinta.rotation.z = -lado * 0.35;
          }
          caja(torso, 0.20, 0.92, 0.06, "#2b3040", -0.14, 0.44, 0.28);
          caja(torso, 0.92, 0.16, 0.58, "#2b3040", 0, 0.88, 0);
          break;

        case "maga_anime": {
          pieza(cabeza, new T.CylinderGeometry(0.56, 0.56, 0.05, 14), ficha.acento, 0, 0.34, 0);
          cono(cabeza, 0.34, 0.72, ficha.acento, 0, 0.72, 0, 10);
          esfera(cabeza, 0.08, "#ffe49b", 0, 1.12, 0);
          caja(torso, 0.24, 0.28, 0.06, ficha.acento, 0, 0.52, 0.30);
          const baston = grupo(brazoD, 0.05, -0.58, 0.18);
          caja(baston, 0.05, 1.24, 0.05, "#7a6248", 0, 0.30, 0);
          pieza(baston, new T.OctahedronGeometry(0.14), ficha.acento, 0, 0.98, 0, false, true);
          break;
        }

        case "idol": {
          for (const lado of [-1, 1]) {
            const coleta = grupo(cabeza, lado * 0.44, 0.14, -0.12);
            esfera(coleta, 0.20, ficha.pelo, lado * 0.10, 0.02, 0);
            esfera(coleta, 0.16, ficha.pelo, lado * 0.20, -0.28, -0.04);
            caja(coleta, 0.22, 0.08, 0.08, ficha.acento, lado * 0.18, -0.44, -0.06);
          }
          caja(torso, 0.92, 0.16, 0.58, ficha.acento, 0, 0.88, 0);
          caja(torso, 0.24, 0.24, 0.06, "#ffe49b", 0, 0.50, 0.30);
          const micro = grupo(brazoD, 0.02, -0.58, 0.20);
          caja(micro, 0.07, 0.30, 0.07, "#2b3040", 0, 0.06, 0);
          esfera(micro, 0.11, "#2b3040", 0, 0.28, 0);
          esfera(micro, 0.09, "#9aa2b5", 0, 0.28, 0.07);
          break;
        }

        case "mecha":
          for (const brazo of [brazoI, brazoD]) {
            caja(brazo, 0.58, 0.36, 0.58, ficha.ropa, 0, 0.02, 0, true);
            caja(brazo, 0.46, 0.11, 0.46, ficha.acento, 0, -0.17, 0, true);
          }
          pieza(cabeza, new T.BoxGeometry(0.88, 0.34, 0.10), ficha.acento, 0, 0.06, 0.32);
          pieza(cabeza, new T.BoxGeometry(0.68, 0.12, 0.04),
            "#8de8ff", 0, 0.06, 0.38, false, true);
          pieza(torso, new T.BoxGeometry(0.34, 0.44, 0.10), ficha.acento, 0, 0.52, 0.28, true);
          pieza(torso, new T.BoxGeometry(0.22, 0.26, 0.08),
            "#8de8ff", 0, 0.52, 0.34, false, true);
          caja(cabeza, 0.08, 0.46, 0.08, "#5a6478", 0, 0.60, -0.30);
          break;

        case "kendo": {
          caja(cabeza, 0.88, 0.62, 0.10, ficha.acento, 0, 0.06, 0.31);
          for (let i = 0; i < 6; i++) {
            caja(cabeza, 0.82, 0.03, 0.05, "#6b6f7d", 0, -0.20 + i * 0.10, 0.365);
          }
          caja(torso, 0.92, 0.92, 0.06, ficha.ropa, 0, 0.42, 0.26);
          caja(torso, 0.72, 0.22, 0.05, "#2b3040", 0, 0.13, 0.30);
          const shinai = grupo(brazoD, 0.04, -0.58, 0.18);
          caja(shinai, 0.06, 1.32, 0.06, "#d8c48a", 0, 0.36, 0);
          caja(shinai, 0.08, 0.24, 0.08, "#2b3040", 0, -0.36, 0);
          break;
        }

        case "chef_anime": {
          caja(cabeza, 0.82, 0.11, 0.74, "#f4f0e6", 0, 0.38, 0);
          pieza(cabeza, new T.CylinderGeometry(0.44, 0.46, 0.34, 14), "#f4f0e6", 0, 0.58, 0);
          caja(torso, 0.70, 0.78, 0.06, "#f4f0e6", 0, 0.36, 0.34);
          caja(torso, 0.24, 0.20, 0.05, "#e2574c", 0, 0.72, 0.37);
          const cuchillo = grupo(brazoD, 0.04, -0.58, 0.18);
          caja(cuchillo, 0.05, 0.28, 0.05, "#2b3040", 0, -0.06, 0);
          pieza(cuchillo, new T.BoxGeometry(0.05, 0.68, 0.14), "#dfe8ef", 0, 0.34, 0, true);
          break;
        }

        case "arquera": {
          const arco = grupo(brazoI, -0.30, -0.44, 0.06);
          for (const lado of [-1, 1]) {
            const rama = caja(arco, 0.06, 0.74, 0.06, "#7a5f9c", 0, lado * 0.34, 0);
            rama.rotation.z = -lado * 0.26;
          }
          caja(arco, 0.025, 1.28, 0.025, "#f0e6c8", 0, 0, 0);
          const carcaj = grupo(torso, -0.34, 0.48, -0.40);
          carcaj.rotation.z = 0.26;
          pieza(carcaj, new T.CylinderGeometry(0.13, 0.13, 0.82, 10), "#5f4d7a", 0, 0, 0);
          for (let i = -1; i <= 1; i++) {
            caja(carcaj, 0.03, 0.44, 0.03, "#f0e6c8", i * 0.06, 0.52, 0);
            cono(carcaj, 0.05, 0.14, ficha.acento, i * 0.06, 0.80, 0, 4);
          }
          caja(torso, 0.16, 0.92, 0.06, ficha.acento, 0.16, 0.44, 0.28);
          break;
        }

        case "estudiante": {
          mochila("#4f5f8a");
          for (const lado of [-1, 1]) {
            const solapa = caja(torso, 0.32, 0.26, 0.05, "#f4f0e6",
              lado * 0.17, 0.72, 0.28);
            solapa.rotation.z = lado * 0.35;
          }
          caja(torso, 0.13, 0.52, 0.05, ficha.acento, 0, 0.54, 0.28);
          caja(torso, 0.17, 0.17, 0.06, ficha.acento, 0, 0.80, 0.29);
          caja(torso, 0.90, 0.62, 0.05, "#4f5f8a", 0, 0.30, 0.26);
          break;
        }

        case "vampiro_anime":
          caja(torso, 0.98, 1.14, 0.08, "#5a1e30", 0, 0.34, -0.36);
          caja(torso, 0.88, 0.28, 0.13, "#3a1420", 0, 0.94, -0.24);
          for (const x of [-0.17, 0.17]) {
            cono(cabeza, 0.05, 0.16, "#f4f0e6", x, -0.16, 0.36, 4).rotation.z = Math.PI;
          }
          caja(torso, 0.24, 0.28, 0.06, ficha.acento, 0, 0.50, 0.30);
          break;

        case "gamer":
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.15, 0.36, 0.32, ficha.acento, lado * 0.44, 0.10, 0);
            disco(cabeza, 0.10, 0.04, "#8de8ff", lado * 0.53, 0.10, 0, true);
          }
          pieza(cabeza, new T.BoxGeometry(0.64, 0.12, 0.06), "#2b3040", 0, 0.18, 0.37);
          pieza(cabeza, new T.BoxGeometry(0.52, 0.06, 0.04),
            "#8de8ff", 0, 0.18, 0.40, false, true);
          caja(torso, 0.32, 0.32, 0.06, ficha.acento, 0, 0.46, 0.30);
          for (let i = 0; i < 3; i++) {
            esfera(torso, 0.045, ["#f3b57e", "#b7f397", "#ed9fbc"][i],
              -0.10 + i * 0.10, 0.46, 0.34);
          }
          break;

        // ============================================================
        //  AMPLIACIÓN · ANIMALES
        // ============================================================
        case "erizo":
          for (let fila = 0; fila < 3; fila++) {
            for (let col = -2; col <= 2; col++) {
              const pincho = cono(torso, 0.09, 0.36,
                fila === 1 ? ficha.pelo : ficha.pantalon,
                col * 0.19, 0.24 + fila * 0.26, -0.36);
              pincho.rotation.x = -0.75;
            }
          }
          hocico("#f0d6bb", 0.30, 0.20);
          break;

        case "mapache":
          caja(cabeza, 0.84, 0.30, 0.05, "#3a3f52", 0, 0.04, 0.35);
          for (const x of [-0.17, 0.17]) {
            caja(cabeza, 0.075, 0.115, 0.03, "#202839", x, 0.04, 0.375);
            caja(cabeza, 0.026, 0.032, 0.02, "#ffffff", x - 0.014, 0.068, 0.392);
          }
          hocico("#f4f0e6", 0.34, 0.22);
          for (const lado of [-1, 1]) {
            cono(cabeza, 0.19, 0.32, ficha.piel, lado * 0.28, 0.42, 0, 4);
            cono(cabeza, 0.11, 0.20, "#3a3f52", lado * 0.28, 0.40, 0.07, 3);
          }
          cola = grupo(cuerpo, 0, 0.10, -0.30);
          caja(cola, 0.24, 0.24, 0.76, ficha.piel, 0, 0.04, -0.32);
          for (let i = 0; i < 3; i++) {
            caja(cola, 0.25, 0.25, 0.10, "#3a3f52", 0, 0.04, -0.12 - i * 0.20);
          }
          break;

        case "ciervo":
          for (const lado of [-1, 1]) {
            const oreja = grupo(cabeza, lado * 0.24, 0.32, -0.02);
            oreja.rotation.z = -lado * 0.35;
            caja(oreja, 0.18, 0.42, 0.14, ficha.piel, 0, 0.18, 0);
            caja(oreja, 0.10, 0.30, 0.03, ficha.acento, 0, 0.18, 0.08);
            const asta = grupo(cabeza, lado * 0.34, 0.38, 0);
            caja(asta, 0.07, 0.44, 0.07, "#a8825a", lado * 0.06, 0.22, 0);
            const rama1 = caja(asta, 0.06, 0.30, 0.06, "#a8825a", lado * 0.16, 0.34, 0);
            rama1.rotation.z = -lado * 0.50;
            const rama2 = caja(asta, 0.06, 0.30, 0.06, "#a8825a", lado * 0.10, 0.52, 0);
            rama2.rotation.z = -lado * 0.90;
          }
          hocico("#f0e0c8", 0.32, 0.24);
          cola = grupo(cuerpo, 0, 0.10, -0.32);
          esfera(cola, 0.13, ficha.acento, 0, 0, -0.10);
          break;

        case "cabra":
          for (const lado of [-1, 1]) {
            const cuerno = grupo(cabeza, lado * 0.26, 0.38, -0.06);
            cuerno.rotation.z = -lado * 0.25;
            caja(cuerno, 0.09, 0.34, 0.09, "#c9b48a", 0, 0.14, 0);
            const curva = caja(cuerno, 0.09, 0.30, 0.09, "#c9b48a", lado * 0.08, 0.42, -0.06);
            curva.rotation.z = -lado * 0.90;
          }
          hocico("#e8dfcc", 0.34, 0.22);
          caja(cabeza, 0.26, 0.26, 0.10, "#e8dfcc", 0, -0.36, 0.30);
          for (const lado of [-1, 1]) {
            caja(cabeza, 0.16, 0.30, 0.10, ficha.piel, lado * 0.40, 0.02, 0.14);
          }
          cola = grupo(cuerpo, 0, 0.14, -0.30);
          caja(cola, 0.13, 0.24, 0.13, ficha.piel, 0, 0.08, -0.06);
          break;

        case "tortuga":
          pieza(torso, new T.SphereGeometry(0.58, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
            ficha.ropa, 0, 0.34, -0.12).scale.set(1, 0.85, 0.78);
          for (let i = 0; i < 5; i++) {
            esfera(torso, 0.11, ficha.pantalon,
              -0.30 + (i % 3) * 0.30, 0.58 + Math.floor(i / 3) * 0.20, -0.16);
          }
          caja(cabeza, 0.30, 0.16, 0.14, ficha.acento, 0, 0.30, 0.24);
          hocico("#d9e8c0", 0.34, 0.22);
          break;

        case "buho":
          for (const lado of [-1, 1]) {
            cono(cabeza, 0.15, 0.38, ficha.pelo, lado * 0.24, 0.50, -0.02, 4);
            esfera(cabeza, 0.22, ficha.acento, lado * 0.18, 0.05, 0.29);
            esfera(cabeza, 0.155, "#f8f6ee", lado * 0.18, 0.05, 0.34);
            esfera(cabeza, 0.085, "#202839", lado * 0.18, 0.05, 0.43);
          }
          caja(cabeza, 0.13, 0.17, 0.10, "#e0a24a", 0, -0.11, 0.40);
          caja(torso, 0.72, 0.62, 0.05, ficha.acento, 0, 0.40, 0.27);
          break;

        case "tucan":
          caja(cabeza, 0.86, 0.34, 0.04, ficha.piel, 0, 0.02, 0.355);
          caja(cabeza, 0.36, 0.30, 0.86, ficha.acento, 0, -0.03, 0.60);
          caja(cabeza, 0.30, 0.20, 0.72, "#f0b040", 0, -0.07, 0.62);
          caja(cabeza, 0.22, 0.06, 0.80, "#2b3040", 0, -0.16, 0.60);
          caja(cabeza, 0.20, 0.13, 0.04, "#f4f0e6", 0, 0.09, 0.365);
          caja(torso, 0.60, 0.58, 0.05, "#f4f0e6", 0, 0.40, 0.27);
          cola = grupo(cuerpo, 0, 0.10, -0.30);
          caja(cola, 0.22, 0.22, 0.66, ficha.acento, 0, 0.02, -0.28);
          break;

        case "koala":
          for (const lado of [-1, 1]) {
            pieza(cabeza, new T.SphereGeometry(0.26, 14, 10), ficha.pelo, lado * 0.34, 0.36, 0)
              .scale.set(1, 1, 0.55);
            pieza(cabeza, new T.SphereGeometry(0.16, 12, 9), ficha.acento, lado * 0.34, 0.36, 0.07)
              .scale.set(1, 1, 0.5);
          }
          caja(cabeza, 0.42, 0.26, 0.20, ficha.piel, 0, -0.14, 0.36);
          caja(cabeza, 0.19, 0.14, 0.06, "#3a3f52", 0, -0.06, 0.50);
          break;

        case "lince":
          for (const lado of [-1, 1]) {
            cono(cabeza, 0.19, 0.34, ficha.piel, lado * 0.28, 0.42, 0, 4);
            cono(cabeza, 0.10, 0.30, "#3a3f52", lado * 0.28, 0.60, 0, 4);
            caja(cabeza, 0.13, 0.34, 0.14, ficha.pelo, lado * 0.34, -0.12, 0.16);
          }
          hocico("#f0e2c0", 0.34, 0.22);
          caja(torso, 0.86, 0.62, 0.05, ficha.acento, 0, 0.42, 0.27);
          for (let i = 0; i < 4; i++) {
            esfera(torso, 0.05, ficha.pelo, -0.24 + i * 0.16, 0.60, 0.30);
          }
          cola = grupo(cuerpo, 0, 0.10, -0.30);
          caja(cola, 0.20, 0.20, 0.62, ficha.piel, 0, 0.04, -0.26);
          caja(cola, 0.20, 0.20, 0.14, "#3a3f52", 0, 0.04, -0.58);
          break;

        case "dragoncillo":
          for (let i = 0; i < 4; i++) {
            const placa = cono(torso, 0.11 - i * 0.012, 0.26, ficha.acento,
              0, 0.30 + i * 0.16, -0.32, 4);
            placa.rotation.x = -0.40;
          }
          for (const lado of [-1, 1]) {
            const cuerno = cono(cabeza, 0.09, 0.30, ficha.acento, lado * 0.24, 0.46, -0.06, 4);
            cuerno.rotation.z = -lado * 0.40;
            const ala = grupo(torso, lado * 0.40, 0.72, -0.30);
            caja(ala, 0.30, 0.44, 0.06, ficha.acento, lado * 0.16, -0.04, 0);
            caja(ala, 0.24, 0.34, 0.05, ficha.piel, lado * 0.34, -0.14, 0);
            alas.push(ala);
          }
          hocico(ficha.piel, 0.34, 0.22);
          cola = grupo(cuerpo, 0, 0.10, -0.30);
          caja(cola, 0.20, 0.20, 0.66, ficha.piel, 0, 0.02, -0.28);
          cono(cola, 0.12, 0.26, ficha.acento, 0, 0.02, -0.68, 4).rotation.x = -Math.PI / 2;
          break;

        // ============================================================
        //  AMPLIACIÓN · MÍSTICOS
        // ============================================================
        case "fuego_espiritu":
          for (const lado of [-1, 1]) {
            const llama = pieza(torso, new T.OctahedronGeometry(0.17),
              ficha.acento, lado * 0.52, 0.92, 0);
            llama.scale.y = 1.9;
            const llama2 = pieza(cabeza, new T.OctahedronGeometry(0.11),
              "#ffe49b", lado * 0.20, 0.52, 0.30);
            llama2.scale.y = 1.7;
          }
          caja(torso, 0.90, 0.86, 0.07, "#c2553f", 0, 0.40, -0.34);
          caja(torso, 0.30, 0.34, 0.06, "#6e2f2a", 0, 0.50, 0.29);
          pieza(torso, new T.OctahedronGeometry(0.10), "#ffd166", 0, 0.50, 0.34, false, true);
          break;

        case "hielo_espiritu":
          for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2;
            const c = cristal(torso, 0.13, ficha.acento,
              Math.sin(a) * 0.58, 0.52 + Math.cos(a) * 0.40, 0.14);
            c.scale.y = 1.7;
          }
          for (const lado of [-1, 1]) {
            const c = cristal(torso, 0.20, "#9ce8ff", lado * 0.52, 0.86, 0);
            c.scale.set(0.85, 1.4, 0.8);
          }
          caja(torso, 0.86, 0.84, 0.06, "#3a5a86", 0, 0.38, -0.34);
          cristal(cabeza, 0.12, ficha.acento, 0, 1.34, 0);
          break;

        case "sombra":
          caja(cabeza, 0.90, 0.88, 0.86, "#2b2838", 0, 0.00, -0.04);
          for (const x of [-0.17, 0.17]) {
            pieza(cabeza, new T.BoxGeometry(0.09, 0.13, 0.04),
              ficha.acento, x, 0.04, 0.42, false, true);
          }
          caja(torso, 1.04, 1.10, 0.08, "#1e1c2a", 0, 0.34, -0.36);
          for (let i = -2; i <= 2; i++) {
            const jiron = caja(torso, 0.20, 0.34, 0.60, "#2b2838", i * 0.22, -0.14, 0);
            jiron.rotation.x = 0.10;
          }
          break;

        case "fada": {
          for (const lado of [-1, 1]) {
            const ala = grupo(torso, lado * 0.30, 0.74, -0.34);
            for (let i = 0; i < 3; i++) {
              const lobulo = pieza(ala, new T.SphereGeometry(0.24 - i * 0.04, 12, 9),
                i % 2 ? ficha.acento : "#c9a8ff",
                lado * (0.16 + i * 0.20), 0.10 - i * 0.16, 0);
              lobulo.scale.set(0.55, 1.25, 0.18);
              lobulo.rotation.z = -lado * 0.45;
            }
            alas.push(ala);
          }
          for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            esfera(torso, 0.045, ficha.acento,
              Math.sin(a) * 0.62, 0.46 + Math.cos(a) * 0.46, 0.14);
          }
          break;
        }

        case "titan":
          for (const brazo of [brazoI, brazoD]) {
            pieza(brazo, new T.BoxGeometry(0.60, 0.40, 0.60), "#6f6a56", 0, 0.04, 0, false);
            pieza(brazo, new T.BoxGeometry(0.52, 0.14, 0.52), ficha.acento, 0, -0.12, 0);
          }
          for (let i = 0; i < 4; i++) {
            caja(torso, 0.36, 0.16, 0.30, "#6f6a56",
              -0.24 + (i % 2) * 0.48, 0.24 + Math.floor(i / 2) * 0.34, 0.28);
          }
          hoja(torso, ficha.acento, -0.44, 0.86, 0.20, -0.6);
          hoja(torso, "#9cd47a", 0.44, 0.78, -0.16, 0.6);
          break;

        case "oraculo":
          for (let i = 0; i < 3; i++) {
            const velo = caja(cabeza, 0.94, 0.06, 0.06, ficha.acento,
              (i - 1) * 0.16, 0.44, 0.36 - i * 0.03);
            velo.rotation.z = (i - 1) * 0.22;
          }
          pieza(cabeza, new T.OctahedronGeometry(0.09),
            ficha.acento, 0, 0.24, 0.40, false, true);
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            pieza(torso, new T.TorusGeometry(0.15, 0.02, 6, 16),
              ficha.acento, Math.sin(a) * 0.50, 0.54 + Math.cos(a) * 0.36, 0.16)
              .rotation.x = Math.PI / 2;
          }
          caja(torso, 0.90, 0.92, 0.07, "#4a4470", 0, 0.40, -0.34);
          break;

        case "fenix":
          for (const lado of [-1, 1]) {
            const ala = grupo(torso, lado * 0.36, 0.78, -0.32);
            for (let i = 0; i < 4; i++) {
              const pluma = pieza(ala, new T.BoxGeometry(0.20, 0.78 - i * 0.10, 0.09),
                i % 2 ? ficha.acento : "#c9542f",
                lado * (0.16 + i * 0.17), 0.04 - i * 0.10, 0);
              pluma.rotation.z = -lado * 0.42;
            }
            alas.push(ala);
          }
          for (let i = 0; i < 5; i++) {
            const mechon = pieza(cabeza, new T.OctahedronGeometry(0.10),
              i % 2 ? ficha.acento : "#ffbe55",
              (i - 2) * 0.15, 0.50, -0.06);
            mechon.scale.y = 1.8;
          }
          caja(torso, 0.94, 0.96, 0.07, "#6e2f22", 0, 0.38, -0.34);
          break;

        case "golem":
          for (let i = 0; i < 6; i++) {
            const placa = pieza(torso, new T.BoxGeometry(0.32, 0.28, 0.12),
              i % 2 ? "#6a6560" : "#7a7568",
              -0.30 + (i % 3) * 0.30, 0.28 + Math.floor(i / 3) * 0.36, 0.26);
            placa.rotation.z = (i - 2.5) * 0.06;
          }
          for (const brazo of [brazoI, brazoD]) {
            pieza(brazo, new T.BoxGeometry(0.50, 0.32, 0.52), "#6a6560", 0, 0.02, 0);
            pieza(brazo, new T.BoxGeometry(0.34, 0.14, 0.34), "#4a4642", 0, -0.20, 0);
          }
          pieza(torso, new T.BoxGeometry(0.34, 0.30, 0.10),
            ficha.acento, 0, 0.46, 0.30, false, true);
          break;

        case "sirena":
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            caja(cabeza, 0.09, 0.30, 0.09, ficha.acento,
              Math.sin(a) * 0.32, 0.44, Math.cos(a) * 0.30);
            esfera(cabeza, 0.07, crema,
              Math.sin(a) * 0.32, 0.61, Math.cos(a) * 0.30);
          }
          for (let i = 0; i < 5; i++) {
            caja(torso, 0.44 - i * 0.06, 0.14, 0.44 - i * 0.06,
              ficha.acento, 0, 0.20 + i * 0.15, -0.20);
          }
          for (const pierna of [piernaI, piernaD]) {
            caja(pierna, 0.44, 0.20, 0.66, ficha.acento, 0, -1.00, 0.10);
          }
          caja(torso, 0.52, 0.40, 0.05, "#2c5a78", 0, 0.46, 0.27);
          break;

        case "eclipse":
          pieza(cabeza, new T.TorusGeometry(0.44, 0.05, 8, 32), ficha.acento, 0, 0.62, 0, true)
            .rotation.x = Math.PI / 2;
          for (let i = 0; i < 12; i++) {
            const a = (i / 12) * Math.PI * 2;
            const rayo = caja(cabeza, 0.05, 0.26, 0.05, ficha.acento,
              Math.sin(a) * 0.62, 0.62, Math.cos(a) * 0.62);
            rayo.rotation.z = -a;
          }
          for (const lado of [-1, 1]) {
            const ala = grupo(torso, lado * 0.34, 0.74, -0.32);
            for (let i = 0; i < 3; i++) {
              const filo = caja(ala, 0.22, 0.72 - i * 0.12, 0.07, "#e8e0ff",
                lado * (0.16 + i * 0.17), 0.06 - i * 0.10, 0);
              filo.rotation.z = -lado * 0.48;
            }
            alas.push(ala);
          }
          caja(torso, 0.96, 1.04, 0.07, "#252238", 0, 0.36, -0.34);
          pieza(torso, new T.OctahedronGeometry(0.13),
            ficha.acento, 0, 0.52, 0.31, false, true);
          break;

        // ============================================================
        //  AMPLIACIÓN · FUNNY
        // ============================================================
        case "pirata":
          pieza(cabeza, new T.CylinderGeometry(0.58, 0.58, 0.16, 14), "#c93f3f", 0, 0.34, 0);
          for (const lado of [-1, 1]) {
            const cola = caja(cabeza, 0.10, 0.44, 0.05, "#c93f3f", lado * 0.34, -0.04, -0.44);
            cola.rotation.z = -lado * 0.40;
          }
          caja(cabeza, 0.19, 0.19, 0.05, "#2b3040", 0.17, 0.04, 0.42);
          caja(cabeza, 0.04, 0.30, 0.03, "#2b3040", 0.17, 0.22, 0.41);
          caja(torso, 0.96, 0.62, 0.06, ficha.ropa, 0, 0.36, 0.27);
          caja(torso, 0.20, 0.32, 0.06, ficha.acento, 0, 0.62, 0.30);
          pieza(brazoD, new T.TorusGeometry(0.13, 0.035, 6, 16, Math.PI * 1.4),
            "#c9ced8", 0, -0.72, 0.06, true);
          break;

        case "vaquero":
          pieza(cabeza, new T.CylinderGeometry(0.78, 0.78, 0.06, 16), "#8a6a44", 0, 0.34, 0);
          pieza(cabeza, new T.CylinderGeometry(0.44, 0.50, 0.30, 14), "#8a6a44", 0, 0.50, 0);
          pieza(cabeza, new T.CylinderGeometry(0.47, 0.47, 0.07, 14), ficha.acento, 0, 0.40, 0);
          caja(torso, 0.86, 0.74, 0.06, ficha.ropa, 0, 0.40, 0.27);
          for (let i = -1; i <= 1; i++) {
            esfera(torso, 0.045, ficha.acento, i * 0.10, 0.42, 0.31);
          }
          caja(torso, 0.32, 0.34, 0.05, ficha.acento, 0, 0.60, 0.30);
          break;

        case "payaso":
          esfera(cabeza, 0.11, "#e2402f", 0, -0.06, 0.44);
          for (let i = 0; i < 7; i++) {
            const a = (i / 7) * Math.PI * 2;
            esfera(cabeza, 0.15, ficha.pelo,
              Math.sin(a) * 0.42, 0.22 + Math.cos(a) * 0.16, Math.cos(a) * 0.38 - 0.02);
          }
          caja(torso, 0.94, 0.92, 0.06, "#f4f0e6", 0, 0.42, 0.26);
          for (let i = -1; i <= 1; i++) {
            esfera(torso, 0.07, ["#e2402f", "#3f8fd0", "#ffd166"][i + 1], i * 0.22, 0.40, 0.30);
          }
          for (const lado of [-1, 1]) {
            const lazo = caja(torso, 0.30, 0.20, 0.09, ficha.acento, lado * 0.17, 0.86, 0.28);
            lazo.rotation.z = lado * 0.25;
          }
          break;

        case "cactus":
          for (let i = 0; i < 14; i++) {
            const a = (i / 14) * Math.PI * 2;
            esfera(torso, 0.04, "#e8f0a0",
              Math.sin(a) * 0.46, 0.14 + (i % 5) * 0.16, Math.cos(a) * 0.25);
          }
          for (const brazo of [brazoI, brazoD]) {
            esfera(brazo, 0.045, "#e8f0a0", 0, -0.18, 0.21);
          }
          esfera(cabeza, 0.15, "#ff9ac0", 0, 0.50, 0);
          for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2;
            esfera(cabeza, 0.09, ficha.acento, Math.sin(a) * 0.16, 0.50, Math.cos(a) * 0.16);
          }
          break;

        case "helado": {
          cono(cabeza, 0.36, 0.50, "#d9a86c", 0, 0.56, 0, 12).rotation.x = Math.PI;
          esfera(cabeza, 0.30, "#f2b6d6", 0, 0.94, 0);
          esfera(cabeza, 0.26, "#ffe49b", -0.22, 1.08, 0);
          esfera(cabeza, 0.26, "#8de8ff", 0.22, 1.08, 0);
          esfera(cabeza, 0.09, "#e2402f", 0, 1.20, 0);
          caja(torso, 0.90, 0.90, 0.06, "#e8d0b0", 0, 0.42, 0.26);
          for (let i = 0; i < 6; i++) {
            esfera(torso, 0.035, ["#e2402f", "#3f8fd0", "#5cb87a"][i % 3],
              -0.30 + i * 0.12, 0.62 + (i % 2) * 0.12, 0.30);
          }
          break;
        }

        case "burbuja": {
          for (let i = 0; i < 9; i++) {
            const a = (i / 9) * Math.PI * 2;
            const radio = 0.10 + (i % 3) * 0.035;
            const mat = new T.MeshStandardMaterial({
              color: ficha.acento, transparent: true, opacity: 0.40,
              roughness: 0.10, metalness: 0.05, depthWrite: false
            });
            materiales["pompa" + i] = mat;
            const pompa = new T.Mesh(new T.SphereGeometry(radio, 12, 9), mat);
            pompa.position.set(
              Math.sin(a) * 0.72, 0.28 + (i % 4) * 0.24, Math.cos(a) * 0.56
            );
            torso.add(pompa);
          }
          caja(torso, 0.86, 0.84, 0.06, "#8fc4e8", 0, 0.40, -0.34);
          for (let i = -1; i <= 1; i++) {
            esfera(torso, 0.055, ficha.acento, i * 0.22, 0.62, 0.30);
          }
          break;
        }

        case "dino_funny":
          for (let i = 0; i < 4; i++) {
            const placa = cono(torso, 0.13 - i * 0.015, 0.30,
              ficha.pelo, 0, 0.30 + i * 0.20, -0.30, 4);
            placa.rotation.x = -0.30;
          }
          hocico(ficha.acento, 0.42, 0.24);
          for (const x of [-0.17, 0.17]) {
            caja(cabeza, 0.06, 0.10, 0.04, "#f4f0e6", x, -0.14, 0.38);
          }
          cola = grupo(cuerpo, 0, 0.10, -0.30);
          caja(cola, 0.22, 0.22, 0.62, ficha.piel, 0, 0, -0.26);
          break;

        case "fantasma":
          caja(cabeza, 0.94, 0.96, 0.92, "#e8eaf2", 0, 0.02, -0.02);
          for (const lado of [-1, 1]) {
            const ojo = esfera(cabeza, 0.13, "#2b3040", lado * 0.20, 0.06, 0.44);
            ojo.scale.z = 0.35;
          }
          caja(torso, 1.06, 1.10, 0.64, "#e8eaf2", 0, 0.40, 0);
          for (let i = -2; i <= 2; i++) {
            caja(torso, 0.20, 0.26, 0.62, "#e8eaf2", i * 0.21, -0.16, 0);
          }
          break;

        case "superheroe":
          caja(cabeza, 0.88, 0.22, 0.06, ficha.acento, 0, 0.06, 0.36);
          caja(cabeza, 0.82, 0.14, 0.04, "#2b3346", 0, 0.06, 0.40);
          caja(torso, 1.02, 1.16, 0.08, ficha.acento, 0, 0.34, -0.36);
          caja(torso, 0.34, 0.34, 0.06, "#ffe49b", 0, 0.56, 0.30);
          caja(torso, 0.10, 0.26, 0.06, "#ffe49b", 0, 0.56, 0.33);
          caja(torso, 0.26, 0.10, 0.06, "#ffe49b", 0, 0.60, 0.33);
          break;

        case "bombilla":
          esfera(cabeza, 0.26, "#ffe45e", 0, 0.62, 0);
          caja(cabeza, 0.16, 0.12, 0.16, "#c9ced8", 0, 0.34, 0);
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            caja(cabeza, 0.045, 0.16, 0.045, "#c9ced8",
              Math.sin(a) * 0.24, 0.44, Math.cos(a) * 0.24);
          }
          caja(torso, 0.94, 0.86, 0.06, "#8a7ac9", 0, 0.40, 0.26);
          caja(torso, 0.28, 0.30, 0.06, "#2b3040", 0, 0.50, 0.30);
          for (let i = 0; i < 3; i++) {
            caja(torso, 0.05, 0.32, 0.05, ficha.acento, -0.30 + i * 0.30, 0.22, 0.30);
          }
          break;
      }
    }


    // Las herramientas cuelgan de un punto de agarre en la mano derecha.
    const mano = grupo(brazoD, 0, -0.58, 0);
    const herramientas = {};

    function herramienta(nombre) {
      const g = grupo(mano);
      g.rotation.x = -Math.PI / 2;
      g.visible = false;
      herramientas[nombre] = g;
      return g;
    }

    let h = herramienta("objeto");
    caja(h, 0.40, 0.40, 0.40, ficha.acento, 0, 0.18, 0);

    h = herramienta("bate");
    pieza(h, new T.CylinderGeometry(0.10, 0.045, 1.05, 10),
      "#bc875b", 0, 0.43, 0);
    caja(h, 0.08, 0.20, 0.08, "#414458", 0, -0.03, 0);

    h = herramienta("espada");
    caja(h, 0.07, 0.26, 0.08, "#544153", 0, 0, 0);
    caja(h, 0.35, 0.075, 0.13, ficha.acento, 0, 0.17, 0, true);
    caja(h, 0.13, 0.77, 0.055, "#d8e5ef", 0, 0.59, 0, true);
    cono(h, 0.092, 0.18, "#d8e5ef", 0, 1.065, 0, 4);

    h = herramienta("hacha");
    caja(h, 0.065, 0.91, 0.07, "#986747", 0, 0.34, 0);
    caja(h, 0.43, 0.28, 0.10, "#bdd0dd", 0.14, 0.69, 0, true);
    caja(h, 0.055, 0.30, 0.11, "#eef7ff", 0.37, 0.69, 0, true);

    h = herramienta("pico");
    caja(h, 0.07, 0.95, 0.07, "#986747", 0, 0.35, 0);
    caja(h, 0.64, 0.09, 0.09, "#b8cbd9", 0, 0.75, 0, true);
    for (const lado of [-1, 1]) {
      const punta = caja(h, 0.22, 0.075, 0.075,
        "#dcebf4", lado * 0.37, 0.69, 0, true);
      punta.rotation.z = -lado * 0.5;
    }

    h = herramienta("martillo");
    caja(h, 0.07, 0.61, 0.07, "#bd8a58", 0, 0.20, 0);
    caja(h, 0.39, 0.20, 0.21, "#bdd0dd", 0, 0.52, 0, true);

    // Elementos de apoyo visibles solo en su animación.
    const silla = grupo(raiz);
    caja(silla, 1.03, 0.13, 0.85, "#516078", 0, 0.91, -0.06);
    caja(silla, 1.03, 0.87, 0.12, "#64758e", 0, 1.34, -0.45);
    for (const x of [-0.40, 0.40]) {
      for (const z of [-0.36, 0.27]) {
        caja(silla, 0.08, 0.85, 0.08, "#374156", x, 0.45, z);
      }
    }
    silla.visible = false;

    const cama = grupo(raiz);
    caja(cama, 1.20, 0.16, 3.48, "#7c86ae", 0, 0.08, -0.52);
    caja(cama, 0.86, 0.14, 0.58, "#e4e8f7", 0, 0.23, -1.73);
    cama.visible = false;

    const obra = grupo(raiz, 0, 0, 1.15);
    for (let i = 0; i < 3; i++) {
      caja(obra, 0.60, 0.23, 0.34, ficha.acento,
        (i % 2) * 0.18, 0.115 + i * 0.23, 0);
    }
    obra.visible = false;

    const baseCuerpo = cuerpo.position.clone();
    const moviles = [cuerpo, torso, cabeza, brazoI, brazoD, piernaI, piernaD];

    function animar(t, accion) {
      for (const g of moviles) g.rotation.set(0, 0, 0);
      cuerpo.position.copy(baseCuerpo);
      ojos.scale.y = 1;
      for (const g of Object.values(herramientas)) g.visible = false;
      silla.visible = false;
      cama.visible = false;
      obra.visible = false;

      const s = Math.sin;
      const pi = Math.PI;
      const ciclo = (t * 0.85) % 1;
      const golpe = Math.pow(Math.max(0, s(t * 6)), 3);

      brazoI.rotation.z = -0.06;
      brazoD.rotation.z = 0.06;

      if (cola) cola.rotation.y = s(t * 3) * 0.22;
      alas.forEach((ala, i) => {
        ala.rotation.y = (i ? 1 : -1) * (0.12 + s(t * 2) * 0.10);
      });

      function caminar(rapido) {
        const ritmo = rapido ? 11 : 6;
        const fuerza = rapido ? 0.95 : 0.55;
        const paso = s(t * ritmo);
        piernaI.rotation.x = paso * fuerza;
        piernaD.rotation.x = -paso * fuerza;
        brazoI.rotation.x = -paso * fuerza;
        brazoD.rotation.x = paso * fuerza;
        cuerpo.position.y += Math.abs(s(t * ritmo)) * (rapido ? 0.12 : 0.045);
        torso.rotation.x = rapido ? 0.16 : 0.03;
        torso.rotation.y = paso * 0.07;
      }

      switch (accion) {
        case "Camina":
          caminar(false);
          break;

        case "Correr":
          caminar(true);
          break;

        case "Agarrar (objeto)": {
          const alcance = (1 - Math.cos(t * 2.5)) / 2;
          brazoD.rotation.x = -0.25 - alcance * 1.20;
          brazoD.rotation.z = -0.10;
          cabeza.rotation.x = 0.12 * alcance;
          herramientas.objeto.visible = true;
          break;
        }

        case "Agacharse":
          cuerpo.position.y -= 0.30;
          torso.rotation.x = 0.45;
          piernaI.rotation.x = -0.62;
          piernaD.rotation.x = -0.62;
          piernaI.rotation.z = 0.16;
          piernaD.rotation.z = -0.16;
          brazoI.rotation.x = brazoD.rotation.x = -0.55;
          break;

        case "Saltar": {
          const salto = Math.sin(ciclo * pi);
          cuerpo.position.y += salto * 0.90;
          brazoI.rotation.z = -salto * 2.45;
          brazoD.rotation.z = salto * 2.45;
          piernaI.rotation.x = salto * 0.28;
          piernaD.rotation.x = -salto * 0.28;
          break;
        }

        case "Atacar (golpe de puño)":
          brazoD.rotation.x = -0.45 - golpe * 1.45;
          brazoI.rotation.x = -0.70;
          torso.rotation.y = -golpe * 0.44;
          cuerpo.position.z = golpe * 0.12;
          piernaI.rotation.x = -0.20;
          piernaD.rotation.x = 0.20;
          break;

        case "Atacar (con bate)":
        case "Atacar (con espada)": {
          const esBate = accion === "Atacar (con bate)";
          herramientas[esBate ? "bate" : "espada"].visible = true;
          brazoD.rotation.x = -1.05;
          brazoD.rotation.z = 0.75 - golpe * 1.8;
          brazoD.rotation.y = 0.70 - golpe * 1.9;
          torso.rotation.y = 0.4 - golpe * 0.95;
          brazoI.rotation.x = esBate ? -1.1 : -0.3;
          brazoI.rotation.z = esBate ? 0.65 : -0.2;
          break;
        }

        case "Talar (con hacha)":
          herramientas.hacha.visible = true;
          brazoD.rotation.x = -2.35 + golpe * 1.70;
          brazoD.rotation.z = 0.30;
          torso.rotation.y = 0.2 - golpe * 0.5;
          torso.rotation.x = golpe * 0.18;
          brazoI.rotation.x = -0.6;
          break;

        case "Picar (con pico)":
          herramientas.pico.visible = true;
          brazoD.rotation.x = -2.7 + golpe * 2.05;
          brazoI.rotation.x = -1.9 + golpe;
          brazoI.rotation.z = 0.55;
          torso.rotation.x = golpe * 0.30;
          cuerpo.position.y -= golpe * 0.08;
          break;

        case "Construir":
          herramientas.martillo.visible = true;
          obra.visible = true;
          brazoD.rotation.x = -1.8 + golpe * 1.05;
          brazoI.rotation.x = -0.9;
          torso.rotation.x = 0.15;
          obra.children.forEach((bloque, i) => {
            bloque.visible = (t % 3) > i * 0.65;
          });
          break;

        case "Baile 1":
          cuerpo.position.x = s(t * 4) * 0.22;
          cuerpo.position.y += Math.abs(s(t * 4)) * 0.08;
          torso.rotation.z = s(t * 4) * 0.14;
          brazoI.rotation.z = -1.5 + s(t * 4) * 0.55;
          brazoD.rotation.z = 1.5 + s(t * 4) * 0.55;
          piernaI.rotation.x = s(t * 4) * 0.32;
          piernaD.rotation.x = -s(t * 4) * 0.32;
          break;

        case "Baile 2":
          cuerpo.rotation.y = t * 1.8;
          cuerpo.position.y += Math.abs(s(t * 5)) * 0.13;
          brazoI.rotation.z = -1.20;
          brazoD.rotation.z = 1.20;
          brazoI.rotation.x = s(t * 5) * 0.5;
          brazoD.rotation.x = -s(t * 5) * 0.5;
          piernaI.rotation.x = s(t * 5) * 0.45;
          piernaD.rotation.x = -s(t * 5) * 0.45;
          break;

        case "Baile 3": {
          const robot = Math.round(s(t * 3) * 2) / 2;
          torso.rotation.y = robot * 0.45;
          cabeza.rotation.z = -robot * 0.20;
          brazoI.rotation.x = -pi / 2 + robot * 0.6;
          brazoD.rotation.z = pi / 2 + robot * 0.5;
          piernaI.rotation.z = 0.1;
          piernaD.rotation.z = -0.1;
          break;
        }

        case "Dormir":
          cama.visible = true;
          cuerpo.rotation.x = -pi / 2;
          cuerpo.position.set(0, 0.51 + s(t * 1.8) * 0.012, -0.12);
          ojos.scale.y = 0.14;
          brazoI.rotation.z = -0.10;
          brazoD.rotation.z = 0.10;
          break;

        case "Sentarse":
          silla.visible = true;
          cuerpo.position.y = 1.04;
          piernaI.rotation.x = -pi / 2;
          piernaD.rotation.x = -pi / 2;
          brazoI.rotation.x = -0.60;
          brazoD.rotation.x = -0.60;
          cabeza.rotation.y = s(t * 0.8) * 0.12;
          break;

        default:
          cuerpo.position.y += s(t * 2) * 0.025;
          brazoI.rotation.x = s(t * 2) * 0.035;
          brazoD.rotation.x = -s(t * 2) * 0.035;
          cabeza.rotation.y = s(t * 0.7) * 0.10;
          if (t % 4.2 > 4.04) ojos.scale.y = 0.12;
      }
    }

    function destruir() {
      const geometrias = new Set();
      raiz.traverse(obj => {
        if (obj.geometry) geometrias.add(obj.geometry);
      });
      geometrias.forEach(g => g.dispose());
      Object.values(materiales).forEach(m => m.dispose());
    }

    animar(0, "Esperar");
    return { raiz, animar, destruir };
  }

  window.Catalogo3D = {
    CATEGORIAS,
    ANIMACIONES,
    PERSONAJES,
    crearPersonaje
  };
})();

