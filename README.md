# í³Œ api-ip-localization

**AplicaciÃ³n frontend para obtener la geolocalizaciÃ³n de una IP y mostrar informaciÃ³n relevante (ubicaciÃ³n, moneda, metadata, etc.) usando la API de ipgeolocation.io.**

---

## í³‹ Tabla de contenido
- [DescripciÃ³n](#descripciÃ³n)
- [Demo / Uso](#demo--uso)
- [TecnologÃ­as](#tecnologÃ­as)
- [InstalaciÃ³n](#instalaciÃ³n)
- [Variables de entorno](#variables-de-entorno)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura y componentes clave](#arquitectura-y-componentes-clave)
- [API y tipos de datos](#api-y-tipos-de-datos)
- [Errores comunes y manejo](#errores-comunes-y-manejo)
- [ContribuciÃ³n](#contribuciÃ³n)
- [Notas y recomendaciones](#notas-y-recomendaciones)
- [Licencia](#licencia)

---

## í³ DescripciÃ³n

`api-ip-localization` es una aplicaciÃ³n creada con **React + TypeScript + Vite** que permite introducir una IP y obtener su geolocalizaciÃ³n mediante la API pÃºblica de **ipgeolocation.io**. Incluye validaciÃ³n de IP, manejo y normalizaciÃ³n de errores, toasts para feedback (con `sonner`) y una UI responsive con **TailwindCSS** y **Framer Motion**.

---

## íº€ Demo / Uso

1. Clona el repositorio.
2. Crea el archivo de variables de entorno con tu clave de la API (ver secciÃ³n "Variables de entorno").
3. Instala dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

4. Abre `http://localhost:5173` y prueba introduciendo una IP.

---

## í·° TecnologÃ­as
- React 19 + TypeScript
- Vite
- TailwindCSS
- Framer Motion (animaciones)
- Sonner (toasts)
- react-router-dom (enrutado)
- ESLint

Dependencias completas en `package.json`.

---

## âš™ï¸ InstalaciÃ³n

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

## í´ Variables de entorno

Crea un archivo `.env` o `.env.local` en la raÃ­z con la siguiente variable:

```env
VITE_KEY_API_IP=tu_api_key_de_ipgeolocation
```

> Nota: Las variables que comienzan con `VITE_` se inyectan en el bundle del cliente; para producciÃ³n considera usar un proxy/backend para ocultar la clave.

---

## í³¦ Scripts disponibles
- `npm run dev` â€” inicia servidor de desarrollo (Vite)
- `npm run build` â€” compila (TypeScript + Vite build)
- `npm run preview` â€” sirve la build localmente
- `npm run lint` â€” ejecuta ESLint

---

## í³ Estructura del proyecto (resumen)

```
src/
  App.tsx
  main.tsx
  assets/
  components/
    Atomos/             # componentes pequeÃ±os: Loading, Etiqueta, LinkButton...
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
    IpAddress.d.ts      # definiciÃ³n de IpLocationData
  utils/
    error.ts            # normaliza errores de la API
```

---

## í´§ Arquitectura y componentes clave

- `src/services/obtenerLocalizacion.ts`
  - Construye la peticiÃ³n usando `URL_PETICION + ip` y realiza `fetch`.
  - Muestra toasts en caso de Ã©xito o error y propaga el error para manejo en hooks.

- `src/config/index.ts`
  - `apiKey = import.meta.env.VITE_KEY_API_IP`
  - `URL_PETICION = `https://api.ipgeolocation.io/v2/ipgeo?apiKey=${apiKey}&ip=`

- `src/hooks/Localizacion.ts`
  - Gestor de inputs en 4 campos (octetos), validaciÃ³n bÃ¡sica (0-255) y navegaciÃ³n a `/:ip`.

- `src/hooks/ValidacionIp.ts`
  - Orquesta la llamada a `obtenerLocalizacionIP`, maneja `loading`, `data` y `error`.

- `src/utils/error.ts` y `src/constants/index.ts`
  - TraducciÃ³n/normalizaciÃ³n de respuestas de error de la API (`BOGON`, `DOMINIO`, `UNKNOWN`).

- `src/types/IpAddress.d.ts`
  - Tipo `IpLocationData` (ip, location, country_metadata, currency, message?).

---

## í³¡ API y formatos

- Endpoint utilizado:

```
https://api.ipgeolocation.io/v2/ipgeo?apiKey=API_KEY&ip=IP_A_CONSULTAR
```

- Respuesta esperada: `IpLocationData` (ver `src/types/IpAddress.d.ts`).

---

## âš ï¸ Errores comunes & manejo

- BOGON: IP privada/local (no geolocalizable).
- DOMINIO: dominio no encontrado.
- UNKNOWN: error no clasificado.

La app muestra toasts con `sonner` y, en caso de error al navegar a `/IP`, redirige al home.

Consejos de debug:
- Revisar pestaÃ±a Network en DevTools.
- Confirmar que `VITE_KEY_API_IP` es vÃ¡lida.
- Revisar logs en consola.

---

## í´ ContribuciÃ³n

- Abre un issue para proponer mejoras o reportar fallos.
- Crea PRs descriptivos en ramas separadas.
- Ejecuta `npm run lint` antes de enviar PR.
- AÃ±ade tests y documentaciÃ³n para cambios relevantes.

---

## í²¡ Recomendaciones

- Considera mover la clave de la API a un backend/proxy en producciÃ³n para evitar exponerla.
- AÃ±adir pruebas unitarias / e2e y CI (GitHub Actions) para robustecer el proyecto.

---

## í³„ Licencia
MIT â€” aÃ±ade un fichero `LICENSE` si quieres especificar la licencia formalmente.

---

> Si quieres, puedo tambiÃ©n crear un `CHANGELOG`, aÃ±adir badge(s) de CI/coverage o mejorar la secciÃ³n de ContribuciÃ³n. Â¿Quieres que haga alguno de estos cambios? âœ…
