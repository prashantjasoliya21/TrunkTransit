import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter your mobile number</Text>
      
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="+1 234567890"
          placeholderTextColor={'#000'}
          keyboardType="phone-pad"
        />
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonGoogle}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.buttonGoogle}>Continue with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.findAccountText}>Find my account</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the number provided.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 20,
    color:'black'
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
    color:'black'
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'grey',
  },
  googleButton: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonGoogle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailButton: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  findAccountText: {
    textAlign: 'center',
    color: '#0000FF', // or your desired color for the "Find my account" text
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
