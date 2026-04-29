# 📁 Estructura del Proyecto

```
Desde-Claude/
│
├── 📂 .vscode/                    # Configuración de VS Code
│   ├── extensions.json            # Extensiones recomendadas
│   └── settings.json              # Configuración del editor
│
├── 📂 public/                     # Archivos públicos estáticos
│   └── plane-icon.svg             # Favicon del sitio
│
├── 📂 src/                        # Código fuente de la aplicación
│   ├── App.jsx                    # Componente raíz
│   ├── VuelosBaratosColombia.jsx  # Componente principal de vuelos
│   ├── main.jsx                   # Punto de entrada de React
│   └── index.css                  # Estilos globales + Tailwind
│
├── 📄 .eslintrc.cjs               # Configuración de ESLint
├── 📄 .gitignore                  # Archivos ignorados por Git
├── 📄 COMANDOS.md                 # Comandos útiles de desarrollo
├── 📄 INSTALL.md                  # Guía de instalación paso a paso
├── 📄 LICENSE                     # Licencia MIT
├── 📄 README.md                   # Documentación principal
├── 📄 index.html                  # HTML base de la aplicación
├── 📄 package.json                # Dependencias y scripts
├── 📄 postcss.config.js           # Configuración de PostCSS
├── 📄 tailwind.config.js          # Configuración de Tailwind CSS
└── 📄 vite.config.js              # Configuración de Vite

```

## 📋 Descripción de archivos clave

### Configuración
- **vite.config.js**: Configuración del bundler (puerto, plugins, build)
- **tailwind.config.js**: Configuración de Tailwind (colores, fuentes)
- **postcss.config.js**: Procesador CSS para Tailwind
- **.eslintrc.cjs**: Reglas de linting para código limpio
- **package.json**: Dependencias, scripts y metadatos del proyecto

### Código fuente
- **src/main.jsx**: Punto de entrada que monta React en el DOM
- **src/App.jsx**: Componente contenedor principal
- **src/VuelosBaratosColombia.jsx**: Lógica y UI de búsqueda de vuelos
- **src/index.css**: Estilos globales, Tailwind y animaciones

### Documentación
- **README.md**: Documentación completa del proyecto
- **INSTALL.md**: Guía paso a paso de instalación
- **COMANDOS.md**: Referencia rápida de comandos
- **LICENSE**: Licencia MIT del proyecto

### Herramientas de desarrollo
- **.vscode/**: Configuración para VS Code
  - Extensiones recomendadas
  - Formateo automático al guardar
  - Integración con Tailwind

### Archivos públicos
- **public/plane-icon.svg**: Favicon personalizado del sitio
- **index.html**: Estructura HTML base

## 🔄 Flujo de la aplicación

```
index.html
    ↓
src/main.jsx (punto de entrada)
    ↓
src/App.jsx (componente raíz)
    ↓
src/VuelosBaratosColombia.jsx (componente principal)
    ↓
Renderizado en el navegador
```

## 📦 Archivos generados (no en Git)

Estos se generan automáticamente y están en `.gitignore`:

```
node_modules/         # Dependencias instaladas
dist/                 # Build de producción
*.local               # Variables de entorno locales
```

## 🎯 Próximos pasos

1. Instala dependencias: `npm install`
2. Inicia desarrollo: `npm run dev`
3. Edita `src/VuelosBaratosColombia.jsx` para personalizar
4. Revisa `COMANDOS.md` para referencia rápida
