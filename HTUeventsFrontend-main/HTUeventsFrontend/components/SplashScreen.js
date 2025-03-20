import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [pulseAnim] = useState(new Animated.Value(1)); // Initial scale value for the pulse effect

  // Pulse Animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2, // Scale up
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1, // Scale back down
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Animated Image */}
      <Animated.Image
        source={require('../images/HTUevents logo.png')} 
        style={[styles.logoImage, { transform: [{ scale: pulseAnim }] }]} // Apply the pulse effect
      />

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoImage: {
    resizeMode: 'contain',
    width: '70%',
    height: '70%',
    marginTop: 30,
  },
  button: {
    marginTop: 5,
    bottom: 150,
    padding: 15,
    backgroundColor: '#ff4d4d', 
    borderRadius: 5,
    width: '60%', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
