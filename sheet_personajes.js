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
    const animal = ["fox", "panda"].includes(ficha.estilo);

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

    if (animal) {
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
