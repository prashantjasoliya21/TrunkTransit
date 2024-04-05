/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [email, setEmail] = useState("")
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>  
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginBottom: 20 }}>Enter Your Email</Text>
        <TextInput
          value={email}
          placeholder='johnsmith04@gmail.com'
          placeholderTextColor={'grey'}
          onChangeText={setEmail}
          style={{ borderWidth: 2, borderColor: 'black', marginHorizontal: 10, borderRadius: 10, width: '90%', padding: 12, backgroundColor: '#eeeeee', fontSize: 18 }}
        />
        <TouchableOpacity style={{ width: '90%', borderRadius: 10, backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
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
          <Image source={require('./src/assets/images/googleLogo.png')} style={{ height: 35, width: 35, marginRight: 25,}} />
          <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={{marginHorizontal: 10, lineHeight: 20}}>By proceeding, you consent to get calls. WhatsApp or SMS messages, including by automated means, from Trunk Transit and its affiliates to the email providee.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
