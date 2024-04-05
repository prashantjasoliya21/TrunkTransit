import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import images from '../../../assets/images/images';
// import { firebase } from '../../firebase/config'

const RegistrationScreen = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onRegistrationPress = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert("Success!",'Your account created successfully')
        props.navigation.navigate("Login");
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          props.navigation.navigate("Home")
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        // console.error(error);
      });
  }
  return (
    <SafeAreaView>
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: '600', color: 'black', marginBottom: 20 }}>Sign Up</Text>
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
        <TouchableOpacity onPress={onRegistrationPress} style={{ width: '90%', borderRadius: 10, backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
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

export default RegistrationScreen;