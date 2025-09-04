import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // así es mejor que importarlo de 'react-native'

export default function PlayListDetailScreen ({navigation, route}) {

    const {id, value, songs} = route.params; // parámatros que vienen de la vista anterior

    if (songs == null) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No hay canciones para esa playlist seleccionada 🙁</Text>
            </View>
        )
    }

    console.log("canciones: ", songs) // ver en consola el contenido del array songs
    
    const handleOnpress = ({ item }) => {
        navigation.navigate(
            "SongDetailScreen", //navegando
            { SongDetail: item } // enviando parámetros
        )
    }

    const RenderItem = ({ item }) => {
        return (
            <TouchableOpacity
                key={item.idSong}
                style={styles.card}
                onPress={() => handleOnpress({ item })}
                activeOpacity={0.5}
            >
                <Text style={styles.txtItemCard}>{item.valSong}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={{ Flex: 1 }}>
        <View style={styles.viewTitle}>
        <Text style={{color: '#FFFF', fontSize:25, marginLeft: 5}}>{value}</Text>
        </View>
            <FlatList
                data={songs}
                renderItem={({ item }) => (
                    RenderItem({item})
                )}
                keyExtractor={(item) => item.idSong}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewTitle: {
        width: '70%',
        height: 60,
        backgroundColor: '#13ac6a',
        elevation: 5,
        borderEndEndRadius: 5,
        borderEndStartRadius: 5,
        marginBottom: 25,
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        width: '90%',
        height: '50',
        margin: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        elevation: 5, //sombar android
        shadowColor: "#000", // sombra iOS
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },

    },
    txtItemCard:{
        fontSize: 18,
        color: '#101f51be'
    }
})