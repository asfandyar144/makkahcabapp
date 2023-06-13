// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const AgentLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Handle login logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Agent Login</Text>
//       <TextInput
//         style={styles.input}
//         value={username}
//         onChangeText={setUsername}
//         placeholder="Username"
//         placeholderTextColor="white"
//       />
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Password"
//         placeholderTextColor="white"
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'black',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color:'#ffc61a',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//     color:'white',
//   },
//   loginButton: {
//     backgroundColor: '#ffc61a',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default AgentLogin;


import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Components/authContext';

const AgentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const { isAuthenticated, login } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('AgentBookingConfirmation');
    }
  }, [isAuthenticated, navigation]);

  const handleLogin = () => {
    if (username && password) {
      login(username, password);
      navigation.navigate('AgentBookingConfirmation');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/madina.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Agent Login</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#ffc61a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AgentLogin;
