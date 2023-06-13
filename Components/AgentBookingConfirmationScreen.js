// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import BookingForm from './BookingForm';
// import HeaderRightButtons from './HeaderRightButtons';
// import { useNavigation } from '@react-navigation/native';
// import { useContext } from 'react';
// import { AuthContext } from '../Components/authContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AgentBookingConfirmationScreen = () => {
//   const [user, setUser] = useState({});
//   const navigation = useNavigation();
//   const { logout, isAuthenticated } = useContext(AuthContext);
//   console.log(isAuthenticated)
//   if (!isAuthenticated) {

//     navigation.navigate('AgentLogin');
//     return;
//   }
//   const handleLogout = () => {
//     // Perform logout logic here
//     // Navigate back to the AgentLogin screen
//     logout();
//     navigation.navigate('AgentLogin');
//   };
//   useEffect(() => {
//     console.log("Use Effect called")
//     async function fetchData() {
//       try {
//         const user = await AsyncStorage.getItem("user")
//         setUser(JSON.parse(user))
//         console.log(JSON.parse(user))
//       } catch (error) {
//         // Handle any errors
//       }
//     }

//     fetchData();
//   }, [])
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../assets/Riyadh.jpg')}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <View style={styles.overlay}>
//           {user && user.counry &&
//             <React.Fragment>
//               <Text>{user.name}</Text>

//               <Text>{user.counry}</Text>
//             </React.Fragment>
//           }
//           <Text style={styles.text}>Booking Form</Text>
//           <BookingForm />
//         </View>
//       </ImageBackground>
//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.logoutButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#ffc61a',
//   },
//   logoutButton: {
//     backgroundColor: '#ffc61a',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   logoutButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default AgentBookingConfirmationScreen;


// import React, { useEffect, useState, useContext } from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import BookingForm from './BookingForm';
// import HeaderRightButtons from './HeaderRightButtons';
// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../Components/authContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AgentBookingConfirmationScreen = () => {
//   const [user, setUser] = useState({});
//   const navigation = useNavigation();
//   const { logout, isAuthenticated } = useContext(AuthContext);
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const user = await AsyncStorage.getItem("user")
//         setUser(JSON.parse(user))
//         console.log(JSON.parse(user))
//       } catch (error) {
//         // Handle any errors
//       }
//     }

//     fetchData();
//   }, [])
  
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigation.navigate('AgentLogin');
//     }
//   }, [isAuthenticated, navigation]);

//   const handleLogout = () => {
//     logout();
//     navigation.navigate('AgentLogin');
//   };
  
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../assets/Riyadh.jpg')}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <View style={styles.overlay}>
//           {user && user.country &&
//             <React.Fragment>
//               <Text>{user.name}</Text>
//               <Text>{user.country}</Text>
//             </React.Fragment>
//           }
//           <Text style={styles.text}>Booking Form</Text>
//           <BookingForm />
//         </View>
//       </ImageBackground>
//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.logoutButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#ffc61a',
//   },
//   logoutButton: {
//     backgroundColor: '#ffc61a',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   logoutButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default AgentBookingConfirmationScreen;






import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import BookingForm from './BookingForm';
import HeaderRightButtons from './HeaderRightButtons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Components/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const AgentBookingConfirmationScreen = () => {
  const [user, setUser] = useState({});
  const navigation = useNavigation();
  const { logout, isAuthenticated } = useContext(AuthContext);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const user = await AsyncStorage.getItem("user")
        setUser(JSON.parse(user))
        console.log(JSON.parse(user))
      } catch (error) {
        // Handle any errors
      }
    }

    fetchData();
  }, [])
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('AgentLogin');
    }
  }, [isAuthenticated, navigation]);

  const handleLogout = () => {
    logout();
    navigation.navigate('AgentLogin');
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Riyadh.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          {user && user.counry &&
            <React.Fragment>
              <View style={styles.rowContainer}>
                <View style={styles.leftColumn}>
                  <Text style={styles.infoText}>{user.name}</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.infoText}>{user.counry}</Text>
                </View>
              </View>
            </React.Fragment>
          }
          <Text style={styles.text}>Booking Form</Text>
          <BookingForm />
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// Rest of the styles and component export...
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
  logoutButton: {
    backgroundColor: '#ffc61a',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor:'#ffc61a',
    width:'100%',
    paddingTop:30
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  infoText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    padding:15
  },
});
export default AgentBookingConfirmationScreen;
