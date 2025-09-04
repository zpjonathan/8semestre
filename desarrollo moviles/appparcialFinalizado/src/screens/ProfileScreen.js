import { Image, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: "https://via.placeholder.com/100" }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>Nombre: Admin</Text>
      <Text>Correo: admin@email.com</Text>
    </View>
  );
}
