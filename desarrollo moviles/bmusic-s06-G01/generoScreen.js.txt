import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const musicGenres = [
  {
    id: 1,
    genero: "Pop",
    descripcion: "Canciones pegajosas y modernas que suenan en la radio.",
  },
  {
    id: 2,
    genero: "Rock",
    descripcion: "Guitarras eléctricas, baterías potentes y mucha energía.",
  },
  {
    id: 3,
    genero: "Reggaetón",
    descripcion: "Ritmos urbanos latinos para bailar y fiestas.",
  },
  {
    id: 4,
    genero: "Jazz",
    descripcion: "Música instrumental relajada, con saxofones y pianos.",
  },
  {
    id: 5,
    genero: "Clásica",
    descripcion: "Obras orquestales de grandes compositores de la historia.",
  },
];

const GenresScreen = () => {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{item.genero}</Text>
      <Text style={styles.desc}>{item.descripcion}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={musicGenres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default GenresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    margin: 5,
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  desc: {
    fontSize: 14,
    color: "#666",
  },
});
