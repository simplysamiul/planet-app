import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './text/text';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const PlanetHeader = ({backBtn, title="THE PLANETS"}) => {
    const navigation = useNavigation();
    const handelBackScreen = () =>{
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            {backBtn &&
            <Pressable style={{paddingRight: 15}} onPress={handelBackScreen}>
                <AntDesign name="left" size={22} color="white" />
             </Pressable>
             }
            <Text preset="h2">{title}</Text>
        </View>
    );
};

export default PlanetHeader;

const styles = StyleSheet.create({
    container : {
        padding : spacing[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection:"row",
        alignItems:"center"
    }
})
