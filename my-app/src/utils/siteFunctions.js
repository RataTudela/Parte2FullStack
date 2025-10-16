// Funciones y datos compartidos para la app
// Exporta: products, validarLogin, validarRegistro, validarContacto, addToCart, getCart, clearCart, getProduct

const products = [
  { nombre: "Persona 3 Reload", comentario: "Juego JRPG...", precio: 18500, imagen: "/images/pic01.jpg" },
  { nombre: "God of War: Ragnarok", comentario: "Secuela de God Of War...", precio: 25500, imagen: "/images/pic02.jpg" },
  { nombre: "SilkSong", comentario: "Secuela de Hollow Knight...", precio: 10500, imagen: "/images/pic03.jpg" },
  { nombre: "Lego BatMan", comentario: "Juego protagonizado por Batman...", precio: 5500, imagen: "/images/pic04.jpg" },
  { nombre: "Elden Ring", comentario: "Mundo de las Tierras Intermedias...", precio: 30000, imagen: "/images/pic05.jpg" },
  { nombre: "Sekiro", comentario: "Sekiro: Shadows Die Twice...", precio: 22000, imagen: "/images/pic06.jpg" },
  { nombre: "Call Of Duty BO2", comentario: "Black Ops 2...", precio: 19990, imagen: "/images/blackOPs.jpg" },
  { nombre: "2K26", comentario: "NBA 2K26...", precio: 40000, imagen: "/images/2K26.jpg" },
  { nombre: "No Man's Sky", comentario: "Videojuego de exploración...", precio: 15000, imagen: "/images/nomansky.jpg" }
];

// Validaciones (devuelven { ok: boolean, errors: { campo: mensaje } })
function validarEmailBasico(email) {
  const termina = ["@duocuc.cl", "@profesor.duoc.cl", "@gmail.com"];
  if (!email) return { ok: false, message: 'Correo no ingresado.' };
  if (email.length > 100) return { ok: false, message: 'Correo demasiado largo.' };
  const valido = termina.some(t => email.endsWith(t));
  if (!valido) return { ok: false, message: 'Correo debe terminar en @duocuc.cl, @profesor.duoc.cl o @gmail.com' };
  return { ok: true };
}

export function validarLogin({ email, contraseña }) {
  const errors = {};
  const e = validarEmailBasico(email);
  if (!e.ok) errors.email = e.message;
  if (!contraseña) errors.contraseña = 'Contraseña no ingresada.';
  else if (contraseña.length < 4 || contraseña.length > 10) errors.contraseña = 'Contraseña inválida (4-10 caracteres).';
  return { ok: Object.keys(errors).length === 0, errors };
}

export function validarRegistro({ nombre, email, contraseña, confirmarContraseña, telefono, region, comuna }) {
  const errors = {};

  if (!nombre) errors.nombre = 'Nombre no ingresado.';
  else if (nombre.length < 3 || nombre.length > 50) errors.nombre = 'Nombre demasiado corto o largo.';

  const e = validarEmailBasico(email);
  if (!e.ok) errors.email = e.message;

  if (!contraseña) errors.contraseña = 'Contraseña no ingresada.';
  else if (contraseña.length < 4 || contraseña.length > 10) errors.contraseña = 'Contraseña inválida (4-10 caracteres).';

  if (!confirmarContraseña) errors.confirmarContraseña = 'No confirmó la contraseña.';
  else if (confirmarContraseña !== contraseña) errors.confirmarContraseña = 'Contraseñas no coinciden.';

  if (!telefono) errors.telefono = 'No ingresó teléfono.';
  else if (!/^\d{9}$/.test(telefono)) errors.telefono = 'Teléfono debe tener 9 dígitos.';

  if (!region) errors.region = 'No ingresó región.';
  else if (region.length < 4 || region.length > 20) errors.region = 'Región inválida.';

  if (!comuna) errors.comuna = 'No ingresó comuna.';
  else if (comuna.length < 4 || comuna.length > 20) errors.comuna = 'Comuna inválida.';

  return { ok: Object.keys(errors).length === 0, errors };
}

export function validarContacto({ nombre, email, texto }) {
  const errors = {};
  if (!nombre) errors.nombre = 'Nombre no ingresado.';
  else if (nombre.length < 3 || nombre.length > 50) errors.nombre = 'Nombre demasiado corto o largo.';

  const e = validarEmailBasico(email);
  if (!e.ok) errors.email = e.message;

  if (!texto) errors.texto = 'No ingresó comentario.';
  else if (texto.length > 500) errors.texto = 'Comentario demasiado largo.';

  return { ok: Object.keys(errors).length === 0, errors };
}

// Carrito simple (almacenado en localStorage para persistencia básica)
const CART_KEY = 'gc_cart_v1';
function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function writeCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); }

export function addToCart(index) {
  const c = readCart();
  const p = products[index];
  if (!p) return { ok: false, length: c.length };
  c.push(p);
  writeCart(c);
  return { ok: true, length: c.length };
}

export function getCart() { return readCart(); }
export function clearCart() { writeCart([]); }

export function getProduct(index) { return products[index] || null; }

// Legacy DOM helpers (for HTML pages that still use direct DOM manipulation)
export function mostrarProductoPrincipalDOM(indexParam) {
  const index = indexParam != null ? String(indexParam) : null;
  if (index !== null && products[index]) {
    const product = products[index];
    const imgEl = document.getElementById('imagen-principal');
    const titleEl = document.getElementById('titulo-principal');
    const commentEl = document.getElementById('comentario-principal');
    const priceEl = document.getElementById('precio-principal');
    if (imgEl) imgEl.src = product.imagen;
    if (titleEl) titleEl.textContent = product.nombre;
    if (commentEl) commentEl.textContent = product.comentario;
    if (priceEl) priceEl.textContent = `$${product.precio.toLocaleString()}`;
    return true;
  }
  return false;
}

export function generarCardsDOM(containerId = 'productos-container') {
  const container = document.getElementById(containerId);
  if (!container) return;
  // Clear existing
  container.innerHTML = '';
  products.forEach((prod, i) => {
    const col = document.createElement('div');
    col.className = 'col-sm mb-3';

    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';

    const img = document.createElement('img');
    img.src = prod.imagen;
    img.className = 'card-img-top';
    img.alt = prod.nombre;

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = prod.nombre;

    const text = document.createElement('p');
    text.className = 'card-text';
    text.textContent = prod.comentario;

    // Click on card redirects to same-page detail with ?index
    card.onclick = () => {
      const base = window.location.pathname;
      window.location.href = `${base}?index=${i}`;
    };

    body.appendChild(title);
    body.appendChild(text);
    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    container.appendChild(col);
  });
}

export function agregarDOM(indice) {
  const c = readCart();
  const p = products[indice];
  if (!p) return { ok: false, length: c.length };
  c.push(p);
  writeCart(c);
  const span = document.getElementById('contador');
  if (span) span.innerText = c.length;
  return { ok: true, length: c.length };
}

export default { products, validarLogin, validarRegistro, validarContacto, addToCart, getCart, clearCart, getProduct };
