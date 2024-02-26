import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/screens/Home';
// import Favorite from './src/screens/Favorite';
import Detail from './src/screens/Detail';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='Profile' 
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Detail" component={Detail} />
      {/* <Stack.Screen name="Favorite" component={Favorite} /> */}
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
