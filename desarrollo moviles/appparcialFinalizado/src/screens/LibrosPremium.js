
import { createStackNavigator } from "@react-navigation/stack";
import Biblioteca from "./Bliblioteca";
import Librosdetalles from "./Librosdetalles";

const Stack = createStackNavigator();

export default function LibrosPremium() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Libros" component={Biblioteca} />
      <Stack.Screen name="Detalle del Libro" component={Librosdetalles} />
    </Stack.Navigator>
  );
}
