

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen2({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla Home</Text>
            <Button title="Ir a Perfil" onPress={() => navigation.navigate('Perfil')} />
        </View>
    );
}

function SettingScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla de Configuracion</Text>
        </View>
    );
}

function ProfileScreen() {//nueva
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla de perfil</Text>
        </View>
    );
}

function GenresScreen() {//nueva
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla Géneros</Text>
        </View>
    );
}

const openDrawer = ({navigation}) => {
   return(
    <Button title='Open' onPress={() => navigation.openDrawer()}/>
   )
}

function StackNavigator({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name=" Home" component={HomeScreen2} 
                options={{
                    headerLeft: () => (openDrawer({navigation}))
                }}
            />
            <Stack.Screen name="Perfil" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

function TabNavigator({navigation}) {//nueva: Pegar debajo de StackNavigator
    return (
        <Tab.Navigator>
            <Tab.Screen name="Homes" component={StackNavigator} 
                options={{headerShown: false}}
            />
            <Tab.Screen name="Genres" component={GenresScreen}
                options={{ headerLeft: ()=> (openDrawer({navigation})) }}
             />
        </Tab.Navigator>
    );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Inicio"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Config" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {//sustitución
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MainApp"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}