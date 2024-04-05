import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import * as firebase from '@react-native-firebase/app';
import images from '../../../assets/images/images';
import { getData, storeData } from '../../../utils/Storage';

const LoginScreen = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const firebaseConfig = {
        apiKey: "AIzaSyCwyTp5zriby-c0yzrbWoALd7R7pWD-Umw",
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     console.log("subscriber:",subscriber);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }
    // console.log("user:",user);
    // if (initializing) return null;

    const onLoginPress = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user)
                console.log('Signed in', user);
                storeData("User", user)
                props.navigation.navigate("Home")
            })
            .catch((error) => {
                Alert.alert("Alert", error)
                console.error('Sign in error', error);
            });
    }

    return (
        <SafeAreaView>
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ fontSize: 24, fontWeight: '600', color: 'black', marginBottom: 20 }}>Sign In</Text>
                <TextInput
                    value={email}
                    placeholder='johnsmith04@gmail.com'
                    placeholderTextColor={'grey'}
                    onChangeText={setEmail}
                    style={{ borderWidth: 2, borderColor: 'black', marginHorizontal: 10, borderRadius: 10, width: '90%', padding: 12, backgroundColor: '#eeeeee', fontSize: 18 }}
                />
                <TextInput
                    value={password}
                    placeholder='Abc@1234'
                    placeholderTextColor={'grey'}
                    onChangeText={setPassword}
                    style={{ borderWidth: 2, borderColor: 'black', marginHorizontal: 10, borderRadius: 10, width: '90%', padding: 12, backgroundColor: '#eeeeee', fontSize: 18, marginTop: 10 }}
                />
                <TouchableOpacity style={{ alignItems: 'flex-end', alignSelf: 'flex-end', marginRight: 24, marginTop: 5 }} onPress={() => props.navigation.navigate("Registration")}>
                    <Text style={{ fontSize: 16 }}>Don't have account? <Text style={{ color: 'blue' }}>Sign Up</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLoginPress} style={{ width: '90%', borderRadius: 10, backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>Continue</Text>
                </TouchableOpacity>
                <View style={{ borderWidth: 1, borderColor: 'grey', width: '90%' }} />
                <Text style={{ fontSize: 20, bottom: 16, height: 22, width: 50, backgroundColor: 'white', textAlign: 'center' }}> or </Text>
                <TouchableOpacity style={{
                    width: '90%',
                    borderRadius: 10,
                    backgroundColor: '#eeeeee',
                    padding: 15, justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 25,
                    flexDirection: 'row'
                }}>
                    <Image source={images.googleLogo} style={{ height: 35, width: 35, marginRight: 25, }} />
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>Continue with Google</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10, lineHeight: 20 }}>By proceeding, you consent to get calls. WhatsApp or SMS messages, including by automated means, from Trunk Transit and its affiliates to the email providee.</Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;