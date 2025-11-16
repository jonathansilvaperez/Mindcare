# MindCare – Cáscara de aplicación (Unidad 3, Parte B)

MindCare es una aplicación móvil desarrollada con Ionic + Angular, orientada al bienestar emocional.
Esta versión corresponde a la **cáscara** de navegación: pantallas creadas y rutas funcionando,
sin lógica avanzada ni conexión a backend.

## Requisitos

- Node.js y npm
- Ionic CLI

## Instalación

```bash
npm install
ionic serve
```

## Estructura principal

- `src/app/app-routing.module.ts`: definición de rutas.
- `src/app/pages/*`: páginas Login, Register, Home, Autoevaluación, Agenda, Directorio.
- `src/theme/variables.scss`: colores base inspirados en MindCare.

## Problemas enfrentados

- Ajuste de rutas iniciales → se agregó un redirect a `/login`.
- Estilos globales → se aplicó una paleta suave acorde a la identidad de MindCare.
- Carga de imágenes → se definió la carpeta `assets/` para posibles logos y fotografías.

```

