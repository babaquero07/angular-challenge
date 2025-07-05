# Angular Challenge - Posts Explorer

Una aplicación web moderna construida con Angular 20 que permite explorar y buscar posts desde la API de JSONPlaceholder. La aplicación cuenta con una interfaz de usuario intuitiva y responsive diseñada con Tailwind CSS.

## 🚀 Características

- **Exploración de Posts**: Visualiza una lista de 100 posts disponibles desde JSONPlaceholder API
- **Búsqueda en Tiempo Real**: Busca posts por título con debounce de 300ms para optimizar el rendimiento
- **Interfaz Responsive**: Diseño adaptativo que funciona en dispositivos móviles y de escritorio
- **Estados de Carga**: Indicadores visuales durante la carga de datos
- **Manejo de Errores**: Interfaz amigable para mostrar errores de conexión
- **Filtrado Local**: Filtrado adicional en el cliente para mejorar la experiencia de usuario

## 🛠️ Tecnologías Utilizadas

- **Angular 20**: Framework principal con signals y control flow moderno
- **TypeScript**: Tipado estático para mayor robustez del código
- **Tailwind CSS 4**: Framework de CSS utility-first para el diseño
- **RxJS**: Programación reactiva para manejo de observables
- **JSONPlaceholder API**: API REST para obtener datos de posts

## 📁 Estructura del Proyecto

```
src/app/
├── components/
│   ├── advice-card/          # Componente para mostrar mensajes informativos
│   ├── footer/               # Componente del pie de página
│   ├── loading/              # Componente de carga
│   ├── post-card/            # Tarjeta individual de post
│   ├── posts-list/           # Lista de posts
│   └── search-box/           # Caja de búsqueda
├── interfaces/
│   └── posts.interface.ts    # Interfaz TypeScript para Post
├── pipes/
│   └── filter.pipe.ts        # Pipe personalizado para filtrado
├── services/
│   └── posts.service.ts      # Servicio para comunicación con API
├── app.html                  # Template principal
├── app.ts                    # Componente raíz
└── app.routes.ts             # Configuración de rutas
```

## 🏗️ Arquitectura

### Componentes Principales

1. **App Component** (`app.ts`): Componente raíz que maneja el estado global y la lógica de búsqueda
2. **SearchBox Component**: Input de búsqueda con debounce automático
3. **PostsList Component**: Contenedor que renderiza la lista de posts
4. **PostCard Component**: Tarjeta individual que muestra título, ID y contenido del post
5. **AdviceCard Component**: Componente reutilizable para mostrar mensajes informativos
6. **Loading Component**: Spinner de carga animado
7. **Footer Component**: Pie de página con información de la API

### Servicios

- **PostsService**: Maneja las peticiones HTTP a JSONPlaceholder API
  - `getPosts()`: Obtiene todos los posts
  - `searchPostsByTitle(title)`: Busca posts por título

### Pipes

- **FilterPipe**: Filtra posts localmente por título usando el query de búsqueda

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js**: Versión 18 o superior
- **npm**: Gestor de paquetes de Node.js

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd angular-challenge
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 📝 Scripts Disponibles

```bash
# Servidor de desarrollo
npm start
ng serve

# Construir para producción
npm run build
ng build

# Construir en modo watch
npm run watch
ng build --watch --configuration development

# Ejecutar tests
npm test
ng test
```

## 🎯 Uso de la Aplicación

### Funcionalidades Principales

1. **Visualización de Posts**: Al cargar la aplicación, se muestran automáticamente todos los posts disponibles
2. **Búsqueda**: Utiliza la caja de búsqueda en la parte superior para filtrar posts por título
3. **Navegación**: Los posts se muestran en un diseño de grid responsive
4. **Estados de Carga**: Durante la búsqueda, se muestra un indicador de carga

### Características de UX

- **Debounce**: La búsqueda tiene un delay de 300ms para evitar peticiones excesivas
- **Estados Vacíos**: Mensajes informativos cuando no hay resultados
- **Manejo de Errores**: Notificaciones claras en caso de errores de conexión
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla

## 🔧 Configuración del Entorno

### Variables de Entorno

El proyecto utiliza la API de JSONPlaceholder configurada en:

- **Desarrollo**: `src/environments/environment.development.ts`
- **Producción**: `src/environments/environment.ts`

```typescript
export const environment = {
  production: true,
  baseUrl: "https://jsonplaceholder.typicode.com",
};
```

### Dependencias Principales

- `@angular/*`: Framework Angular 20
- `tailwindcss`: Framework CSS
- `rxjs`: Programación reactiva
- `typescript`: Tipado estático
