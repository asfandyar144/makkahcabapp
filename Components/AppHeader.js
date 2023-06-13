import React from 'react';
import { View, Image, StyleSheet, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppHeader = () => {
  const navigation = useNavigation();

  const handleLogoPress = () => {
    // Handle logo press if needed
  };

  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/png-4.png')} // Replace with the path to your logo image
        style={styles.logo}
        resizeMode="contain"
        onPress={handleLogoPress}
      />
      <Text style={styles.headerText}>Makkah Cab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    
  },
  logo: {
    width: 20, // Adjust the width and height according to your logo size
    height: 30,
  },
  headerText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppHeader;
