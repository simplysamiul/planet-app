import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { MercurySvg } from '../svg';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

const Details = ({route}) => {
    const planet = route.params.planet;
    const renderImg = (nane) =>{
        switch(name){
            case "mercury":
                return <MercurySvg />
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn="true" />
            <ScrollView>
                <View style={styles.imageView}>
                     
                </View>
            </ScrollView>
        </SafeAreaView>  
    );
};

export default Details;

const styles  = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor: colors.black,
    },
    imageView : {
        padding: spacing[5],
        alignItems: "center",
        justifyContent: "center"
    }
});