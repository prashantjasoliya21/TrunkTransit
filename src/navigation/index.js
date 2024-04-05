import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrationScreen } from '../component/screen/auth';
import HomeScreen from '../component/screen/home/HomeScreen';
import firebase from '@react-native-firebase/app';
import { getData } from '../utils/Storage';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const firebaseConfig = {
    apiKey: "AIzaSyCwyTp5zriby-c0yzrbWoALd7R7pWD-Umw",
    authDomain: "trunktransit-90618.appspot.com",
    projectId: "trunktransit-90618",
    storageBucket: "trunktransit-90618.appspot.com",
  };
  let firebaseApp;
  if (firebase?.apps?.length === 0) {
    firebaseApp = firebase.initializeApp(firebaseConfig )
  } else {
    firebaseApp = firebase.app()
  }
  
  // const db = firebase.firestore();
  // const auth = firebase.auth();
  

  useEffect(async() => {
    const user = await getData("User")
    console.log("USERDD:",user);
    setUser(user)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user != null && user?.email != undefined ? (
          // <Stack.Screen name="Home">
          //   {props => <HomeScreen {...props} extraData={user} />}
          // </Stack.Screen>
          <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
