# 📘 MindCare – Aplicación Móvil de Bienestar Emocional

**Versión:** 1.0  
**Desarrollado por:** Jonathan Silva  
**Framework:** Ionic + Angular  

MindCare es una aplicación móvil diseñada como apoyo emocional, permitiendo evaluar el estado de ánimo, practicar ejercicios de respiración, acceder a recordatorios de autocuidado y consultar un directorio de ayuda confiable. Este proyecto corresponde al desarrollo solicitado para la Unidad 3 (Parte A y Parte B).

---

## 1. Requerimientos

### Software obligatorio
| Software | Versión recomendada |
|---------|----------------------|
| Node.js | 18.x o 20.x |
| Angular CLI | 16.x |
| Ionic CLI | ^7.1.0 |
| NPM | 9.x o 10.x |

### Frameworks utilizados
- Ionic Angular Standalone (Ionic 7)
- Angular 16
- Capacitor (opcional si se genera APK)

---

## 2. Instalación del proyecto

### 1. Descargar o ubicar el proyecto  
Debe estar en una ruta simple como:
```
C:\Users\Jonathan Alexander\Desktop\mindcareApp
```

### 2. Instalar dependencias
```
npm install
```

⚠ En caso de conflicto con Angular 17 o 20, reinstalar Angular 16:
```
npm uninstall -g @angular/cli
npm install -g @angular/cli@16
```

---

## 3. Ejecución

Para iniciar el proyecto:
```
ionic serve
```

Abrir en:
```
http://localhost:8100
```

---

## 4. Estructura del proyecto

```
mindcareApp/
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   ├── pages/
│   │   │   ├── autoevaluacion/
│   │   │   ├── respiracion/
│   │   │   ├── agenda/
│   │   │   ├── directorio/
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   └── theme/
│
├── package.json
└── README.md
```

---

## 5. Funcionalidades principales

### 🏠 Home
- Saludo personalizado  
- Estado de ánimo actual  
- Accesos directos a funcionalidad principal  

### 🫁 Ejercicios de respiración  
Incluye técnicas como respiración 4–4–4–4, diafragmática y guiada.

### 📝 Autoevaluación emocional  
Pregunta principal, botones 1 a 5, y recomendación final.

### 📅 Agenda  
Recordatorios de autocuidado (pausas, hidratación, ejercicios).

### 📞 Directorio  
Contactos esenciales para apoyo emocional.

---

## 6. Problemas enfrentados y soluciones

✔ Problemas enfrentados durante el desarrollo 

Durante la construcción de la aplicación surgieron varios inconvenientes técnicos. El primero fue una incompatibilidad entre Angular 17/20 y la versión de Ionic utilizada, lo que impedía ejecutar la aplicación. Esto se resolvió reinstalando Angular 16 y reconstruyendo las dependencias.
Otro problema fue que la aplicación quedaba en blanco debido a que las rutas no estaban correctamente declaradas; esto se corrigió revisando y actualizando app.routes.ts.
Finalmente, un error en el entorno indicaba que faltaba el builder de Angular Devkit. Esto se solucionó eliminando node_modules y reinstalando las dependencias desde cero.
Superados estos puntos, la aplicación quedó funcionando correctamente con ionic serve.

### ❌ Conflicto Angular CLI fuera del workspace  
Solución: reinstalar Angular 16, borrar node_modules y package-lock.json.

### ❌ El proyecto mostraba "Blank"
Rutas no configuradas correctamente → corregido en app.routes.ts.

### ❌ Incompatibilidad Angular 17/20 con Ionic 7  
Solución: reinstalar Angular CLI 16.

---

## 7. Consideraciones de diseño

- App funcional sin conexión  
- Bajos requisitos de memoria  
- Navegación simple  
- Colores suaves, botones grandes  

---

## 8. Mejoras futuras

- Guardado de historial emocional  
- Modo oscuro  
- Notificaciones push  
- Módulo de estadísticas  
- Chat emocional  

---

## 9. Créditos

**Desarrollador:** Jonathan Silva 

---

10. Desarrollo del proyecto (requerido por la unidad)

Para desarrollar la aplicación MindCare, primero se creó la estructura base utilizando Ionic Angular Standalone. Luego se añadieron nuevos componentes como Autovalución y Respiración, cumpliendo con la exigencia de integrar al menos dos componentes nuevos dentro del proyecto. Cada componente se construyó con su archivo .ts, .html y .scss, y se integró en la navegación principal mediante app.routes.ts.
Durante el desarrollo se planificó el diseño priorizando la simplicidad: navegación clara, botones grandes y procesos cortos para asegurar que la aplicación pueda usarse incluso en dispositivos con limitaciones de memoria o conectividad. Con esto se completó más del 50 % del contenido total requerido para la entrega final.

---

11. Generación del APK no firmado (Parte B)

Como parte de la fase final del proyecto, se generó el archivo APK no firmado de la aplicación MindCare utilizando Capacitor y Android Studio. Para ello, primero se añadió la plataforma Android mediante los comandos estándar de Ionic:

ionic capacitor add android
ionic capacitor sync android
ionic capacitor open android

Con el proyecto abierto en Android Studio, se utilizó la opción:

Build → Generate App Bundle(s) / APK(s) → Generate APK(s)

La compilación se realizó correctamente, mostrando el mensaje “Build completed successfully”, y permitiendo localizar el archivo generado. El APK resultante corresponde a la versión debug (sin firma), cumpliendo con lo solicitado por la guía para esta unidad. El archivo quedó disponible en la ruta:

android/app/build/outputs/apk/debug/app-debug.apk

Finalmente, este APK fue añadido al repositorio Git del proyecto dentro de la carpeta /apk, cumpliendo con el requisito de incluir tanto el código de la aplicación como el archivo ejecutable generado.
