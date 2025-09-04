import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Libros = [
  { id: "1",
     name: "El señor de los anillo", price: 80, 
    description: "guerra de edad media",
    image: "https://share.google/images/kNY2pDeXN0KUBDygJ" },
  { id: "2",
    name: "Animales fantasticos",
    price: 60, description: "mundo magicos",
     image: "https://share.google/images/HDsGIciyMDrO4Lr0s" },
  { id: "3",
     name: "Las cronicas de narnia",
      price: 40, description: "gerra fria",
       image: "https://share.google/images/DWGjbcH2nQ5mUbULP" },
  { id: "4", name: "Las 50 sombras de Gray",
     price: 10, description: " psociones hot",
      image: "https://share.google/images/5D1Qz5mtFTty7Oh05" },
  { id: "5",
     name: "100 años de soledad", 
     price: 20, description: "  desesperanza de una familia", 
     image: "https://share.google/images/y6raWhbd8rOAQH0av" },
];

export default function Bliblioteca({ navigation }) {
  return (
    <FlatList
      data={Libros}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("Librosdetalles", { Libros: item })}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", padding: 10, borderBottomWidth: 1 },
  image: { width: 60, height: 60, marginRight: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
});
