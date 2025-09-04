import { Button, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, marginBottom: 40, color:"#24b946", fontWeight: 'bold'}}> bMusic </Text>
        <Button
        title = "Iniciar"
        onPress={()=> navigation.navigate("Principal")}
        />
      </View>
    );
}
