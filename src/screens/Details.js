import React from 'react';
import { Image, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';


// planet section
const PlanetSection = ({title, value}) =>{
    return(
        <View style={styles.planetSection}>
            <Text preset='small' style={{textTransform: "uppercase"}}>{title}</Text>
            <Text preset='h2'>{value}</Text>
        </View>
    )
}



const Details = ({route}) => {
    const planet = route.params.planet;
    const {name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink} = planet;
    const renderImg = () =>{
        switch(name){
            case "mercury":
                return <MercurySvg />
            case "venus":
                return <VenusSvg />
            case "earth":
                return <EarthSvg />
            case "mars":
                return <MarsSvg />
            case "jupiter":
                return <JupiterSvg />
            case "saturn":
                return <SaturnSvg />
            case "uranus":
                return <UranusSvg />
            case "neptune":
                return <NeptuneSvg />
        }
    };
    // link press function
    const onPressLink = () =>{
        Linking.openURL(wikiLink);
    }
    return (
            <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn="true" />
            <ScrollView>
                {/* Image */}
                <View style={styles.imageView}>
                     {renderImg()}
                </View>
                {/* details */}
                <View style={styles.detailsView}>
                    <Text style={styles.name} preset="h1">{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.source}>
                    <Text>Source : </Text>
                    <Pressable onPress={onPressLink}>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                    </View>
                </View>
                {/* planet section */}
                <PlanetSection title="ROTATION TIME" value={rotationTime} />
                <PlanetSection title="REVOLUATION TIME" value={revolutionTime} />
                <PlanetSection title="RADIUS" value={radius} />
                <PlanetSection title="AVERAGE TIME" value={avgTemp} />
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
        marginTop: spacing[8],
        padding: spacing[5],
        alignItems: "center",
        justifyContent: "center"
    },
    detailsView : {
        marginTop: spacing[10],
        marginBottom: spacing[5],
        marginHorizontal: spacing[6],
        alignItems: "center"
    },
    name:{
        textTransform: "uppercase",
        textAlign: "center"

    },
    description :{
        marginTop: spacing[3],
        textAlign: "center",
        lineHeight: 22
    },
    source :{
        flexDirection: "row",
        // alignItems: "center",
        marginTop: spacing[5]
    },
    wikipedia : {
        textDecorationLine: "underline",
        fontWeight: "bold"
    },
    planetSection:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
    }
});