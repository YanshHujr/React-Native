/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import BackgroundImage from './assets/images/BackGroundImage.jpg';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <ImageBackground
          source= {BackgroundImage}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <Text style={styles.headerText}>Sign In</Text>
        </ImageBackground>
      </View>

      <View style={styles.bodyContainer}>

        <Text style={styles.Text}>Welcome Back!</Text>
        <Text style={styles.subText}>Please sign in to continue.</Text>

        <Text style={styles.lablelText}>Username or Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Username or Phone Number"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.lablelText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE',
  },
  headerContainer: {
    flex: 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bodyContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  lablelText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#7A7A7A',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginBottom: 15,
  },
  signInButton: {
    height: 50,
    backgroundColor: '#33A6A6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  signInButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#3E7BFA',
    textAlign: 'right',
    marginTop: 10,
  },
});

export default LoginScreen;
