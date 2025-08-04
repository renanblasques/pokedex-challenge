import { useFonts } from 'expo-font';
import List from './components/List';
import Details from './components/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  useFonts({
    Overpass: require('/assets/fonts/Overpass-Regular.ttf'),
    OverpassItalic: require('/assets/fonts/Overpass-Italic.ttf'),
    OpenSans: require('/assets/fonts/OpenSans-Regular.ttf'),
    OpenSansItalic: require('/assets/fonts/OpenSans-Italic.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={List} />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}