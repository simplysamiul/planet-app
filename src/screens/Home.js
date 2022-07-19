import React, { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const handelDetails = (item) =>{
        navigation.navigate("Details", {planet : item})
    }
    // hande search field
    const [list, setList] = useState(PLANET_LIST);
    const searchFilter = (text) =>{
        const filteredList = PLANET_LIST.filter((planet) => planet.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
        setList(filteredList);
    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <TextInput placeholder='Type the planet name'
            placeholderTextColor={colors.grey}
            autoCorrect={false}
            style={styles.searchInput}
            onChangeText={(text) => searchFilter(text)}
            />
            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={((item)=> item.name)}
                renderItem={({item}) =>{
                    return(
                    <Pressable onPress={() => handelDetails(item)} style={styles.item}>
                        <View style={{flexDirection: "row", alignItems:"center"}}>
                        <View style={[styles.circle, {backgroundColor: item.color}]} />
                        <Text preset='h4' style={styles.itemName}>{item.name}</Text>
                        </View>
                        <AntDesign name="right" size={18} color="white" />
                    </Pressable>
                    )
                }}
                ItemSeparatorComponent= {() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    );
};

export default Home;


const styles = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor: colors.black,
    },
    list : {
        padding: spacing[4]
    },
    itemName : {
        textTransform: "uppercase",
        marginLeft: spacing[4],
    },  
    item : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: spacing[4],
    },
    circle:{
        width: 30, 
        height: 30, 
        borderRadius: 15,
    },
    separator:{
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white
    },
    searchInput :{
        padding: spacing[4],
        color:  colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[5]
    }
})