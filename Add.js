import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import {database} from './Data.js';

const styles = StyleSheet.create({
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

const Add = ({navigation}) => {
    const [pokemon, setPokemon] = useState('');
    const[imageUrl, setImageUrl] = useState('');
    const [type, setType] = useState('');

    return (
        <View style={{padding: 10, backgroundColor:'lightgrey'}}>
            <Text style={styles.pageHeader}>Add Your Pokemon!</Text>
            <View style={{padding:10}}>
                <Text style={styles.label}>Pokemon Name:</Text>
                <TextInput style={styles.input} onChangeText={(text) => setPokemon(text)} />
            </View>

            <View style={{padding:10}}>
                <Text style={styles.label}>Image URL:</Text>
                <TextInput style={styles.input} onChangeText={(text) => setImageUrl(text)}/>
            </View>

            <View style={{padding:10}}>
                <Text style={styles.label}>Type:</Text>
                <RNPickerSelect value={type}
                                onValueChange={(value) => setType(value)}
                                items={[
                                    {label: "Water Pokemon", value: "Water Pokemon"},
                                    {label: "Grass Pokemon", value: "Grass Pokemon"}
                                ]}
                />
            </View>

            <Button
                title="Submit"
                onPress={() => {
                    let newPokemon = {name:pokemon, image: imageUrl};
                    let indexNum = 1;
                    if (type === "Water Pokemon") {
                        indexNum = 0;
                }
                    database[indexNum].data.push(newPokemon);
                    navigation.navigate('Home');
                }}
            />

        </View>


    )
}

export default Add;
