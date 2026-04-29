# ✈️ Vuelos Baratos a Colombia

Aplicación web interactiva para buscar y comparar vuelos desde España hacia Colombia. Desarrollada con React y Tailwind CSS.

![Vuelos Colombia](https://img.shields.io/badge/React-18+-blue.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 Características

- **Búsqueda flexible**: Selecciona entre 6 aeropuertos españoles de origen
- **8 destinos colombianos**: Bogotá, Medellín, Cali, Cartagena, Barranquilla, Santa Marta, San Andrés y Pereira
- **Filtros avanzados**:
  - Precio máximo con slider interactivo
  - Ordenación por precio o duración
  - Número de pasajeros ajustable
- **Información detallada**:
  - Horarios de salida y llegada
  - Número de escalas
  - Duración total del vuelo
  - Disponibilidad de asientos
  - Indicadores de ofertas especiales
- **Estadísticas en tiempo real**:
  - Precio mínimo encontrado
  - Precio medio
  - Número total de vuelos disponibles
- **Diseño responsive**: Optimizado para móviles, tablets y desktop

## 🚀 Instalación

### Prerrequisitos

- Node.js 16+ 
- npm o yarn

### Pasos

1. Clona este repositorio:
```bash
git clone https://github.com/kalejaformacion-ship-it/Desde-Claude.git
cd Desde-Claude
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Dependencias

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  }
}
```

## 🎨 Tecnologías utilizadas

- **React 18+**: Framework de interfaz de usuario
- **Tailwind CSS**: Framework de estilos utility-first
- **Lucide React**: Librería de iconos moderna
- **JavaScript ES6+**: Sintaxis moderna de JavaScript

## 📋 Funcionalidades principales

### Ciudades de origen (España)
- ✈️ Madrid (MAD) - Aeropuerto Adolfo Suárez Madrid-Barajas
- ✈️ Barcelona (BCN) - Aeropuerto Josep Tarradellas Barcelona-El Prat
- ✈️ Bilbao (BIO) - Aeropuerto de Bilbao
- ✈️ Málaga (AGP) - Aeropuerto de Málaga-Costa del Sol
- ✈️ Sevilla (SVQ) - Aeropuerto de Sevilla
- ✈️ Valencia (VLC) - Aeropuerto de Valencia

### Ciudades de destino (Colombia)
- 🇨🇴 Bogotá (BOG) - Aeropuerto Internacional El Dorado
- 🇨🇴 Medellín (MDE) - Aeropuerto Internacional José María Córdova
- 🇨🇴 Cali (CLO) - Aeropuerto Internacional Alfonso Bonilla Aragón
- 🇨🇴 Cartagena (CTG) - Aeropuerto Internacional Rafael Núñez
- 🇨🇴 Barranquilla (BAQ) - Aeropuerto Internacional Ernesto Cortissoz
- 🇨🇴 Santa Marta (SMR) - Aeropuerto Internacional Simón Bolívar
- 🇨🇴 San Andrés (ADZ) - Aeropuerto Gustavo Rojas Pinilla
- 🇨🇴 Pereira (PEI) - Aeropuerto Internacional Matecaña

### Aerolíneas incluidas
- Avianca
- Iberia
- LATAM Airlines
- Air Europa
- Copa Airlines
- Viva Air

## 🛠️ Uso

1. **Selecciona tu origen**: Elige el aeropuerto español desde donde viajarás
2. **Elige tu destino**: Selecciona la ciudad colombiana a la que quieres volar
3. **Configura las fechas**: Indica cuándo quieres ir y volver
4. **Ajusta los filtros**: 
   - Define el precio máximo que estás dispuesto a pagar
   - Selecciona el número de pasajeros
   - Elige cómo ordenar los resultados
5. **Explora los resultados**: Revisa las opciones disponibles con todos los detalles
6. **Reserva**: Haz clic en "Reservar ahora" en el vuelo que más te guste

## 📱 Capturas de pantalla

### Vista Desktop
La aplicación muestra un formulario de búsqueda completo, estadísticas y listado de vuelos con toda la información detallada.

### Vista Mobile
Diseño totalmente responsive que se adapta a dispositivos móviles manteniendo toda la funcionalidad.

## 🔮 Próximas mejoras

- [ ] Integración con APIs reales de aerolíneas
- [ ] Sistema de reservas completo
- [ ] Comparación de precios históricos
- [ ] Alertas de precio por email
- [ ] Filtro por aerolíneas específicas
- [ ] Mapa interactivo de destinos
- [ ] Sistema de recomendaciones basado en preferencias
- [ ] Modo oscuro

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Creado con ❤️ por el equipo de Kaleja Formación

## 🙏 Agradecimientos

- Iconos proporcionados por [Lucide](https://lucide.dev/)
- Diseño inspirado en las mejores prácticas de UX/UI para aplicaciones de viajes
- Datos de aeropuertos y aerolíneas basados en información real

---

**Nota**: Esta es una aplicación de demostración. Los vuelos y precios mostrados son simulados con fines educativos. Para reservas reales, consulta las páginas oficiales de las aerolíneas o agencias de viajes autorizadas.
