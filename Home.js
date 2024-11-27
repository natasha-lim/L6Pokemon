import React from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity, StatusBar, Image, Button} from "react-native";
import {database} from './Data.js';

const styles = StyleSheet.create({
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        fontSize:15,
        padding: 10
    },

    sections: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        backgroundColor:"beige",
        borderWidth: 2,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15
    },

    pageHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'blue',
        textAlign: "center",
        marginBottom: 20
    },


    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
    },

    name: {
        fontSize: 25,
        flex: 1,
        fontWeight: "bold"
    },

    image: {
        width:220,
        height:300,
        resizeMode: "contain",
    }
})


const Home = ({navigation}) => {
    const renderItem = ({item, index, section }) => {
        return (
            <TouchableOpacity
                              onPress={() => navigation.navigate('Edit', {index: index, type:section.title, name:item.name, image: item.image})}
            >
                <View style={styles.item}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Image source={{uri: item.image}} style={styles.image} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex:1, marginTop: 50, marginBottom: 50}}>
            <Text style={styles.pageHeader}>Pokemon Catalogue</Text>
            <StatusBar hidden={true}/>
            <View style={{alignItems:"center", marginBottom:10}}>
                <Button title="Add Pokemon" onPress={() => navigation.navigate('Add')}/>
            </View>
            <View style={styles.sections}>
                <SectionList sections={database}
                             renderItem={renderItem}
                             renderSectionHeader={({section:{title, bgColor}}) => (
                                 <View style={[styles.sections]}>
                                     <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}
                                     </Text>
                                 </View>
                             )}
                />
            </View>
        </View>
    );
};

export default Home;
