import React from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';


const Home = ({ navigation }) => {
    const handelDetails = (item) =>{
        navigation.navigate("Details", {planet : item})
        

    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <FlatList
                contentContainerStyle={styles.list}
                data={PLANET_LIST}
                renderItem={({item}) =>{
                    keyExtractor=((item)=> item.name)
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
    }
})