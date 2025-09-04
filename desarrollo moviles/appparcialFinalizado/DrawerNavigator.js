import { createDrawerNavigator } from "@react-navigation/drawer";
import LibrosPremium from "./src/screens/LibrosPremium";
import Librosdetalles from "./src/screens/Librosdetalles";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import TabsNavigator from "./src/screens/TabsNavigator";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={TabsNavigator} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Configuración" component={SettingsScreen} />
     <Drawer.Screen name="LibrosPremium" component={LibrosPremium} />
      <Drawer.Screen name="Librosdetalles" component={Librosdetalles} />

    </Drawer.Navigator>
  );
}
