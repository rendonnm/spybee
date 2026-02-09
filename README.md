# SpyBee - Project Management Dashboard

Aplicación de gestión de proyectos construida con Next.js, React, Zustand y Mapbox GL como respuesta a prueba técnica.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Zustand](https://img.shields.io/badge/Zustand-5.0.11-purple)
![Mapbox](https://img.shields.io/badge/Mapbox_GL-3.18.1-green)

## 📋 Descripción del Proyecto

Sistema de gestión y visualización de proyectos que permite:

- Listar proyectos con información detallada
- Buscar y filtrar proyectos por múltiples criterios
- Visualizar ubicaciones de proyectos en mapa interactivo
- Ver estadísticas generales y próximos vencimientos
- Navegar entre proyectos con sincronización mapa-tabla

## 🏗️ Arquitectura y Stack Tecnológico

### Stack Principal (Requerido)

- **React 19.2.3** - Librería UI con Server Components
- **Next.js 16.1.6** - Framework con App Router y Turbopack
- **Zustand 5.0.11** - Manejo de estado global
- **Mapbox GL 3.18.1** - Visualización de mapas interactivos
- **CSS Modules** - Estilos encapsulados por componente
- **TypeScript 5.0** - Tipado estático

### Estructura de Carpetas

```
src/app/
├── _data/
│   └── mock_data.json          # Datos JSON proporcionados
├── components/
│   ├── icons/                  # Componentes de iconos SVG
│   ├── layout/
│   │   ├── Header.tsx          # Cabecera principal
│   │   ├── ResumenSidebar.tsx  # Sidebar de estadísticas
│   │   ├── UserHeaderInfo.tsx
│   │   └── UserHoneyAvatar.tsx
│   ├── map/
│   │   └── ProjectMap.tsx      # Mapa Mapbox con marcadores
│   ├── projects/
│   │   ├── ProjectHeader.tsx   # Búsqueda y filtros
│   │   ├── ProjectTable.tsx    # Tabla de proyectos
│   │   ├── ProjectRow.tsx      # Fila individual
│   │   └── ...                 # Componentes de columnas
│   └── ui/
│       ├── Chip.tsx
│       └── Pagination.tsx      # Paginación
├── store/
│   ├── useProjectStore.ts      # Store Zustand principal
│   └── selectors/
│       ├── projectSelectors.ts # Selectores de proyectos
│       └── statsSelectors.ts   # Selectores de estadísticas
├── types/
│   └── project.d.ts            # Tipos TypeScript
├── utils/
│   ├── format.ts               # Utilidades de formato
│   └── project.ts              # Lógica de negocio
└── styles/                     # CSS Modules

```
