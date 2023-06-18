import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const MainScreen = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = '+966590566102'; // Replace with the desired phone number
    const message = 'Hello! I am interested in booking a cab.'; // Replace with the desired message
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url)
      .catch(() => {
        console.log('Failed to open WhatsApp');
      });
  };

  const navigation = useNavigation();
  const handleBookNow = () => {
    navigation.navigate('BookingConfirmation'); // Navigate to the BookingConfirmationScreen
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/download.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>
            Stepping into the sacred land of Saudi Arabia for Umrah Pilgrimage of Humanity and gratitude.
            Now book our Cab Hassle Free from our Application.
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleBookNow}>
              <FontAwesome name="book" size={20} color="white" />
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainerWhatsapp} onPress={openWhatsAppChat}>
              <FontAwesome name="whatsapp" size={20} color="white" />
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  text: {
    width: '70%',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'left',
    paddingTop: 100,
    lineHeight: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    alignSelf:'center', // Center the buttons horizontally 
    position:'absolute',
    bottom: 100,

  },
  buttonContainerWhatsapp: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#30ab42',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffc61a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MainScreen;
