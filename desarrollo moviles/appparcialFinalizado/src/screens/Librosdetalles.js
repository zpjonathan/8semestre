import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export default function Librosdetalles({ route }) {
  const { Libros } = route.params;
  const [favColor, setFavColor] = useState("blue");
  const [cartColor, setCartColor] = useState("blue");

  const toggleFavorite = () => {
    setFavColor(favColor === "blue" ? "green" : "blue");
    Alert.alert("Agregado a favoritos");
  };

  const toggleCart = () => {
    setCartColor(cartColor === "blue" ? "green" : "blue");
    Alert.alert("Agregado al carrito");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: Libros.image }} style={styles.image} />
      <Text style={styles.name}>{Libros.name}</Text>
      <Text>${Libros.price}</Text>
      <Text>{Libros.description}</Text>
      <Button title="Agregar a Favoritos" color={favColor} onPress={toggleFavorite} />
      <Button title="Agregar al Carrito" color={cartColor} onPress={toggleCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: "100%", height: 200, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold" },
});
