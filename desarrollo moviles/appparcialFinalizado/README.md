# Restaurante Digital - App Móvil

## Descripción
Esta aplicación simula un **restaurante moderno** donde los clientes pueden explorar el menú digital desde su propio teléfono, marcar platillos favoritos, simular un carrito de compras y revisar su perfil de usuario.  
La app está desarrollada con **React Native y Expo**, utilizando **Drawer, Tab y Stack Navigators** para una navegación fluida.

---

## Funcionalidades

### 1. Login
- Pantalla inicial donde el usuario ingresa su nombre de usuario y contraseña.
- Usuario de prueba: `admin`
- Contraseña: `1234`
- Una vez validados los datos, el usuario accede a la aplicación principal.

### 2. Navegación principal (Drawer)
- **Inicio**: acceso a las pestañas del menú, favoritos y carrito.  
- **Perfil**: muestra nombre, correo y avatar del usuario.  
- **Configuración**: sección opcional con información adicional o ajustes.

### 3. Pestañas (TabNavigator) dentro de Inicio
- **Menú**: lista de platillos disponibles con imagen, nombre y precio.  
- **Favoritos**: platillos marcados como favoritos por el usuario.  
- **Carrito**: simula los platillos añadidos para compra.

### 4. Detalle de platillo (StackNavigator dentro de Menú)
- Al seleccionar un platillo, se muestra:
  - Imagen del platillo
  - Nombre y precio
  - Descripción breve
  - Botones para agregar a favoritos o al carrito, con alertas y cambio de color dinámico.

---

## Uso
1. Ejecutar la app con Expo:  
   ```bash
   npx expo start
