/* config_player.js
 * Configuración reutilizable del jugador.
 * Se cuelga en window.ConfigPlayer (mismo patrón que sheet_personajes.js).
 *
 * Todo lo que dependa del jugador (acciones, teclas, física, sonidos,
 * estados→animación, HUD, defaults) vive aquí para poder reutilizarlo
 * entre mapas sin tocar index.html.
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
    // Acciones de la barra inferior (emotes / ataques).
    // "Saltar" YA NO está aquí: es acción física con botón propio.
    // --------------------------------------------------------------- dur: Math.PI / 6
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
      impulso: 9.6,            // antes 7.0 → altura ≈ 2.1 (antes ≈ 1.1), +1 unidad
      gravedad: -22.0,         // gravedad al subir
      gravedadCaida: -15.0,    // gravedad al bajar (más suave = aterrizaje natural)
      velocidadMaxCaida: -11.0,// límite de velocidad al caer
      umbralApice: 1.5,        // |vy| por debajo del cual se "flota" en el punto alto
      factorApice: 0.6,        // gravedad reducida en el punto alto
      permiteDobleSalto: false,
      coyoteTime: 0,
      animacionSalto: "Saltar",
      animacionAterrizaje: "Aterrizaje",
      duracionAterrizaje: 0.22,          // s de amortiguación visual al tocar suelo
      umbralAterrizajeFuerte: 6.0,
    },

    // ---------------------------------------------------------------
    // Movimiento
    // ---------------------------------------------------------------
    movimiento: {
      velocidadCaminar: 3.2,
      velocidadCorrer: 7.0,
      factorAlAtacar: 0.7,    // multiplicador de velocidad durante acción "unica"
    },
    // ---------------------------------------------------
    // Config nuevo botón
      botonAtacar: {
        icono: "👊",
        label: "ATACAR",
      },

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
    // Nombres legibles para el HUD
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
    // Teclas especiales (no asociadas a acciones de barra)
    // ---------------------------------------------------------------
    teclas: {
      perfil: "KeyP",
      correr: ["ShiftLeft", "ShiftRight"],
      saltar: "Space",
      arriba: ["KeyW", "ArrowUp"],
      abajo:  ["KeyS", "ArrowDown"],
      izquierda: ["KeyA", "ArrowLeft"],
      derecha: ["KeyD", "ArrowRight"],
    },

    // ---------------------------------------------------------------
    // Sonidos del jugador (IDs que audio_juego.js debe precargar)
    // Todos se generan por código reutilizando Synth de script_audios.js.
    // ---------------------------------------------------------------
    sonidos: {
      paso: {
        efecto: "step-stone",
        pitchCaminar: 1.0,
        pitchCorrer: 1.12,      // ~+2 st
        ritmoCaminar: 0.45,     // s entre pasos
        ritmoCorrer: 0.25,
        volumen: 0.5,           // medio (salto = 1.0)
        variantes: 3,           // 3 buffers con leve variación
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
    // Configuración del botón físico "Saltar"
    // ---------------------------------------------------------------
    botonSaltar: {
      visibleSiempre: true,
      deshabilitadoEnAire: false, // por ahora siempre habilitado
      icono: "⤒",
      label: "SALTAR",
    },

    botonCorrer: {
      icono: "",
      label: "CORRER",
    },
  };

  window.ConfigPlayer = ConfigPlayer;
})();
