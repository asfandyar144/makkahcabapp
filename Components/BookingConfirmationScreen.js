// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BookingForm from './BookingForm';
// import HeaderRightButtons from './HeaderRightButtons';

// const BookingConfirmationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Booking Form</Text>
//       <BookingForm />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'black'
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color:'#ffc16a'
//   },
// });

// export default BookingConfirmationScreen;





import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import BookingForm from './BookingForm';
import HeaderRightButtons from './HeaderRightButtons';

const BookingConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Riyadh.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Booking Form</Text>
          <BookingForm />
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffc61a',
  },
});

export default BookingConfirmationScreen;
