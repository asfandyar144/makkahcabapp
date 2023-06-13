import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/SplashScreen';
import MainScreen from './Components/MainScreen';
import OurCars from './Components/OurCars';
import OurPackages from './Components/OurPackages';
import AgentLogin from './Components/AgentLogin';
import HeaderRightButtons from './Components/HeaderRightButtons';
import AppHeader from './Components/AppHeader';
import BookingConfirmationScreen from './Components/BookingConfirmationScreen';
import AgentBookingConfirmationScreen from './Components/AgentBookingConfirmationScreen';
import { AuthProvider } from './Components/authContext';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <AuthProvider>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerMode: 'screen' }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerTitle: () => <AppHeader />,
            headerLeft: null,
            headerRight: () => <HeaderRightButtons />,
            headerStyle: {
              backgroundColor: '#ffc61a', // Replace with your desired background color
            },
          }}
        />
        <Stack.Screen
         name="BookingConfirmation"
         component={BookingConfirmationScreen}
         options={{
         headerStyle: {
          backgroundColor:'#ffc61a',
         }
         }}
        />
        <Stack.Screen
          name="OurCars"
          component={OurCars}
          options={{
             title: 'Our Cars',
             headerStyle: {
              backgroundColor: '#ffc61a', // Replace with your desired background color
            },
            }}
        />
        <Stack.Screen
          name="OurPackages"
          component={OurPackages}
          options={{
             title: 'Our Packages',
             headerStyle: {
              backgroundColor: '#ffc61a', // Replace with your desired background color
            },
            }}
        />
       
        <Stack.Screen
          name="AgentLogin"
          component={AgentLogin}
          options={{ 
            title: 'Agent Login',
            headerStyle: {
              backgroundColor: '#ffc61a', // Replace with your desired background color
            },
          }}
        />
        <Stack.Screen
          name="AgentBookingConfirmation"
          component={AgentBookingConfirmationScreen}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;