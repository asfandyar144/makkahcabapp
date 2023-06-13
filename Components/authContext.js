import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async(email,password) => {
    try {
      const response = await axios.get(`https://node.cabmakkah.com/api/v1/agentLogin/${email}/${password}`);
      console.log(response.data)
      if(response.data.success == "true"){
        setIsAuthenticated(true);
        await AsyncStorage.setItem("user",JSON.stringify(response.data.user))
      }else{
        setIsAuthenticated(false);

      }
    } catch (error) {
      setIsAuthenticated(false);
      console.log("Error in login",error)
    }
    // Perform authentication logic here
    // Set isAuthenticated to true if authentication is successful
  };

  const logout = async() => {
    // Perform logout logic here
    // Set isAuthenticated to false
    await AsyncStorage.removeItem("user")
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
