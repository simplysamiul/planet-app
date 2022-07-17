import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { colors } from '../theme/colors';

const Details = ({planet}) => {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn="true" />
            <Text>DCetails page</Text>
        </SafeAreaView>  
    );
};

export default Details;

const styles  = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor: colors.black,
    },
});