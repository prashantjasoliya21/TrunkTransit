import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './NavigationParams';
import LoginScreen from './Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen"
       screenOptions={{
        headerShown: false,
        animationEnabled: true, // Enable screen transitions
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
