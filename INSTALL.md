# 🚀 Guía de Instalación Completa

Esta guía te ayudará a poner en marcha el proyecto desde cero.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene con Node.js) o **yarn**
- **Git** - [Descargar aquí](https://git-scm.com/)

Para verificar que tienes todo instalado, ejecuta:

```bash
node --version
npm --version
git --version
```

## Pasos de instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/kalejaformacion-ship-it/Desde-Claude.git
cd Desde-Claude
```

### 2. Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias listadas en `package.json`:
- React y React DOM
- Lucide React (iconos)
- Vite (bundler)
- Tailwind CSS
- Y todas las demás herramientas de desarrollo

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173`

Tu navegador debería abrirse automáticamente. Si no, abre manualmente esa URL.

### 4. Compilar para producción

Cuando estés listo para desplegar:

```bash
npm run build
```

Esto creará una carpeta `dist/` con todos los archivos optimizados.

### 5. Previsualizar la build de producción

Para ver cómo se verá en producción:

```bash
npm run preview
```

## Estructura del proyecto

```
Desde-Claude/
├── public/
│   └── plane-icon.svg          # Favicon
├── src/
│   ├── App.jsx                 # Componente principal
│   ├── VuelosBaratosColombia.jsx  # Componente de búsqueda
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── index.html                  # HTML base
├── package.json                # Dependencias
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js           # Configuración de PostCSS
├── .eslintrc.cjs               # Configuración de ESLint
├── .gitignore                  # Archivos ignorados por Git
├── LICENSE                     # Licencia MIT
└── README.md                   # Documentación
```

## Solución de problemas

### Error: `Cannot find module`
```bash
rm -rf node_modules package-lock.json
npm install
```

### El puerto 5173 está ocupado
Edita `vite.config.js` y cambia el puerto:
```javascript
server: {
  port: 3000, // o cualquier otro puerto
  open: true
}
```

### Errores de ESLint
Desactiva ESLint temporalmente o ejecuta:
```bash
npm run lint
```

### Tailwind no funciona
Verifica que `tailwind.config.js` y `postcss.config.js` estén en la raíz del proyecto.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Próximos pasos

Una vez que tengas el proyecto funcionando:

1. Explora el código en `src/VuelosBaratosColombia.jsx`
2. Personaliza los estilos en `src/index.css`
3. Añade nuevas características
4. Lee el README.md para más información

## ¿Necesitas ayuda?

Si encuentras algún problema:

1. Revisa esta guía de nuevo
2. Busca en los Issues del repositorio
3. Crea un nuevo Issue describiendo el problema
4. Contacta al equipo de Kaleja Formación

¡Feliz desarrollo! ✈️
