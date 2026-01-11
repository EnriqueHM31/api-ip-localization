# ��� api-ip-localization

**Aplicación frontend para obtener la geolocalización de una IP y mostrar información relevante (ubicación, moneda, metadata, etc.) usando la API de ipgeolocation.io.**

---

## ��� Tabla de contenido

- [Descripción](#descripción)
- [Demo / Uso](#demo--uso)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura y componentes clave](#arquitectura-y-componentes-clave)
- [API y tipos de datos](#api-y-tipos-de-datos)
- [Errores comunes y manejo](#errores-comunes-y-manejo)
- [Contribución](#contribución)
- [Notas y recomendaciones](#notas-y-recomendaciones)
- [Licencia](#licencia)

---

## ��� Descripción

`api-ip-localization` es una aplicación creada con **React + TypeScript + Vite** que permite introducir una IP y obtener su geolocalización mediante la API pública de **ipgeolocation.io**. Incluye validación de IP, manejo y normalización de errores, toasts para feedback (con `sonner`) y una UI responsive con **TailwindCSS** y **Framer Motion**.

---

## ��� Demo / Uso

1. Clona el repositorio.
2. Crea el archivo de variables de entorno con tu clave de la API (ver sección "Variables de entorno").
3. Instala dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

4. Abre `http://localhost:5173` y prueba introduciendo una IP.

---

## ��� Tecnologías

- React 19 + TypeScript
- Vite
- TailwindCSS
- Framer Motion (animaciones)
- Sonner (toasts)
- react-router-dom (enrutado)
- ESLint

Dependencias completas en `package.json`.

---

## ⚙️ Instalación

Requisitos:

- Node.js (>= 18 recomendado)
- npm o yarn

Pasos:

```bash
git clone <repo-url>
cd api-ip-localization
npm install
npm run dev
```

---

## ��� Variables de entorno

Crea un archivo `.env` o `.env.local` en la raíz con la siguiente variable:

```env
VITE_KEY_API_IP=tu_api_key_de_ipgeolocation
```

> Nota: Las variables que comienzan con `VITE_` se inyectan en el bundle del cliente; para producción considera usar un proxy/backend para ocultar la clave.

---

## ��� Scripts disponibles

- `npm run dev` — inicia servidor de desarrollo (Vite)
- `npm run build` — compila (TypeScript + Vite build)
- `npm run preview` — sirve la build localmente
- `npm run lint` — ejecuta ESLint

---

## ��� Estructura del proyecto (resumen)

```
src/
  App.tsx
  main.tsx
  assets/
  components/
    Atomos/             # componentes pequeños: Loading, Etiqueta, LinkButton...
    DataIpAddress/      # componentes de country, currency, location...
    LandingPage/        # NavBar, Footer
    sections/           # DataIP (tarjeta con info de la IP)
  config/
    index.ts            # VITE_KEY_API_IP + URL_PETICION
  constants/
    index.ts            # constantes y tipos de error
  hooks/
    Localizacion.ts     # inputs segmentados 192.168.0.1
    ValidacionIp.ts     # hook que llama a la API y normaliza errores
  pages/
    PageHome.tsx
    PageIpInformacion.tsx
    Page404.tsx
  services/
    obtenerLocalizacion.ts   # fetch a ipgeolocation
  types/
    IpAddress.d.ts      # definición de IpLocationData
  utils/
    error.ts            # normaliza errores de la API
```

---

## ��� Arquitectura y componentes clave

- `src/services/obtenerLocalizacion.ts`

  - Construye la petición usando `URL_PETICION + ip` y realiza `fetch`.
  - Muestra toasts en caso de éxito o error y propaga el error para manejo en hooks.

- `src/config/index.ts`

  - `apiKey = import.meta.env.VITE_KEY_API_IP`
  - `URL_PETICION = `https://api.ipgeolocation.io/v2/ipgeo?apiKey=${apiKey}&ip=`

- `src/hooks/Localizacion.ts`

  - Gestor de inputs en 4 campos (octetos), validación básica (0-255) y navegación a `/:ip`.

- `src/hooks/ValidacionIp.ts`

  - Orquesta la llamada a `obtenerLocalizacionIP`, maneja `loading`, `data` y `error`.

- `src/utils/error.ts` y `src/constants/index.ts`

  - Traducción/normalización de respuestas de error de la API (`BOGON`, `DOMINIO`, `UNKNOWN`).

- `src/types/IpAddress.d.ts`
  - Tipo `IpLocationData` (ip, location, country_metadata, currency, message?).

---

## ��� API y formatos

- Endpoint utilizado:

```
https://api.ipgeolocation.io/v2/ipgeo?apiKey=API_KEY&ip=IP_A_CONSULTAR
```

- Respuesta esperada: `IpLocationData` (ver `src/types/IpAddress.d.ts`).

---

## ⚠️ Errores comunes & manejo

- BOGON: IP privada/local (no geolocalizable).
- DOMINIO: dominio no encontrado.
- UNKNOWN: error no clasificado.

La app muestra toasts con `sonner` y, en caso de error al navegar a `/IP`, redirige al home.

Consejos de debug:

- Revisar pestaña Network en DevTools.
- Confirmar que `VITE_KEY_API_IP` es válida.
- Revisar logs en consola.

---

## ��� Contribución

- Abre un issue para proponer mejoras o reportar fallos.
- Crea PRs descriptivos en ramas separadas.
- Ejecuta `npm run lint` antes de enviar PR.
- Añade tests y documentación para cambios relevantes.

---

## ��� Recomendaciones

- Considera mover la clave de la API a un backend/proxy en producción para evitar exponerla.
- Añadir pruebas unitarias / e2e y CI (GitHub Actions) para robustecer el proyecto.

---

> Si quieres, puedo también crear un `CHANGELOG`, añadir badge(s) de CI/coverage o mejorar la sección de Contribución. ¿Quieres que haga alguno de estos cambios? ✅
