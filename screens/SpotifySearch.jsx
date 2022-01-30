import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { colors } from '../utils/colors'

const Card = () => {
    return (

        <View style={styles.cardsList}>
            <TouchableOpacity style={{ ...styles.cardContainer, marginRight: '5%', backgroundColor: colors[Math.floor(Math.random() * 12)] }}>
                <Text style={styles.cardText}>Pop</Text>
                <View style={styles.cardImageContainer}>

                    <Image
                        style={styles.cardImage}
                        source={require("../assets/musicalGirl.png")}

                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.cardContainer, backgroundColor: colors[Math.floor(Math.random() * 12)] }}>
                <Text style={styles.cardText}>Pop</Text>
                <View style={styles.cardImageContainer}>

                    <Image
                        style={styles.cardImage}
                        source={require("../assets/phone.jpg")}

                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const SpotifySearch = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.searchLabel}>Search</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={"Artist, songs, or podcasts"}
                />
                <Text style={styles.genereLabel}>Your top generes</Text>
                {
                    // making array to iterte via map 
                    "000000000".split("").map((e, i) => (
                        <React.Fragment key={i}>
                            <Card />
                        </React.Fragment>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 75,
        marginLeft: 15,
        marginRight: 15,
    },
    searchLabel: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 18,
    },
    input: {
        backgroundColor: "lightgray",
        height: 45,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 3,
        marginBottom: 15,
    },
    genereLabel: {
        fontWeight: 'bold',
        marginBottom: 15,
    },
    scrollView: {
    },
    cardsList: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 13
    },
    cardContainer: {
        borderRadius: 5,
        width: '47.5%',
        height: 80,
        // backgroundColor: 'lightgray',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    cardText: {
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 13,
    },
    cardImageContainer: {
        width: '60%',
        height: '80%',
        position: 'absolute',
        right: -40,
        bottom: -10,
        transform: [{ rotate: '25deg' }]
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
    }
})

export default SpotifySearch;
