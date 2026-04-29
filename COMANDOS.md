# 📝 Comandos Rápidos

Este archivo contiene los comandos más usados durante el desarrollo.

## Comandos Git

### Subir cambios al repositorio
```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

### Clonar el proyecto
```bash
git clone https://github.com/kalejaformacion-ship-it/Desde-Claude.git
cd Desde-Claude
```

### Ver estado de archivos
```bash
git status
```

### Ver historial de commits
```bash
git log --oneline
```

### Crear una nueva rama
```bash
git checkout -b nombre-de-la-rama
```

## Comandos NPM

### Instalación inicial
```bash
npm install
```

### Desarrollo
```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Compila para producción
npm run preview      # Previsualiza la build
npm run lint         # Revisa código con ESLint
```

### Gestión de dependencias
```bash
npm install nombre-paquete           # Instalar nueva dependencia
npm install nombre-paquete --save-dev # Instalar dependencia de desarrollo
npm uninstall nombre-paquete         # Desinstalar paquete
npm update                           # Actualizar dependencias
npm outdated                         # Ver paquetes desactualizados
```

### Limpieza
```bash
rm -rf node_modules package-lock.json
npm install
```

## Comandos útiles del sistema

### Ver estructura de carpetas
```bash
tree -L 2 -I node_modules
```

### Buscar en archivos
```bash
grep -r "texto a buscar" src/
```

### Ver tamaño de carpetas
```bash
du -sh *
```

## Atajos de teclado en Vite

- `r` - Recargar página
- `u` - Mostrar URL
- `o` - Abrir en navegador
- `c` - Limpiar consola
- `q` - Salir

## URLs importantes

- **Desarrollo local**: http://localhost:5173
- **Repositorio**: https://github.com/kalejaformacion-ship-it/Desde-Claude
- **Documentación React**: https://react.dev
- **Documentación Tailwind**: https://tailwindcss.com
- **Iconos Lucide**: https://lucide.dev

## Tips de desarrollo

### Hot Module Replacement (HMR)
Los cambios en archivos `.jsx` y `.css` se reflejan automáticamente sin recargar la página.

### Debugging
```javascript
console.log('Variable:', variable)
console.table(array)
console.error('Error:', error)
```

### Formateo de código
Si usas VS Code, instala la extensión "Prettier" y formatea con:
- Windows/Linux: `Shift + Alt + F`
- Mac: `Shift + Option + F`

## Solución rápida de problemas

### El servidor no inicia
```bash
killall node
npm run dev
```

### Cambios no se reflejan
```bash
# Ctrl+C para detener el servidor
npm run dev
```

### Error de permisos en Linux/Mac
```bash
sudo npm install
```

---

**Pro tip**: Guarda este archivo como referencia rápida. Actualízalo con comandos que uses frecuentemente.
