/* config_player.js
 * Configuración reutilizable del jugador.
 * Se cuelga en window.ConfigPlayer (mismo patrón que sheet_personajes.js).
 */
(function () {
  "use strict";

  const ConfigPlayer = {

    // ---------------------------------------------------------------
    // Defaults de identidad
    // ---------------------------------------------------------------
    defaults: {
      skin: "panda",
      nombre: "Jugador",
      storageSkin: "cl_skin",
      storageNombre: "cl_nombre",
    },

    // ---------------------------------------------------------------
    // Salud del jugador
    // ---------------------------------------------------------------
    salud: {
      max: 100,
      inicial: 50,          // empieza con la mitad
      umbralMedio: 0.5,     // por debajo: color amarillo
      umbralBajo: 0.25,     // por debajo: color rojo
    },

    // ---------------------------------------------------------------
    // Acciones de la barra inferior (emotes / ataques).
    // ---------------------------------------------------------------
    acciones: [
      { anim: "Atacar (golpe de puño)", label: "Atacar",  em: "👊", tecla: "KeyF",   kbd: "F", tipo: "unica", dur: 0.30 },
      { anim: "Baile 1",                 label: "Bailar 1", em: "🕺", tecla: "Digit1", kbd: "1", tipo: "emote" },
      { anim: "Baile 2",                 label: "Bailar 2", em: "💃", tecla: "Digit2", kbd: "2", tipo: "emote" },
      { anim: "Baile 3",                 label: "Bailar 3", em: "🤖", tecla: "Digit3", kbd: "3", tipo: "emote" },
      { anim: "Dormir",                  label: "Dormir",   em: "💤", tecla: "KeyZ",   kbd: "Z", tipo: "emote" },
    ],

    // ---------------------------------------------------------------
    // Física del salto
    // ---------------------------------------------------------------
    salto: {
      impulso: 9.6,
      gravedad: -22.0,
      gravedadCaida: -15.0,
      velocidadMaxCaida: -11.0,
      umbralApice: 1.5,
      factorApice: 0.6,
      permiteDobleSalto: false,
      coyoteTime: 0,
      animacionSalto: "Saltar",
      animacionAterrizaje: "Aterrizaje",
      duracionAterrizaje: 0.22,
      umbralAterrizajeFuerte: 6.0,
    },

    // ---------------------------------------------------------------
    // Movimiento
    // ---------------------------------------------------------------
    movimiento: {
      velocidadCaminar: 3.2,
      velocidadCorrer: 7.0,
      factorAlAtacar: 0.7,
    },

    botonAtacar: {
      icono: "👊",
      label: "ATACAR",
    },

    // ---------------------------------------------------------------
    // Cajas del mapa
    // ---------------------------------------------------------------
    cajas: {
      tipos: {
        chica:   { tam: 0.6, color: "#c8925a", marco: "#8a5a32", agarrable: true,  movible: false, factorVel: 1.0 },
        mediana: { tam: 0.9, color: "#b07a45", marco: "#6f4626", agarrable: true,  movible: false, factorVel: 0.85 },
        grande:  { tam: 1.5, color: "#8f6a4a", marco: "#4f3a2a", agarrable: false, movible: true },
        // Nuevas variantes por color (mismas físicas, distinto aspecto)
        chicaRoja:   { tam: 0.6, color: "#c0392b", marco: "#7d241b", agarrable: true,  movible: false, factorVel: 1.0 },
        medianaAzul: { tam: 0.9, color: "#2e6fb0", marco: "#1c4774", agarrable: true,  movible: false, factorVel: 0.85 },
        grandeAmarilla: { tam: 1.5, color: "#e0b13a", marco: "#a07a1c", agarrable: false, movible: true },
      },
      // [tipo, x, z]
      ubicaciones: [
        // Cajas originales
        ["chica",   3.5,  7.5],
        ["chica",  -4.0, 10.0],
        ["mediana", 8.0,  5.0],
        ["mediana",-8.5,  4.5],
        ["mediana", 6.0, -9.0],
        ["grande", -10.0, -9.0],
        ["grande",  11.0, 11.0],

        // 3 chicas rojas
        ["chicaRoja", -6.0,  -3.0],
        ["chicaRoja",  2.0, -12.0],
        ["chicaRoja", 12.0,   2.0],

        // 4 medianas azules
        ["medianaAzul", -12.0,  6.0],
        ["medianaAzul",  14.0, -6.0],
        ["medianaAzul", -2.0,  14.0],
        ["medianaAzul",  9.0,  9.0],

        // 2 grandes amarillas
        ["grandeAmarilla", -14.0, -2.0],
        ["grandeAmarilla",  5.0, -14.0],
      ],
      distanciaAgarre: 1.3,   // distancia máx. desde el borde de la caja
      distanciaLanzar: 3,     // unidades desde el jugador hasta donde cae
      impulsoLanzarY: 4.5,
      alturaCarga: 1.45,      // altura del centro de la caja al cargarla
      gravedad: -22,
      // Movimiento de cajas grandes
      mover: {
        distancia: 1.5,       // distancia de empuje (una casilla ~ tam grande)
        duracion: 0.35,       // segundos de la animación de empuje
      },
    },

    botonAgarrar: { label: "AGARRAR", labelSoltar: "SOLTAR" },
    botonLanzar:  { label: "LANZAR" },
    botonMover:   { label: "MOVER", labelDejar: "DEJAR" },

    // ---------------------------------------------------------------
    // Estados → nombre de animación en el catálogo 3D
    // ---------------------------------------------------------------
    estados: {
      quieto:       "Esperar",
      caminando:    "Camina",
      corriendo:    "Correr",
      enAire:       "Saltar",
      aterrizando:  "Aterrizaje",
      atacando:     "Atacar (golpe de puño)",
      bailable1:    "Baile 1",
      bailable2:    "Baile 2",
      bailable3:    "Baile 3",
      durmiendo:    "Dormir",
    },

    // ---------------------------------------------------------------
    // Nombres legibles (se conservan por si se reutilizan)
    // ---------------------------------------------------------------
    nombresHUD: {
      "Esperar": "Esperar",
      "Camina": "Caminando",
      "Correr": "Corriendo",
      "Saltar": "Saltando",
      "Aterrizaje": "Aterrizando",
      "Atacar (golpe de puño)": "Atacando",
      "Baile 1": "Bailando 1",
      "Baile 2": "Bailando 2",
      "Baile 3": "Bailando 3",
      "Dormir": "Durmiendo",
    },

    // ---------------------------------------------------------------
    // Teclas especiales
    // ---------------------------------------------------------------
    teclas: {
      perfil: "KeyP",
      mochila: "KeyB",
      correr: ["ShiftLeft", "ShiftRight"],
      saltar: "Space",
      arriba: ["KeyW", "ArrowUp"],
      abajo:  ["KeyS", "ArrowDown"],
      izquierda: ["KeyA", "ArrowLeft"],
      derecha: ["KeyD", "ArrowRight"],
      agarrar: "KeyE",
      lanzar: "KeyR",
      mover: "KeyM",
    },

    // ---------------------------------------------------------------
    // Sonidos del jugador
    // ---------------------------------------------------------------
    sonidos: {
      paso: {
        efecto: "step-stone",
        pitchCaminar: 1.0,
        pitchCorrer: 1.12,
        ritmoCaminar: 0.45,
        ritmoCorrer: 0.25,
        volumen: 0.5,
        variantes: 3,
      },
      salto: {
        efecto: "move-jump",
        volumen: 1.0,
        pitchAleatorio: 0.03,
      },
      aterrizaje: {
        efecto: "move-land",
        volumenBase: 0.7,
        volumenMax: 1.0,
        escalaPorVelocidad: true,
      },
    },

    // ---------------------------------------------------------------
    // Botones
    // ---------------------------------------------------------------
    botonSaltar: {
      visibleSiempre: true,
      deshabilitadoEnAire: false,
      icono: "⤒",
      label: "SALTAR",
    },

    botonCorrer: {
      icono: "",
      label: "CORRER",
    },

    botonMochila: {
      icono: "🎒",
      aria: "Mochila",
    },
  };

  window.ConfigPlayer = ConfigPlayer;
})();