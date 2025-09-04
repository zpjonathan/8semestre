
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SongDetailScreen = ({ route }) => {

    const { SongDetail } = route.params;

    const [play, setPlay] = useState(false)

    console.log("detalle de canción: ", SongDetail)

    const handleOnpress = () => {//función para cambiar de icono: play/stop
        setPlay((play) => !play)
    }

    /***
     *  En JavaScript— los operadores ternarios sirven para hacer
     *  una decisión rápida dentro de tu código,
     *  especialmente útil cuando quieres mostrar
     *  algo u otro dependiendo de una condición.
     *  La sintaxis es:
     *  condición ? valorSiVerdadero : valorSiFalso
     ***/

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={{ width: '90%', height: 200 }}
                    source={{ uri: 'https://i.ytimg.com/vi/HGa4ofkQBzA/hqdefault.jpg' }}
                />
                <View>
                    <TouchableOpacity onPress={() => handleOnpress()} style={{ alignSelf: 'center' }}>
                        {!play ? // if play is 'false'
                            <MaterialIcons name='play-circle' size={100} color={'#9292e7'} />
                            : // else
                            <MaterialIcons name='stop-circle' size={100} color={'#9292e7'} />
                        }
                    </TouchableOpacity>
                    <Text style={styles.txtTitle}>{SongDetail.valSong}</Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#121315'
    },
    txtTitle: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 35,
        color: '#9cbcfe'
    }
});

export default SongDetailScreen;
