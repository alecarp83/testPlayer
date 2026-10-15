/* ============================================================
   PLAYER MODEL — Natsuo
   Adaptado del catálogo de personajes.
   API: createPlayerModel({ THREE, colors })
   Devuelve: { group, parts, setColors, dispose }
   ============================================================ */

export const NATSUO_COLORS = {
  piel:     '#d9a67e',
  ropa:     '#4a3f8a',
  pantalon: '#28243f',
  pelo:     '#5a4f8a',
  acento:   '#8de8ff',
};

/**
 * @param {Object} opts
 * @param {THREE} opts.THREE  referencia a THREE
 * @param {Object} opts.colors  { piel, ropa, pantalon, pelo, acento }
 */
export function createPlayerModel({ THREE: T, colors }) {
  const col = { ...NATSUO_COLORS, ...(colors || {}) };

  const raiz = new T.Group();
  raiz.name = 'playerModel';

  /* --- Sistema de materiales con seguimiento de color --- */
  // Guardamos referencias { material, colorKey } para poder actualizar en vivo.
  const materialRefs = []; // [{ mat, key }]
  const materialCache = {};

  function material(color, metal = false, brillo = false, colorKey = null) {
    const clave = `${color}-${metal}-${brillo}-${colorKey || ''}`;
    if (!materialCache[clave]) {
      const mat = new T.MeshStandardMaterial({
        color,
        roughness: metal ? 0.36 : 0.72,
        metalness: metal ? 0.55 : 0.04,
        emissive: brillo ? color : '#000000',
        emissiveIntensity: brillo ? 0.3 : 0,
      });
      materialCache[clave] = mat;
      if (colorKey) materialRefs.push({ mat, key: colorKey });
    }
    return materialCache[clave];
  }

  function pieza(parent, geo, color, x, y, z, metal, brillo, colorKey) {
    const mesh = new T.Mesh(geo, material(color, metal, brillo, colorKey));
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  function caja(parent, w, h, d, color, x = 0, y = 0, z = 0, metal = false, colorKey = null) {
    return pieza(parent, new T.BoxGeometry(w, h, d), color, x, y, z, metal, false, colorKey);
  }

  function esfera(parent, r, color, x, y, z, colorKey = null) {
    return pieza(parent, new T.SphereGeometry(r, 16, 12), color, x, y, z, false, false, colorKey);
  }

  function cono(parent, r, h, color, x, y, z, lados = 4, colorKey = null) {
    return pieza(parent, new T.ConeGeometry(r, h, lados), color, x, y, z, false, false, colorKey);
  }

  function grupo(parent, x = 0, y = 0, z = 0) {
    const g = new T.Group();
    g.position.set(x, y, z);
    parent.add(g);
    return g;
  }

  /* --- Cuerpo (adaptado del catálogo) --- */
  const cuerpo = grupo(raiz, 0, 0, 0);
  const torso = grupo(cuerpo);

  caja(torso, 0.91, 0.86, 0.48, col.ropa, 0, 0.43, 0, false, 'ropa');
  caja(torso, 0.93, 0.12, 0.50, col.pantalon, 0, 0.04, 0, false, 'pantalon');
  caja(torso, 0.10, 0.62, 0.025, col.acento, 0, 0.48, 0.253, false, 'acento');
  caja(torso, 0.16, 0.11, 0.035, col.acento, -0.26, 0.64, 0.26, false, 'acento');

  const head = grupo(torso, 0, 1.22, 0);
  caja(head, 0.73, 0.69, 0.66, col.piel, 0, 0, 0, false, 'piel');

  // Cabello (no es animal → pelo en la cabeza)
  caja(head, 0.77, 0.17, 0.70, col.pelo, 0, 0.30, -0.015, false, 'pelo');
  caja(head, 0.76, 0.27, 0.13, col.pelo, 0, 0.12, -0.29, false, 'pelo');
  caja(head, 0.15, 0.27, 0.14, col.pelo, -0.30, 0.14, 0.27, false, 'pelo');

  // Ojos
  const ojos = grupo(head);
  for (const x of [-0.17, 0.17]) {
    caja(ojos, 0.067, 0.105, 0.035, '#202839', x, 0.04, 0.35);
    caja(ojos, 0.023, 0.028, 0.012, '#ffffff', x - 0.013, 0.067, 0.372);
  }
  caja(head, 0.12, 0.028, 0.025, '#885d62', 0, -0.16, 0.345);

  /* --- Brazos y piernas (pivotes) --- */
  const armL = grupo(torso, -0.64, 0.79, 0);
  const armR = grupo(torso, 0.64, 0.79, 0);
  for (const brazo of [armL, armR]) {
    caja(brazo, 0.31, 0.49, 0.40, col.ropa, 0, -0.18, 0, false, 'ropa');
    caja(brazo, 0.32, 0.13, 0.41, col.acento, 0, -0.41, 0, false, 'acento');
    caja(brazo, 0.29, 0.25, 0.34, col.piel, 0, -0.58, 0, false, 'piel');
  }

  const legL = grupo(cuerpo, -0.25, 0.765, 0);
  const legR = grupo(cuerpo, 0.25, 0.765, 0);
  for (const pierna of [legL, legR]) {
    caja(pierna, 0.38, 0.75, 0.40, col.pantalon, 0, -0.39, 0, false, 'pantalon');
    caja(pierna, 0.40, 0.23, 0.60, '#edf0f4', 0, -0.88, 0.09);
    caja(pierna, 0.41, 0.065, 0.61, col.acento, 0, -1.02, 0.09, false, 'acento');
  }

  /* --- Detalle "gamer" (accesorios de Natsuo) --- */
  // Auriculares laterales
  for (const lado of [-1, 1]) {
    caja(head, 0.15, 0.36, 0.32, col.acento, lado * 0.44, 0.10, 0, false, 'acento');
    // Copa del auricular
    const copa = pieza(
      head, new T.CylinderGeometry(0.10, 0.10, 0.04, 16),
      '#8de8ff', lado * 0.53, 0.10, 0, true, false, null
    );
    copa.rotation.z = Math.PI / 2;
  }
  // Visor de luz (frente)
  pieza(head, new T.BoxGeometry(0.64, 0.12, 0.06), '#2b3040', 0, 0.18, 0.37);
  pieza(head, new T.BoxGeometry(0.52, 0.06, 0.04), '#8de8ff', 0, 0.18, 0.40);

  // Emblema en el pecho
  caja(torso, 0.32, 0.32, 0.06, col.acento, 0, 0.46, 0.30, false, 'acento');
  for (let i = 0; i < 3; i++) {
    esfera(torso, 0.045, ['#f3b57e', '#b7f397', '#ed9fbc'][i], -0.10 + i * 0.10, 0.46, 0.34);
  }

  /* --- Escala para igualar al jugador actual (~2.6) --- */
  // El catálogo arma el personaje con una altura aproximada de ~2.6 unidades
  // (de pies a cabeza). Verificamos en la práctica y ajustamos si hace falta.
  const SCALE = 1.0;
  raiz.scale.setScalar(SCALE);

  /* --- API --- */
  function setColors(newColors) {
    Object.assign(col, newColors);
    for (const { mat, key } of materialRefs) {
      if (col[key] !== undefined) {
        mat.color.set(col[key]);
        if (mat.emissive && mat.emissiveIntensity > 0) {
          mat.emissive.set(col[key]);
        }
      }
    }
  }

  function dispose() {
    const geos = new Set();
    raiz.traverse((obj) => {
      if (obj.geometry) geos.add(obj.geometry);
    });
    geos.forEach((g) => g.dispose());
    Object.values(materialCache).forEach((m) => m.dispose());
    materialRefs.length = 0;
  }

  return {
    group: raiz,
    parts: { torso, head, armL, armR, legL, legR },
    setColors,
    dispose,
  };
}
