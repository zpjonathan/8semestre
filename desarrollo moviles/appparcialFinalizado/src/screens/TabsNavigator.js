import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "./CartScreen";
import FavoritesScreen from "./FavoritesScreen";
import LibrosPremium from "./LibrosPremium";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Biblioteca") iconName = "book";
        else if (route.name === "Favoritos") iconName = "heart";
        else if (route.name === "Carrito") iconName = "cart";
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="Biblioteca" component={LibrosPremium} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      <Tab.Screen name="Carrito" component={CartScreen} />
    </Tab.Navigator>
  );
}
