# Encuentro Deportivo Salta 2026 – Sedes y distancias

Web estática para celular con las disciplinas, sedes, horarios y cómo llegar en auto desde cada hotel (XX Encuentro Deportivo Nacional, Salta, 28 al 31/10/2026, delegación CPCE Misiones).

No tiene que instalarse ni configurarse nada: es HTML, CSS y JS puro, sin build ni dependencias.

## Cómo publicarla en 3 pasos

1. **Subí la carpeta a GitHub.** Creá un repositorio nuevo en [github.com/new](https://github.com/new) y subí `index.html`, `styles.css`, `app.js` y `README.md` (botón *Add file → Upload files*). El `index.html` tiene que quedar en la raíz del repo, no dentro de una subcarpeta.
2. **Importalo en Vercel.** Entrá a [vercel.com](https://vercel.com) con tu cuenta de GitHub, tocá *Add New → Project* y elegí el repositorio (*Import*).
3. **Desplegá sin tocar nada.** Dejá todas las opciones como vienen (Vercel detecta que es un sitio estático) y tocá *Deploy*. En un minuto te da el link para mandar por WhatsApp.

## Para corregir datos

Todos los horarios, direcciones y estimaciones están en la constante `DATA`, al principio de `app.js`. Editá ese bloque (y la fecha en `actualizacion`), guardá en GitHub y Vercel republica solo.

## Para probarla sin publicar

Abrí `index.html` con doble clic: funciona sin servidor.
