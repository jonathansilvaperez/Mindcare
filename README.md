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
