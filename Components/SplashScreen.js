// // SplashScreen.js

// import React, { useEffect } from 'react';
// import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const splashTimeout = setTimeout(() => {
//       navigation.navigate('MainScreen'); // Replace 'MainScreen' with the appropriate screen name
//     }, 5000);

//     return () => clearTimeout(splashTimeout);
//   }, [navigation]);

//   return (
//     <ImageBackground
//       source={require('../assets/GMC.jpg')} // Replace with the actual path to your image
//       style={styles.backgroundImage}
//     >
//       <View style={styles.overlay}>
//       <Image
//           source={require('../assets/png-4.png')} // Replace with the actual path to your overlay image
//           style={styles.overlayImage}
//         />
//         <Text style={styles.text1}>MAKKAH CAB</Text>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: '#ffc61ac7', // Adjust the alpha value to change the intensity of the color overlay
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlayImage: {
//     position: 'absolute',
//     width: '50%',
//     height: '33%',
//   },
//   text1: {
//     fontSize: 27,
//     fontWeight: 'bold',
//     color: 'black',
//     padding: 10,
//     paddingTop:300,
//     fontStyle:'italic',
//   },
// });

// export default SplashScreen;


import React, { useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      navigation.navigate('MainScreen'); // Replace 'MainScreen' with the appropriate screen name
    }, 5000);

    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/GMC.jpg')} // Replace with the actual path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
      <Animatable.Image
          animation="slideInRight" // Animation type: fade in
          duration={1500} // Duration of the animation in milliseconds
          delay={500} // Delay before the animation starts in milliseconds
          source={require('../assets/png-4.png')} // Replace with the actual path to your animated image
          style={styles.image}
        />
        <Animatable.Text
          animation="slideInLeft" // Animation type: slide in from the left
          duration={1000} // Duration of the animation in milliseconds
          delay={500} // Delay before the animation starts in milliseconds
          style={styles.text1}
        >
          <Animatable.Text
            animation="slideInRight" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={200} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            M
          </Animatable.Text>
          <Animatable.Text
            animation="slideInLeft" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={400} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            A
          </Animatable.Text>
          <Animatable.Text
            animation="slideInRight" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={600} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            K
          </Animatable.Text>
          <Animatable.Text
            animation="slideInLeft" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={800} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            K
          </Animatable.Text>
          <Animatable.Text
            animation="slideInRight" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={1000} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            A
          </Animatable.Text>
          <Animatable.Text
            animation="slideInLeft" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={1200} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            H
          </Animatable.Text>
          <Animatable.Text
            animation="slideInRight" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={1400} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            &nbsp;
          </Animatable.Text>
          <Animatable.Text
            animation="slideInLeft" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={1600} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            C
          </Animatable.Text>
          <Animatable.Text
            animation="slideInRight" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={1800} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            A
          </Animatable.Text>
          <Animatable.Text
            animation="slideInLeft" // Animation type: fade in
            duration={500} // Duration of the animation in milliseconds
            delay={2000} // Delay before the animation starts in milliseconds
            style={styles.letter}
          >
            B
          </Animatable.Text>
        </Animatable.Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 198, 26, 0.78)', // Adjust the alpha value to change the intensity of the color overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 313,
    marginBottom: 20,
  },
  text1: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
    fontStyle: 'italic',
    flexDirection: 'row',
  },
  letter: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SplashScreen;
