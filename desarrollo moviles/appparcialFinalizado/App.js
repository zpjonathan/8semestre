import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import LoginScreen from "./LoginScreen";
import Librosdetalles from "./src/screens/Librosdetalles";
import LibrosPremium from "./src/screens/LibrosPremium";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
         <Stack.Screen name="Librosdetalles" component={Librosdetalles} />
          <Stack.Screen name="LibrosPremium" component={LibrosPremium} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
