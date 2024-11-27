import React, {useState} from 'react';
import {database} from "./Data.js"
import {TextInput, View, Text, Button, StyleSheet, Alert} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const styles = StyleSheet.create({
    button: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 10,
        padding:10,
        borderRadius:5,
    },

    pageHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'blue',
        textAlign: "center",
        marginTop: 5
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 6,
        paddingLeft: 10,
        marginBottom: 15
    }
});

const Edit = ({navigation, route}) => {
    const [pokemon, setPokemon] = useState(route.params.name);
    const [imageUrl, setImageUrl] = useState(route.params.image);

    return (
        <View style={{padding:10, backgroundColor:'lightgrey'}}>
            <Text style={styles.pageHeader}>Edit Your Pokemon!</Text>
            <View style={{padding:10}}>
                <Text style={styles.label}>Pokemon Name:</Text>
                <TextInput style={styles.input} value={pokemon}  onChangeText={(text) => setPokemon(text)} />
            </View>

            <View style={{padding:10}}>
                <Text style={styles.label}>Image URL:</Text>
                <TextInput style={styles.input} value={imageUrl} onChangeText={(text) => setImageUrl(text)}/>
            </View>

            <View style={styles.button}>
                <View style={{width:175}}>
                    <Button
                        title="Save"
                        onPress={() => {
                            const indexNum = route.params.type === "Water Pokemon" ? 0:1;
                            database[indexNum].data[route.params.index].name = pokemon;
                            database[indexNum].data[route.params.index].image = imageUrl;
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{width: 175}}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            const indexNum = route.params.type === "Water Pokemon" ? 0:1;
                            Alert.alert("Are you sure?", '', [
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        database[indexNum].data.splice(route.params.index, 1);
                                        navigation.navigate("Home");
                                    }
                                },
                                {text: 'No'}
                            ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
