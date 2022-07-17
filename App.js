import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Text, StatusBar } from 'react-native';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import { colors } from './src/theme/colors';


const Stack = createNativeStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require('./assets/fonts/Antonio-Medium.ttf'),
    "Spartan-Bold" : require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular" : require("./assets/fonts/LeagueSpartan-Regular.ttf")
  })
  if(!loaded){
    return <Text>Font is loading ....</Text>
  }
  return (
      <>
        <StatusBar 
        backgroundColor={colors.black}
        />
          <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}