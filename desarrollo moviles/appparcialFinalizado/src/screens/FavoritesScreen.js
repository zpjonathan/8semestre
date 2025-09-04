import { FlatList, Text, View } from "react-native";

const favorites = [
  { id: "1", name: "El señor de los anillo" },
  { id: "2", name: " Animales fantasticos" },
  { id: "2", name: " Las cronicas de narnia" },
  
  
];

export default function FavoritesScreen() {
  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
